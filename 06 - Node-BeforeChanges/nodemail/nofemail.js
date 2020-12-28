const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMails(address) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  /*let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
*/

//clid
///701534015502-s512b1omnkcpa58q0qt1thgq9csutoon.apps.googleusercontent.com

//sec
//mgEJoh16C_7oN6DaVCEyNeUI

//authc  4/0AY0e-g73JcWcKMf2gOB1wv7oeYeWEEtvu5dZ4Rp53clzHrjKblHHuDDHYpNSSwF7i0LDOQ
//reftk 1//04Nr6F8Au69aWCgYIARAAGAQSNwF-L9IrCo9jHaLbhILl2Adf4OURUwj-FZuj0GFUI95vdnF8LuC-AauyGwATp76JSEssVRXul5o
//actk ya29.a0AfH6SMA9OoHwT6HD3aQs3QhR3N3dTm6y3yWX9MBRpg_NlIQoAbwLgad_-R1x49nsnBccQAq6pjQQqwANT44KDWoQJw9yqYx3JQjmf1-wC4Y4Axwvjs4-KnCsexHdzI7c9uLPwNui6Xcg0lsTENPMfA-hpBxeCKayrE4x3vsFA-M




let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'service32mailing@gmail.com',
        clientId: '701534015502-s512b1omnkcpa58q0qt1thgq9csutoon.apps.googleusercontent.com',
        clientSecret: 'mgEJoh16C_7oN6DaVCEyNeUI',
        //serviceClient: '113600000000000000000',
        //privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBg...',
        //accessToken: 'ya29.a0AfH6SMA9OoHwT6HD3aQs3QhR3N3dTm6y3yWX9MBRpg_NlIQoAbwLgad_-R1x49nsnBccQAq6pjQQqwANT44KDWoQJw9yqYx3JQjmf1-wC4Y4Axwvjs4-KnCsexHdzI7c9uLPwNui6Xcg0lsTENPMfA-hpBxeCKayrE4x3vsFA-M',
        expires: 1484314697598
    }
});



  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <service32mailing@gmail.com>', // sender address
    to: address, // list of receivers
    subject: "test  ✔", // Subject line
    text: "Żartowałem", // plain text body
    auth: {
        user: 'service32mailing@gmail.com',
        refreshToken: '1//04Nr6F8Au69aWCgYIARAAGAQSNwF-L9IrCo9jHaLbhILl2Adf4OURUwj-FZuj0GFUI95vdnF8LuC-AauyGwATp76JSEssVRXul5o',
        accessToken: 'ya29.a0AfH6SMA9OoHwT6HD3aQs3QhR3N3dTm6y3yWX9MBRpg_NlIQoAbwLgad_-R1x49nsnBccQAq6pjQQqwANT44KDWoQJw9yqYx3JQjmf1-wC4Y4Axwvjs4-KnCsexHdzI7c9uLPwNui6Xcg0lsTENPMfA-hpBxeCKayrE4x3vsFA-M',
        expires: 1484314697598
    }
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports.sendMails = sendMails;