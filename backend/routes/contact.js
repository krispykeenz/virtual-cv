const express = require('express');
const Joi = require('joi');
const emailService = require('../services/emailService');

const router = express.Router();

// Validation schema
const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().trim(),
  email: Joi.string().email().required().trim(),
  subject: Joi.string().min(1).max(200).required().trim(),
  message: Joi.string().min(10).max(1000).required().trim()
});

// POST /api/contact - Send contact form
router.post('/', async (req, res) => {
  try {
    // Validate request body
    const { error, value } = contactSchema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: error.details.map(detail => detail.message)
      });
    }

    const { name, email, subject, message } = value;

    // Log the contact attempt
    console.log(`📨 New contact form submission from ${name} (${email})`);

    // Send email
    const emailResult = await emailService.sendContactEmail({
      name,
      email,
      subject,
      message
    });

    // Success response
    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! I\'ll get back to you within 24 hours.',
      messageId: emailResult.messageId
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later or contact me directly at kjburriss@gmail.com.'
    });
  }
});

// GET /api/contact/test - Test email service
router.get('/test', async (req, res) => {
  try {
    const isConnected = await emailService.testConnection();
    
    if (isConnected) {
      res.status(200).json({
        success: true,
        message: 'Email service is working correctly'
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Email service connection failed'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Email service test failed'
    });
  }
});

module.exports = router;
