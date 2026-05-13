# Banking System

A simple yet powerful banking application built with Node.js and Express, featuring user authentication and account management.

## 🎯 Features

- **User Authentication** - Secure registration and login using JWT and bcrypt
- **Account Management** - Create and manage bank accounts
- **Email Notifications** - Automated email notifications for account activities
- **Password Security** - Bcrypt encryption for password hashing
- **Token-based Authentication** - JWT for secure API access

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | Latest | Runtime environment |
| Express | ^5.2.1 | Web framework |
| MongoDB | - | Database (via Mongoose) |
| Mongoose | ^9.5.0 | ODM for MongoDB |
| JWT | ^9.0.3 | Authentication tokens |
| bcrypt | ^6.0.0 | Password hashing |
| Nodemailer | ^8.0.7 | Email notifications |
| Dotenv | ^17.4.2 | Environment variables |
| Cookie Parser | ^1.4.7 | Cookie parsing middleware |

## 📁 Project Structure

```
Banking/
├── src/
│   ├── app.js                  # Express app configuration
│   ├── controllers/
│   │   ├── account.controller.js    # Account management logic
│   │   └── auth.controllers.js      # Authentication logic
│   ├── db/
│   │   └── db.js               # Database connection
│   ├── middlewares/
│   │   └── auth.middleware.js   # JWT verification middleware
│   ├── models/
│   │   ├── account.model.js     # Account schema
│   │   └── user.model.js        # User schema
│   ├── routers/
│   │   ├── account.routes.js    # Account routes
│   │   └── auth.routes.js       # Auth routes
│   └── servives/
│       └── email.service.js     # Email notification service
├── server.js                   # Entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn
- MongoDB database
- Email service credentials (for Nodemailer)

### Installation

1. Clone or navigate to the Banking directory:
```bash
cd Banking
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your configuration:
```env
PORT=2001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
```

4. Start the server:
```bash
npm run dev      # Development with auto-reload
# or
npm start        # Production
```

The server will run on `http://localhost:2001`

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - Login user
- `POST /logout` - Logout user

### Account Routes (`/api/accounts`)
- `GET /` - Get all accounts
- `GET /:id` - Get account by ID
- `POST /` - Create new account
- `PUT /:id` - Update account
- `DELETE /:id` - Delete account

## 🔐 Security Features

- **Password Hashing** - bcrypt for secure password storage
- **JWT Authentication** - Token-based API authentication
- **Cookie Parser** - Secure cookie handling
- **Environment Variables** - Sensitive data in `.env` files

## 🔧 Scripts

- `npm run dev` - Start development server with nodemon (auto-reload)
- `npm start` - Start production server
- `npm test` - Run tests (not configured)

## 📧 Email Service

The application uses Nodemailer for sending email notifications. Configure your email service in the `.env` file:
- Supports Gmail, custom SMTP servers, and other email providers
- Automated notifications for:
  - Account creation
  - Password reset
  - Transaction alerts

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection error | Check `MONGODB_URI` in `.env` |
| JWT token invalid | Verify `JWT_SECRET` is set correctly |
| Email not sending | Check Nodemailer credentials and SMTP settings |
| Port already in use | Change port in `server.js` or kill process using port 2001 |

## 📝 Notes

- The `servives` folder contains email service logic (note: typo in folder name)
- Authentication middleware validates JWT tokens on protected routes
- All passwords are hashed using bcrypt before storage

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

ISC

---

### 2. Create OAuth2 Credentials

- Go to **Credentials**
- Click **Create Credentials → OAuth 2.0 Client IDs**
- Select **Web Application**
- Add redirect URIs:
  - http://localhost
  - https://developers.google.com/oauthplayground

Save:

- Client ID
- Client Secret

---

### 3. Generate Refresh Token

Open:
https://developers.google.com/oauthplayground

Steps:

- Click settings (gear icon)
- Enable **Use your own OAuth credentials**
- Enter Client ID and Client Secret
- Set **Access Type = Offline**
- Select scope:

```bash
https://mail.google.com/
```

- Click **Authorize APIs**
- Click **Exchange authorization code for tokens**
- Copy the **Refresh Token**

