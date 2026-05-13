require("dotenv").config();
const nodemailer = require("nodemailer");

const createTransporter = () => {
  if (process.env.EMAIL_APP_PASSWORD) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });
  }

  const hasOAuthCredentials =
    process.env.CLIENT_ID &&
    process.env.CLIENT_SECRET &&
    process.env.REFRESH_TOKEN;

  if (hasOAuthCredentials) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });
  }

  throw new Error(
    "Email credentials are missing. Set CLIENT_ID, CLIENT_SECRET, and REFRESH_TOKEN for OAuth2 or EMAIL_APP_PASSWORD for Gmail SMTP."
  );
};

const transporter = createTransporter();

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    if (error.code === "EAUTH" && /invalid_grant/i.test(String(error.message))) {
      console.error(
        "Gmail OAuth2 token is expired or revoked. Generate a new refresh token or switch to EMAIL_APP_PASSWORD."
      );
    }
    console.error("Error connecting to email server:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

// module.exports = transporter;

// Function to send email
const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"D Tech Coder " <${process.env.EMAIL_USER}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Email service for sending registration emails
async function sendRegistrationEmail(userEmail, name) {
  const subject = "Welcome to D Tech Banking — Your Account is Ready";

  const text = `Hello ${name},\n\nWelcome to D Tech Banking! Your registration was successful.\n\nBest regards,\nDebkanat Dey\nD Tech Banking Backend Team`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to D Tech Banking</title>
</head>
<body style="margin:0;padding:0;background-color:#0f1117;font-family:Georgia,'Times New Roman',serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f1117;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1a1d2e;border-radius:16px;overflow:hidden;border:1px solid #2a2d40;max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#0d1b2a 0%,#1b2838 40%,#0d2035 70%,#162030 100%);padding:40px 32px 28px;text-align:center;">

              <!-- Logo -->
              <table cellpadding="0" cellspacing="0" align="center" style="margin-bottom:20px;">
                <tr>
                  <td style="vertical-align:middle;padding-right:10px;">
                    <div style="width:52px;height:52px;background:linear-gradient(135deg,#d4af37,#f5e07a);border-radius:10px;display:inline-flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;color:#0d1b2a;font-family:Georgia,serif;line-height:52px;text-align:center;"></div>
                  </td>
                  <td style="vertical-align:middle;text-align:left;">
                    <div style="font-size:18px;font-weight:bold;color:#d4af37;letter-spacing:2px;font-family:Georgia,serif;">D TECH</div>
                    <div style="font-size:10px;letter-spacing:3px;color:#8a9bc0;text-transform:uppercase;font-family:Arial,sans-serif;">BANKING</div>
                  </td>
                </tr>
              </table>

              <!-- Gold divider -->
              <div style="width:60px;height:2px;background:linear-gradient(90deg,transparent,#d4af37,transparent);margin:0 auto 20px;"></div>

              <h1 style="color:#f0e6c0;font-size:28px;margin:0 0 6px;font-weight:normal;letter-spacing:1px;">Welcome Aboard</h1>
              <p style="color:#8a9bc0;font-size:12px;margin:0;letter-spacing:3px;font-family:Arial,sans-serif;text-transform:uppercase;">Your account is ready</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="color:#c8d6e8;font-size:16px;line-height:1.7;margin:0 0 12px;">Dear <strong style="color:#d4af37;">${name}</strong>,</p>
              <p style="color:#c8d6e8;font-size:15px;line-height:1.8;margin:0 0 24px;">
                We are delighted to welcome you to <strong style="color:#e0c96b;">D Tech Banking</strong>.
                Your registration has been successfully completed, and you now have full access
                to our suite of secure financial services.
              </p>

              <!-- Feature Cards -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td width="48%" style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.18);border-radius:10px;padding:16px;text-align:center;">
                    <div style="font-size:24px;margin-bottom:6px;">🔐</div>
                    <div style="font-size:11px;color:#d4af37;font-family:Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;">Secure</div>
                    <div style="font-size:11px;color:#7a8ba6;font-family:Arial,sans-serif;margin-top:4px;">Bank-grade encryption</div>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.18);border-radius:10px;padding:16px;text-align:center;">
                    <div style="font-size:24px;margin-bottom:6px;">⚡</div>
                    <div style="font-size:11px;color:#d4af37;font-family:Arial,sans-serif;letter-spacing:2px;text-transform:uppercase;">Fast</div>
                    <div style="font-size:11px;color:#7a8ba6;font-family:Arial,sans-serif;margin-top:4px;">Instant transactions</div>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:28px;">
                    <a href="#" style="display:inline-block;background:linear-gradient(135deg,#d4af37,#c9972a);color:#0d1b2a;text-decoration:none;padding:14px 40px;border-radius:8px;font-size:13px;font-weight:bold;font-family:Arial,sans-serif;letter-spacing:1.5px;text-transform:uppercase;">
                      Access Your Account
                    </a>
                  </td>
                </tr>
              </table>

              <p style="color:#6a7b96;font-size:12px;line-height:1.7;margin:0;font-family:Arial,sans-serif;">
                If you did not register for this account, please ignore this email or contact our support team immediately.
              </p>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#13151f;padding:24px 40px;border-top:1px solid #2a2d40;text-align:center;">
              <p style="color:#d4af37;font-size:14px;margin:0 0 4px;font-family:Georgia,serif;">Debkanta Dey</p>
              <p style="color:#5a6b80;font-size:10px;margin:0;letter-spacing:2.5px;font-family:Arial,sans-serif;text-transform:uppercase;">D Tech Banking Backend Team</p>
              <div style="width:40px;height:1px;background:rgba(212,175,55,0.3);margin:16px auto;"></div>
              <p style="color:#3a4a5c;font-size:10px;margin:0;font-family:Arial,sans-serif;">
                This is an automated message. Please do not reply directly to this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;

  await sendEmail(userEmail, subject, text, html);
}
// module.exports = sendEmail;

module.exports = { sendRegistrationEmail };
