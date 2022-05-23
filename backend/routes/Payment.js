const router = require('express').Router();
let Payment  = require('../models/Payment.model');

router.route('/').get((req, res) => {
    Payment.find()
        .then(Payment => res.json(Payment))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add Function

router.route('/add').post((req, res) => {

    const PaymentID = req.body.PaymentID;
    const CustomerID = req.body.CustomerID;
    const FirstName = req.body.FirstName;
    const LastName =req.body.LastName;
    const Email = req.body.Email;
    const PaymentMethod = req.body.PaymentMethod;
    const PackageName = req.body.PackageName;
    const TotalAmount = req.body.TotalAmount;
    const PaymentStatus = req.body.PaymentStatus;
   

    const newPayment  = new Payment({
        PaymentID,
        CustomerID,
        FirstName,
        LastName,
        Email,
        PaymentMethod,
        PackageName,
        TotalAmount,
        PaymentStatus
       
    });

    newPayment.save()
        .then(() => res.json('Payment  added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Data 
router.route('/:id').get((req, res) => {
    Payment.findById(req.params.id)
        .then(Payment => res.json(Payment))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Payment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Payment deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update data
router.route('/update/:id').post((req, res) => {
    Payment.findById(req.params.id)
        .then(Payment => {
            Payment.PaymentID = req.body.PaymentID;
            Payment.CustomerID = req.body.CustomerID;
            Payment.FirstName = req.body.FirstName;
            Payment.LastName = req.body.LastName;
            Payment.Email = req.body.Email;
            Payment.PaymentMethod = req.body.PaymentMethod;
            Payment.PackageName = req.body.PackageName;
            Payment.TotalAmount = req.body.TotalAmount;
            Payment.PaymentStatus = req.body.PaymentStatus;
            
          

            Payment.save()
                .then(() => res.json('Payment updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;





