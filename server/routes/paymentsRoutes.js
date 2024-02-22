const User = require("../models/userModel");
const Payment = require("../models/paymentModel");
const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");

// Add a user's payment
router.post("/add-payment", authMiddleware, async (req, res) => {
      try {
            const user = await User.findOne({
                  _id: req.body.userId
            });

            if (user.userRole === "Admin" || user.userRole === "Superuser") {
                  const payment = new Payment({
                        fullName: req.body.fullNames,
                        amount: req.body.amount,
                        day: req.body.day,
                        month: req.body.month,
                        year: req.body.year,
                        addedBy: user.fullName
                  });
                  await payment.save();

                  const users = await User.find();
                  console.log(users[0].fullName === req.body.fullName);
                    users.forEach(async (user) => {
                        if (user.fullName === req.body.fullName) {
                              user.payments.push(payment);
                              (await user.save()).populate("payments");
                        }
                    })
                  res.send({
                        payment,
                        success: true,
                        message: "Payment added successfully"
                  });
            } else {
                  res.send({
                        message: "You are not authorized to add payments",
                        success: false
                  });
            }
      } catch (error) {
            res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Get all payments
router.get("/get-payments", async (req, res) => {
      try {
            const payments = await Payment.find();
            res.send({
                  payments,
                  success: true
            });
      } catch (error) {
            res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Get payment
router.get("/get-payment/:id", async (req, res) => {
      try {
            const payment = await Payment.findById({
                  _id: req.params.id
            });
            res.send({
                  payment,
                  success: true
            });
      } catch (error) {
            res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Update payment
router.put("/update-payment/:id", authMiddleware, async (req, res) => {
      try {
            const user = await User.findOne({
                  _id: req.body.userId
            });

            if (user.userRole === "Admin" || user.userRole === "Superuser") {
                  const payment = await Payment.findByIdAndUpdate(
                        {
                              _id: req.params.id
                        },
                        {
                              name: req.body.name,
                              amount: req.body.amount,
                              day: req.body.day,
                              month: req.body.month,
                              year: req.body.year,
                              paid: req.body.paid,
                              paidBy: req.body.paidBy
                        },
                        { new: true }
                  );
                  res.send({
                        payment,
                        success: true,
                        message: "Payment updated successfully"
                  });
            } else {
                  res.send({
                        message: "You are not authorized to update payments",
                        success: false
                  });
            }
      } catch (error) {
            res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Delete payment
router.delete("/delete-payment/:id", authMiddleware, async (req, res) => {
      try {
            const user = await User.findOne({
                  _id: req.body.userId
            });

            if (user.userRole === "Admin" || user.userRole === "Superuser") {
                  const payment = await Payment.findByIdAndDelete({
                        _id: req.params.id
                  });
                  res.send({
                        payment,
                        success: true,
                        message: "Payment deleted successfully"
                  });
            } else {
                  res.send({
                        message: "You are not authorized to delete payments",
                        success: false
                  });
            }
      } catch (error) {
            res.send({
                  message: error.message,
                  success: false
            });
      }
});

module.exports = router;
