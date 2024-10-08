import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  let messageSent;
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(422).json({ message: 'Invalid input' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'darazseller290@gmail.com',
        pass: 'lebljbyruleuatgp',
      },
    });

    const mailOptions = {
      from: email,
      to: 'shaukat.hayat@mechnolink.com.pk',
      subject: `New message from ${name}`,
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'An error occurred while sending the email' });
      }
        messageSent = info.response;
        return res.status(200).json({ message: 'Email sent successfully' });
    });
  } else {
    return res.status(405).json({ message: 'We only accept POST' });
  }
  return messageSent;
}