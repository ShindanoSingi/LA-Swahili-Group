const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = require("express").Router();
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');
const path = require('path');

// Multer configuration
const storage = multer.diskStorage({
      destination: function (req, file, cb) {
            cb(null, 'images/');
      },
      filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      },
});

const upload = multer({
      storage: storage,
});

// dotenv configuration
require('dotenv').config();

// Register User
router.post('/register', async (req, res) => {
      try {
            // Check if the user is already registered
            const phone = req.body.phone.replace(/\D/g, '');
            const user = await User.findOne({ phone: phone });

            if (user) {
                  return res.send({
                        message: "User already exists",
                        success: false
                  })
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            req.body.body = hashedPassword;

            const newUser = await User(
                  {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        phone: phone,
                        password: hashedPassword
                  }
            ).save();

            if (!newUser) {
                  return res.send({
                        message: "Something went wrong. Please try again!",
                        success: false
                  })
            }

            res.send({
                  message: "User registered successfully",
                  success: true
            });

      } catch (error) {
            res.send({
                    message: error.message,
                    success: false
            })
      }
});

// Login User
router.post('/login', async (req, res) => {
      try {
            const phone = req.body.phone.replace(/\D/g, '');
            const password = req.body.password;

            if (!phone || !password) {
                  return res.send({
                        message: 'Please enter all fields',
                        success: false
                  })
            }

            const user = await User.findOne({ phone: phone });
            if (!user) {
                  return res.send({
                        message: "User does not exist",
                        success: false
                  })
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                  return res.send({
                        message: "Invalid credentials",
                        success: false
                  })
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
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
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        phone: user.phone,
                  },
                  message: "User logged in successfully",
                  success: true
            });

      } catch (error) {
            res.send({
                    message: error.message,
                    success: false
            })
      }
});

// Get Users
router.get('/get-users', async (req, res) => {
      try {
            const users = await User.find({});
            res.send({
                  users,
                  success: true
            });
      } catch (error) {
            res.send({
                    message: error.message,
                    success: false
            })
      }
});

// Get User
router.get('/get-user', authMiddleware, async (req, res) => {

      try {
            const user = await User.findById({_id: req.body.userId});
            res.send({
                  user,
                  success: true,
                  message: 'User fetched successfully'
            });

      } catch (error) {
            res.send({
                    message: error.message,
                    success: false
            })

      }
}
);

// Update User
router.put('/update-user/:id', async (req, res) => {
      try {
            const user = await User.findOneAndUpdate(
                  { _id: req.params.id },
                  {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        phone: req.body.phone.replace(/\D/g, ''),
                        password: req.body.password,
                        role: req.body.role,
                        profilePicture: req.body.profilePicture
                  },
                  { new: true }
            );

            if (!user) {
                  return res.send({
                        message: "User not found",
                        success: false
                  })
            }

            res.send({
                  user,
                  success: true,
                  message: 'User updated successfully'
            });

      } catch (error) {
            res.send({
                    message: error.message,
                    success: false
            })
      }
});

// Delete User
router.delete('/delete-user/:id', async (req, res) => {
      try {
            const user = await User.findOneAndDelete({ _id: req.params.id });
            if (!user) {
                  return res.send({
                        message: "User not found",
                        success: false
                  })
            }

            res.send({
                  success: true,
                  message: 'User deleted successfully'
            });

      } catch (error) {
            res.send({
                    message: error.message,
                    success: false
            })
      }
}
);

// Update user profile picture
router.put('/update-picture/:id', upload.single('profilePicture'), async (req, res) => {
      try {
            const user = await User.findOneAndUpdate(
                  { _id: req.params.id },
                  {
                        profilePicture: req.file.path,
                  },
                  { new: true }
            );

            if (!user) {
                  return res.send({
                        message: "User not found",
                        success: false
                  })
            }

            res.send({
                  user,
                  success: true,
                  message: 'Profile picture updated successfully'
            });

      } catch (error) {
            res.send({
                    message: error.message,
                    success: false
            })
      }
});


module.exports = router;
