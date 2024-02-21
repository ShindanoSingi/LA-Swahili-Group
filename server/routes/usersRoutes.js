const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = require("express").Router();
const authMiddleware = require('../middlewares/authMiddleware');

// dotenv configuration
require('dotenv').config();

// Register User
router.post('/register', async (req, res) => {
      try {
            const { firstName, lastName , password} = req.body;
            const phone = req.body.phone.replace(/\D/g, '');

            if (!firstName || !lastName || !password || !phone) {
                  return res.send({
                        message: 'Please enter all fields',
                        success: false
                  })
            }

            const user = await User.findOne({ phone });

            if (user) {
                    return res.send({
                            message: "User already exists",
                            success: false
                    })
            }

            const salt = await bcrypt.genSalt(10);
            if (!salt) {
                  return res.send({
                        message: "Something went wrong. Please try again!",
                        success: false
                  })
            }

            const hash = await bcrypt.hash(password, salt);
            if (!hash) {
                  return res.status(400).json({ message: "Something went wrong hashing the password" });
            }

            const newUser = new User({
                  firstName,
                  lastName,
                  email,
                  password: hash,
                  phone,
            });

            const savedUser = await newUser.save();
            if (!savedUser) {
                  return res.send({
                        message: "Something went wrong. Please try again!",
                        success: false
                  })
            }

            const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
                  expiresIn: 3600
            });

            if (!token) {
                  return res.send({
                        message: "Something went wrong. Please try again!",
                        success: false
                  })
            }

            res.send({
                  token,
                  user: {
                        id: savedUser.id,
                        firstName: savedUser.firstName,
                        lastName: savedUser.lastName,
                        email: savedUser.email,
                        phone: savedUser.phone,
                  },
                  message: "User created successfully",
                  success: true
            });

      } catch (error) {
            res.send({
                    message: error.message,
                    success: false
            })
      }
});

module.exports = router;
