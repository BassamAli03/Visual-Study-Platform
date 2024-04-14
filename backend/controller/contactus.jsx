const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const contactus = express();
const port = 4000;

contactus.use(cors());
contactus.use(express.json({ limit: "25mb" }));
contactus.use(express.urlencoded({ limit: "25mb" }));
contactus.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ name, email, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bassamali280303@gmail.com",
        pass: "lmlv xppp hgxf bvrh",
      },
    });
    const mail_configs = {
      from: email,
      to: "bassamali280303@gmail.com",
      subject: `Message from ${email}: ${name}`,
      text: message,
    };

    transporter.sendMail(mail_configs, function(error,info){
        if(error){
            console.log(error);
            return reject({message: `An error occured`})
        }

        return resolve ({message: `Email send Successfully`})
    })
  });
}
contactus.get("/", (req, res) => {
  sendEmail(req.query)
  .then((response) => res.send(response.message))
  .catch((error) => res.status(500).send(error.message))
})

contactus.listen(port,()=>{
    console.log(`nodemailer is listening at http://localhost:${port}`)
})