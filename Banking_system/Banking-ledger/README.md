# Banking Ledger System

An advanced banking and ledger management system built with Node.js and Express, featuring comprehensive transaction tracking, account management, and secure authentication.

## 🎯 Features

- **User Authentication** - Secure registration and login with JWT tokens
- **Account Management** - Create and manage multiple bank accounts
- **Transaction Tracking** - Record and track all financial transactions
- **Ledger System** - Maintain detailed ledger entries for audit trails
- **Token Blacklist** - Logout functionality with token blacklisting
- **Email Notifications** - Automated email alerts for account activities
- **Secure Password Storage** - bcrypt encryption for passwords

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | Latest | Runtime environment |
| Express | ^5.2.1 | Web framework |
| MongoDB | - | NoSQL database |
| Mongoose | ^9.1.5 | ODM for MongoDB |
| JWT | ^9.0.3 | Authentication & authorization |
| bcryptjs | ^3.0.3 | Password hashing |
| Nodemailer | ^7.0.12 | Email notifications |
| Dotenv | ^17.2.3 | Environment configuration |
| Cookie Parser | ^1.4.7 | HTTP cookie parsing |

## 📁 Project Structure

```
Banking-ledger/
├── src/
│   ├── app.js                          # Express app setup
│   ├── config/
│   │   └── db.js                       # Database connection config
│   ├── controllers/
│   │   ├── account.controller.js       # Account operations
│   │   ├── auth.controller.js          # Authentication logic
│   │   └── transaction.controller.js   # Transaction operations
│   ├── middleware/
│   │   └── auth.middleware.js          # JWT verification
│   ├── models/
│   │   ├── account.model.js            # Account schema
│   │   ├── blackList.model.js          # Token blacklist schema
│   │   ├── ledger.model.js             # Ledger entries schema
│   │   ├── transaction.model.js        # Transaction schema
│   │   └── user.model.js               # User schema
│   ├── routes/
│   │   ├── account.routes.js           # Account endpoints
│   │   ├── auth.routes.js              # Auth endpoints
│   │   └── transaction.routes.js       # Transaction endpoints
│   └── services/
│       └── email.service.js            # Email notification service
├── server.js                           # Application entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn
- MongoDB database
- SMTP/Email service credentials

### Installation

1. Navigate to the project directory:
```bash
cd Banking_system/Banking-ledger
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your configuration:
```env
PORT=3000
MONGODB_URI=mongodb://your_connection_string
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Optional
NODE_ENV=development
```

4. Start the server:
```bash
npm run dev      # Development with nodemon
# or
npm start        # Production
```

The server will run on `http://localhost:3000`

## 📡 API Endpoints

### Root Route
- `GET /` - Health check - returns "Ledger Service is up and running"

### Authentication Routes (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout (adds token to blacklist)
- `POST /refresh-token` - Refresh JWT token

### Account Routes (`/api/accounts`)
- `GET /` - Retrieve all accounts (authenticated)
- `GET /:id` - Get specific account details
- `POST /` - Create new account
- `PUT /:id` - Update account information
- `DELETE /:id` - Close/delete account

### Transaction Routes (`/api/transactions`)
- `GET /` - Retrieve all transactions
- `GET /:id` - Get specific transaction details
- `POST /` - Create new transaction
- `GET /account/:accountId` - Get transactions for specific account
- `PUT /:id` - Update transaction details
- `DELETE /:id` - Delete transaction

## 🔐 Security Architecture

### Authentication Flow
1. User registers with email and password
2. Password is hashed using bcryptjs
3. JWT token issued on successful login
4. Token included in Authorization header for protected routes
5. Token added to blacklist on logout

### Protected Routes
- All account operations require valid JWT
- All transaction operations require valid JWT
- Middleware validates token authenticity

### Models Overview

**User Model**
- Email (unique)
- Password (hashed)
- Profile information
- Created/updated timestamps

**Account Model**
- Account number (unique)
- Account type (checking, savings, etc.)
- Balance
- User reference
- Status (active/inactive)

**Transaction Model**
- From account
- To account
- Amount
- Type (credit/debit)
- Description
- Timestamp

**Ledger Model**
- Account reference
- Entry type
- Amount
- Running balance
- Timestamp
- Description

**BlackList Model**
- Token
- Expiration time
- Added timestamp

## 🔧 Scripts

- `npm run dev` - Start development server with nodemon (auto-reload on file changes)
- `npm start` - Start production server
- `npm test` - Run tests (not configured)

## 📧 Email Service

Automated email notifications for:
- Account creation confirmation
- Successful login alerts
- Transaction confirmations
- Password reset requests
- Unusual activity alerts

Configure SMTP settings in `.env` for Gmail or custom SMTP server.

## 🔍 Key Features Explained

### Ledger System
The ledger maintains an immutable record of all account activities for:
- Audit trail
- Transaction history
- Balance reconciliation
- Regulatory compliance

### Token Blacklist
When users logout, their JWT token is added to a blacklist to:
- Prevent token reuse
- Ensure immediate logout
- Enhance security

### Multi-Account Support
Users can manage multiple accounts:
- Different account types
- Independent balances
- Transaction history per account

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection fails | Verify `MONGODB_URI` in `.env` |
| JWT authentication errors | Check `JWT_SECRET` matches |
| Email not sending | Verify SMTP credentials in `.env` |
| Port 3000 in use | Change port or kill process using port 3000 |
| Token expired immediately | Check `JWT_EXPIRE` setting |

## 📊 Database Queries

Common operations:
```javascript
// Get user by email
User.findOne({ email: userEmail })

// Get all accounts for user
Account.find({ userId: userId })

// Get transaction history
Transaction.find({ 
  $or: [
    { fromAccountId: accountId },
    { toAccountId: accountId }
  ]
}).sort({ createdAt: -1 })
```

## 🚦 Response Format

All API responses follow this format:
```json
{
  "success": true,
  "message": "Operation completed",
  "data": {},
  "error": null
}
```

## 📝 Notes

- Implements RESTful API principles
- Uses MongoDB as primary datastore
- JWT tokens typically expire after 7 days (configurable)
- All sensitive operations are logged
- CORS configured for frontend integration

## 🤝 Contributing

Contributions are welcome! Please ensure:
- Code follows existing style
- All endpoints tested
- Security best practices followed

## 📄 License

ISC