If you keep seeing `invalid_grant: Token has been expired or revoked`, the refresh token is no longer valid. Generate a new refresh token and replace the one in `.env`, or use a Gmail app password instead of OAuth2.

---

## Environment Variables

Create a `.env` file:

```env
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
REFRESH_TOKEN=your-refresh-token
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-16-char-gmail-app-password
```

If you use `EMAIL_APP_PASSWORD`, remove the OAuth2 values or leave them unset.

---

## Email Configuration (email.js)

```js
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Error connecting to email server:", error);
  } else {
    console.log("Email server is ready");
  }
});

const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Your Name" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
```

---

## Usage (app.js)

```js
const sendEmail = require("./email");

sendEmail(
  "recipient@example.com",
  "Test Email",
  "This is a test email",
  "<p>This is a <b>test email</b></p>",
);
```

---

## Run the Application

```bash
node app.js
```

---

## Notes

- Use regex to validate email input
- Use bcrypt for password hashing
- Use jsonwebtoken for authentication
- Use cookie-parser to store tokens in cookies
- Gmail API must be enabled
- OAuth scope must include:

```bash
https://mail.google.com/
```

---

## Troubleshooting

- Invalid credentials → check Client ID, Secret, Refresh Token
- Email not sending → verify Gmail API enabled
- Token issues → regenerate from OAuth Playground

---

## References

- https://nodemailer.com/about/
- https://developers.google.com/identity/protocols/oauth2
- https://developers.google.com/oauthplayground
- https://github.com/ankurdotio/Difference-Backend-video/tree/main/026-nodemailer
- https://console.cloud.google.com/projectselector2/apis/dashboard?supportedpurview=project



# 📒 Ledger System for Transactions

## 📌 Overview

A ledger system records and tracks all transactions in a structured and reliable way.
Each transaction creates a ledger entry, ensuring consistency, traceability, and auditability.

This is commonly used in:

* 💰 Payment systems
* 🏦 Banking apps
* 🛒 E-commerce platforms

---

## 📖 What is a Ledger?

A **ledger** is a collection of transaction records.
Each entry represents an action such as a **debit** or **credit**, stored permanently.

---

## 🎯 Why Use a Ledger System?

* 📊 Track all transactions
* 🧾 Maintain complete history
* 🔒 Ensure data consistency
* 🛡️ Prevent data loss or duplication
* 🔍 Enable auditing and debugging

---

## 🧱 Core Data Structure

Each ledger entry includes:

* 👤 **userId** → Reference to user (ObjectId)
* 🔄 **type** → `debit` or `credit`
* 💵 **amount** → Transaction value
* 💼 **balance** → Updated balance
* 📝 **description** → Optional details
* 📌 **status** → `pending`, `completed`, `failed`
* ⏱️ **timestamps** → createdAt, updatedAt

---

## 🗄️ Database Schema (MongoDB + Mongoose)

```js id="p3d82x"
const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['debit', 'credit'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'completed'
  }
}, { timestamps: true });

module.exports = mongoose.model('Ledger', ledgerSchema);
```

---

## ⚙️ How It Works

1. 👤 User performs a transaction
2. ✅ System validates input
3. 🧮 Balance is calculated
4. 📝 Ledger entry is created
5. 💾 Entry is stored permanently
6. 🔎 Data can be retrieved anytime

---

## 🧾 Example Ledger Entry

```json id="l9w2k1"
{
  "userId": "64f1a2b3c4d5e6f7890abc12",
  "type": "debit",
  "amount": 500,
  "balance": 1500,
  "description": "Payment for order",
  "status": "completed"
}
```

---

## ✅ Best Practices

* 🚫 Never delete ledger entries
* 🔁 Keep records immutable
* 📌 Use enums for controlled values
* 🔍 Validate all inputs
* ⚡ Keep operations atomic
* ⏱️ Always use timestamps

---

## 🧠 Summary

A ledger system ensures every transaction is:

* 📌 Recorded
* 🔍 Traceable
* 🔒 Reliable

It is essential for building secure and scalable transaction-based applications.
