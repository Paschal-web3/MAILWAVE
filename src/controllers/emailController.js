const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    // Setup nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, 
      authLogin: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: subject,
      text: message,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
};
