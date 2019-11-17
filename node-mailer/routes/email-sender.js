var express = require('express');
var router = express.Router()
const nodemailer = require('nodemailer');


let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
       user: 'smtpvicode@gmail.com',
       pass: '5kn9&qt#q6t'
    }
});

const message = {
    from: 'elonmusk@tesla.com',
    to: 'alex.ilies@zoho.com',
    subject: 'Design Your Model S | Tesla',
    html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>'
};


/* GET home page. */
router.get('/', function(req, res, next) {
    transport.sendMail(message, function (err, info) {
        if(err){
            console.log(err)
        }

        console.log(info)

        res.send("OK").status(200)
     });

});

module.exports = router;
