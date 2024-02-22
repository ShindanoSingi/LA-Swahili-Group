const User = require('../models/userModel');
const Payment = require('../models/paymentModel');
const router = require('express').Router();

// Add a user's payment
router.post('/add-payment', async (req, res) => {
      try {
            const user = await User.findOne({
                    _id: req.body.userId
            });

            if(user.userRole === 'Admin' || user.userRole === 'Superuser') {

            const payment = new Payment({
                  user,
                  amount: req.body.amount,
                  day: req.body.day,
                  month: req.body.month,
                  year: req.body.year
            });
            await payment.save();
            res.send({
                  payment,
                  success: true,
                  message: 'Payment added successfully'
            });
        } else {
            res.send({
                message: 'You are not authorized to add payments',
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

module.exports = Payment