# Nodemailer with OAuth2 Setup (Node.js)

This  documentation demonstrates how to send emails using Nodemailer with OAuth2 authentication in a Node.js application.

## Features

- Email validation using regex
- Password hashing using bcrypt
- Token generation using jsonwebtoken
- Cookie handling using cookie-parser
- Email sending using Nodemailer with OAuth2

## Technologies Used

- Node.js
- Nodemailer
- Google OAuth2
- dotenv
- bcrypt
- jsonwebtoken
- cookie-parser

---

## Installation

Initialize a Node.js project:

```bash
npm init -y
```

Install dependencies:

```bash
npm install nodemailer dotenv bcrypt jsonwebtoken cookie-parser
```

---

## Google OAuth2 Setup

### 1. Create Project

Go to:
https://console.cloud.google.com/projectselector2/apis/dashboard?supportedpurview=project

- Create a new project
- Enable **Gmail API**

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

---

## Environment Variables

Create a `.env` file:

```env
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
REFRESH_TOKEN=your-refresh-token
EMAIL_USER=your-email@gmail.com
```

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
