import nodemailer from "nodemailer";

async function sendemail(to,subject,html) {
    const transporter = nodemailer.createTransport({
       service:"gmail",
        auth: {
          user: process.env.useremail,
          pass: process.env.passemail,
        },
      });

      const info = await transporter.sendMail({
        from: `roaaa mail <${process.env.useremail}>`,
        to,
        subject,
        html,
      });
}

export default sendemail;