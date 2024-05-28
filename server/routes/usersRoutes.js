const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const router = require("express").Router();
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');
const path = require('path');
const middlewareWrapper = require('cors');
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
const userId = require('shortid').generate();

// Multer configuration
const storage = multer.diskStorage({
      destination: function (req, file, cb) {
            cb(null, '../client/src/images/');
      },
      filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname));
      },
});

const upload = multer({
      storage: storage,
});

// dotenv configuration
require('dotenv').config();

const isLegalPhoneNumber = (phoneNumber) => {
        try {
            const parsedNumber = phoneUtil.parse(phoneNumber, 'US');
            return phoneUtil.isValidNumber(parsedNumber);
        } catch (error) {
            return false;
        }
}

// Register User
router.post('/register', authMiddleware, async (req, res) => {

    const user = await User.findById({_id: req.body.userId});

      try {
            // Check if the user is already registered
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const phoneNumber = req.body.phone.replace(/\D/g, '');

            if (!phoneNumber || !phoneNumber.match(/^\d{10}$/)) {
                return res.send({
                    message: 'Invalid phone number',
                    success: false,
                });
            }

            if (!isLegalPhoneNumber(phoneNumber)) {
                return res.send({
                    message: 'Invalid phone number',
                    success: false,
                });
            }

            // const phone = req.body.phone.replace(/\D/g, '');
            const password = req.body.password;

            const passwordConfirm = req.body.passwordConfirm;

            if (password !== passwordConfirm) {
                return res.send({
                    message: 'Password mismatch',
                    success: false,
                });
            }

            const existingUser = await User.findOne({phone: phoneNumber});
            if (existingUser){
                return res.send({
                    message: 'User already registered',
                    success: false,
                });
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            const newUser = await User(
                  {
                        firstName: firstName,
                        lastName: lastName,
                        fullName: `${firstName} ${lastName}`,
                        phone: phoneNumber,
                        password: hashedPassword,
                        userId: userId,
                        addedBy: user.fullName,
                  }
            ).save();

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

      const phone = req.body.phone.replace(/\D/g, '');
      const password = req.body.password;

      try {
            const user = await User.findOne({ phone: phone });

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
role:user.role,
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
                    message: 'Invalid phone number or password',
                    success: false
            })
      }
});

// Get Users
router.get('/get-users', async (req, res) => {
      try {
            const users = await User.find({}).populate('payments');

    //   Calculate the total amount paid by each user
    users.forEach(user => {
        let totalAmount = 0;
        user.payments.forEach(payment => {
            totalAmount += payment.amount;
        });

        user.totalAmount = totalAmount;
    });

    totalOfAllUsers = 0;
    users.forEach(user => {
        totalOfAllUsers += user.totalAmount;
    });

    users.grandTotal = totalOfAllUsers;

    res.send({
        users,
        grandTotal: totalOfAllUsers,
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

// Get another user
router.get('/get-user/:id', async (req, res) => {

        try {
                const user = await User.findById({_id: req.params.id}).populate('payments');
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
});

// Update User
router.put('/update-user/:id', async (req, res) => {
      const hashedPassowrd = await User.findOne({ _id: req.params.id });
      try {
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            // req.body.passowrd = hashedPassword;

            console.log(req.body)

            const user = await User.findOneAndUpdate(
                  { _id: req.params.id },
                  {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        fullName: req.body.firstName + ' ' + req.body.lastName,
                        phone: req.body.phone.replace(/\D/g, ''),
                        password: hashedPassword,
                        userRole: req.body.userRole,
                        addedBy: req.body.addedBy,
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
    // console.log(req.file.path)
      try {
            const user = await User.findOneAndUpdate(
                  { _id: req.params.id },
                  {
                        profilePicture: req.file.filename,
                  },
                  { new: true }
            );

            if (!user) {
                  return res.send({
                        message: "User not found",
                        success: false
                  })
            }

            user.save();

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

// Delete picture
router.delete('/delete-picture/:id', async (req, res) => {
      try {
            const user = await User.findOneAndUpdate(
                  { _id: req.params.id },
                  {
                        profilePicture: '',
                  },
                  { new: true }
            );

            if (!user) {
                  return res.send({
                        message: "User not found",
                        success: false
                  })
            }

            user.save();

            res.send({
                  user,
                  success: true,
                  message: 'Profile picture deleted successfully'
            });

      } catch (error) {
            res.send({
                    message: error.message,
                    success: false
            })
      }
});

// Add About
router.put('/add-about/', async (req, res) => {
        try {
                const user = await User.findOneAndUpdate(
                    { _id: req.body.userId },
                    {
                            about: req.body.about,
                    },
                    { new: true }
                );

                if (!user) {
                    return res.send({
                            message: "User not found",
                            success: false
                    })
                }

                user.save();

                res.send({
                    user,
                    success: true,
                    message: 'About updated successfully'
                });

        } catch (error) {
                res.send({
                        message: error.message,
                        success: false
                })
        }
})


module.exports = router;
