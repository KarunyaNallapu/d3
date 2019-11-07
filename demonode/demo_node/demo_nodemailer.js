var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'karunya@ahex.co.in',
    pass: 'K6C1a7@7'
  }
});

var mailOptions = {
  from: 'karunya@ahex.co.in',
  to: 'karunya@ahex.co.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 