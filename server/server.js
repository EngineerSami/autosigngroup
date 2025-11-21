require('dotenv').config();
require('./config/mongoose.config');

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======================
// SEND EMAIL ROUTE
// ======================
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    // MAIL SERVER CONFIG (GMAIL)
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,      // your Gmail
            pass: process.env.PASSWORD    // Gmail App Password
        }
    });

    const mailOptions = {
        from: email,
        to: "sami136.2006@gmail.com",
        subject: "New Contact Form Message",
        text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ msg: "Message Sent Successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Failed to send message", error });
    }
});

// ======================
// START SERVER
// ======================
app.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});
