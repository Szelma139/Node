const nodemailer = require("nodemailer");

async function sendMails(address) {

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: '',
        clientId: '',
        clientSecret: 'I',
        //serviceClient: '',
        //privateKey: '',
        //accessToken: '',
        expires: 1484314697598
    }
});



  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo ðŸ‘»" <service32mailing@gmail.com>', // sender address
    to: address, // list of receivers
    subject: "test  âœ”", // Subject line
    text: "Å»artowaÅ‚em", // plain text body
    auth: {
        user: '',
        refreshToken: '',
        accessToken: '',
        expires: 1484314697598
    }
  });

}

module.exports.sendMails = sendMails;
