const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const Staff = require("../models/Staff");

//Get staff (all)
//GET api/staff
router.get("/", async (req, res, next) => {
  try {
    const staff = await Staff.find();

    return res.status(200).json({
      success: true,
      data: staff,
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err });
  }
});

//POST api/staff
router.post(
  "/",
  [
    check("firstName", "Please add name").not().isEmpty(),
    check("lastName", "Please add name").not().isEmpty(),

    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, password } = req.body;

    try {
      let staff = await Staff.findOne({ email });

      if (staff) {
        return res.status(400).json({ msg: "staff member already exists" });
      }

      staff = new Staff({
        firstName,
        lastName,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      staff.password = await bcrypt.hash(password, salt);

      await staff.save();

      const payload = {
        staff: {
          id: staff.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);

    if (!staff) {
      return res.status(400).json({
        success: false,
        error: "Staff member not found",
      });
    }
    await staff.remove();

    res.status(201).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
});

module.exports = router;
