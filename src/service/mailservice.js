var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service:'gmail',
    host:"smtp.gmail.com",
    port:465,
    secure:false,
    secureConnection:false,
    auth: {
      user: process.env.mailuser,
      pass: process.env.mailpass,
    },
    tls:{
        rejectUnauthorized:false,
    }
    
  });

  var mailOptions = {
  
    from: process.env.mailuser,
    to:toEmail,
    subject:subject,
    html: otpText,
  
  };

const server = await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (success) {
        resolve(success)
      }
      reject(error)
    })
  })
  if (!server) {
    return {message:"Server error"}
  }

  const success = await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions).then((info, err) => {
      if (info.response.includes('250')) {
        resolve(true)
      }
      reject(err)
    })
  })

  if (!success) {
  return {message:"Error 500"}
  }
return {message:"Success"}
}


