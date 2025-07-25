# Virtual CV Backend

A Node.js/Express backend server for handling contact form submissions with email functionality.

## Features

- 🚀 Express.js REST API
- 📧 Email sending with Nodemailer
- 🔒 Security with Helmet and CORS
- ⚡ Rate limiting to prevent spam
- ✅ Input validation with Joi
- 📨 Auto-reply emails to senders
- 🎯 Formatted HTML emails

## Setup Instructions

### 1. Install Dependencies

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

### 2. Configure Email Settings

1. Copy the environment template:
```bash
cp .env.example .env
```

2. Edit the `.env` file with your email credentials:

```env
# Email Configuration - For Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password

# Server Configuration
PORT=3000
NODE_ENV=development

# Email Settings
TO_EMAIL=kjburriss@gmail.com
FROM_EMAIL=your-gmail@gmail.com
FROM_NAME=Virtual CV Contact Form
```

### 3. Gmail App Password Setup

For Gmail users, you need to create an App Password:

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Select **Security** → **2-Step Verification** (enable if not already)
3. Go to **App passwords**
4. Generate a new app password for "Mail"
5. Use this 16-character password in the `SMTP_PASS` field

### 4. Start the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:3000`

### 5. Test the Email Service

Test if email configuration is working:
```bash
curl http://localhost:3000/api/contact/test
```

## API Endpoints

### POST /api/contact
Send a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hi, I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "messageId": "email-message-id"
}
```

### GET /api/contact/test
Test email service connection.

### GET /health
Health check endpoint.

## Email Templates

The service sends two emails:

1. **Notification Email** → Sent to kjburriss@gmail.com
   - Contains all form details
   - Professional HTML formatting
   - Sender's contact information

2. **Auto-Reply Email** → Sent to the form submitter
   - Thank you message
   - Confirmation of receipt
   - Expected response time

## Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP
- **CORS**: Only allows requests from localhost:4200
- **Helmet**: Security headers
- **Input Validation**: Joi schema validation
- **Error Handling**: Comprehensive error responses

## Deployment

For production deployment:

1. Update the `TO_EMAIL` and email credentials in `.env`
2. Update CORS origins in `server.js` to include your domain
3. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js --name "virtual-cv-backend"
   ```

## Troubleshooting

### Common Issues

1. **"535 Authentication failed"**
   - Ensure you're using an App Password, not your regular Gmail password
   - Check that 2-Step Verification is enabled

2. **"CORS error"**
   - Make sure your Angular app is running on localhost:4200
   - Check CORS configuration in server.js

3. **"Connection refused"**
   - Ensure the backend server is running on port 3000
   - Check if another service is using the port

### Logs

The server logs all email sending attempts and errors to the console. Check the terminal for detailed error messages.

## Development

### File Structure
```
backend/
├── server.js              # Main server file
├── routes/
│   └── contact.js         # Contact form routes
├── services/
│   └── emailService.js    # Email service logic
├── package.json
├── .env                   # Environment variables
└── README.md
```

### Adding New Features

1. Add new routes in the `routes/` directory
2. Add new services in the `services/` directory
3. Update the main `server.js` file to include new routes
4. Test endpoints using tools like Postman or curl
