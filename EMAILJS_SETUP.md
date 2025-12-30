# EmailJS Setup Guide

This guide will help you set up the contact form email service using EmailJS.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up your template with the following variables:
   - `{{name}}` - Customer's name
   - `{{email}}` - Customer's email
   - `{{phone}}` - Customer's phone number
   - `{{subject}}` - Email subject
   - `{{description}}` - Message description
   - `{{service}}` - Selected service
   - `{{petType}}` - Type of pet

### Example Template:

**Subject:** New Contact Form Submission from {{name}}

**Body:**
```
You have received a new contact form submission from Metro West Pet Care website.

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Subject: {{subject}}

Service Requested: {{service}}
Type of Pet: {{petType}}

Message:
{{description}}

---
This message was sent from the Metro West Pet Care contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" in the EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Configure Environment Variables

1. In your project root, create a `.env` file (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs from steps 2, 3, and 4

## Step 6: Test the Form

1. Run your development server: `npm run dev`
2. Navigate to the contact page or home page
3. Fill out and submit the form
4. Check your email inbox for the test message
5. If successful, you should see a success message on the website

## For Vercel Deployment

When deploying to Vercel, add the environment variables:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Redeploy your site

## Troubleshooting

- **Form shows error message**: Make sure all environment variables are set correctly
- **No email received**: Check your EmailJS template and service configuration
- **Emails going to spam**: Add your domain to EmailJS allowed origins in the dashboard
- **Rate limiting**: EmailJS free tier has a limit of 200 emails/month

## Alternative: Contact Fallback

If EmailJS is not configured, the form will show a friendly error message directing users to contact you directly at:
- Email: petcareMW@gmail.com
- Phone: 774-424-7085

This ensures visitors can always reach you even if the automated system isn't set up yet.
