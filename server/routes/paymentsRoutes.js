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

            if (user.role === "Admin" || user.role === "Superuser") {
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
                  });
                  res.send({
                        payment,
                        addedBy: user.fullName,
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

            if (user.role === "Admin" || user.role === "Superuser") {
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

            if (user.role === "Admin" || user.role === "Superuser") {
                  const payment = await Payment.findByIdAndDelete({
                        _id: req.params.id
                  });

                  const users = await User.find().populate("payments");
                  users.forEach(async (user) => {
                        user.payments = user.payments.filter(
                              (payment) => payment._id !== req.params.id
                        );
                        (await user.save()).populate("payments");
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

// Get all users's payments total for a specific month and year
router.get("/get-user-payments-total/:id/:month", async (req, res) => {
      try {
            const user = await User.findById({
                  _id: req.params.id
            }).populate("payments");

            const totalAmount = user.payments
                  .filter((payment) => payment.month === req.params.month)
                  .reduce((total, payment) => total + payment.amount, 0);

            res.send({
                  totalAmount,
                  success: true
            });
      } catch (error) {
            res.send({
                  message: error.message,
                  success: false
            });
      }
});

// Get the total for all payment for a specific month and year
router.get("/get-payments-total/:month", async (req, res) => {
      try {
            const payments = await Payment.find({
                  month: req.params.month
            });

            const totalAmount = payments.reduce(
                  (total, payment) => total + payment.amount,
                  0
            );

            res.send({
                  totalAmount,
                  success: true
            });
      } catch (error) {
            res.send({
                  message: error.message,
                  success: false
            });
      }
});

router.get("/get-user-payments/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate("payments");

        // Group payments by year
        const paymentsByYear = {};
        const totalAmountByYear = {};
        const allYears = [];

        // Extract all unique years from user payments
        user.payments.forEach((payment) => {
            const year = payment.year;
            if (!paymentsByYear[year]) {
                paymentsByYear[year] = [];
                totalAmountByYear[year] = 0;
                allYears.push(year);
            }
            paymentsByYear[year].push(payment);
            totalAmountByYear[year] += payment.amount;
        });

        // Sort the years array in ascending order
        allYears.sort((a, b) => parseInt(a) - parseInt(b));

        // Include all years with their respective total amount and payments
        const allYearsPayments = [];
        allYears.forEach((year) => {
            const allPayments = paymentsByYear[year] || [];
            allYearsPayments.push({
                totalAmount: totalAmountByYear[year],
                payments: allPayments,
            });
        });

        res.send({
            allYearsPayments,
            success: true
        });
    } catch (error) {
        res.send({
            message: error.message,
            success: false
        });
    }
});





module.exports = router;
