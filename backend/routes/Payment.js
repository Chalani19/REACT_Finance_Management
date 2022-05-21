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
    const CompanyName = req.body.CompanyName;
    const Address =req.body.Address;
    const Email = req.body.Email;
    const PostalCode = req.body.PostalCode;
    const Description = req.body.Description;
    const Materials = req.body.Materials;
   

    const newPayment  = new Payment({
        PaymentID,
        CompanyName,
        Address,
        Email,
        PostalCode,
        Description,
        Materials
       
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
            Payment.CompanyName = req.body.CompanyName;
            Payment.Address = req.body.Address;
            Payment.PostalCode = req.body.PostalCode;
            Payment.Email = req.body.Email;
            Payment.Description = req.body.Description;
            Payment.Materials = req.body.Materials;
            
          

            Payment.save()
                .then(() => res.json('Payment updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

