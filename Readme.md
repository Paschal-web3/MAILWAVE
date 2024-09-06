Here’s your full **README.md** file for **MailWave** with all the information included:

```md
# 🚀 MailWave: Effortless Email Delivery API

**MailWave** is a powerful and scalable email-sending API built with Node.js, Express, and Nodemailer. It includes optional MongoDB integration for user management, making it perfect for developers looking to easily integrate email functionality into their applications.

## Features

- 📧 Send emails using Nodemailer with secure SMTP authentication.
- 🗄️ Optional MongoDB integration to store and manage user information.
- 🛠️ Well-structured codebase following MVC architecture (Models, Controllers, Routes).
- 💡 Easy to set up and customize for any email delivery use case.

## Tech Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Fast, minimal web framework for Node.js.
- **Nodemailer**: Email transport for sending emails using SMTP.
- **MongoDB**: NoSQL database for user management (optional).

## Requirements

- Node.js (v14.x or later)
- MongoDB Atlas or local MongoDB instance (optional for user management)
- SMTP service credentials (e.g., Gmail, SendGrid, etc.)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mailwave.git
   cd mailwave
   ```

2. Install the required dependencies:
   ```bash
   npm install nodemon, express, nodemailer, mongoose
   ```

3. Create a `.env` file and add your configuration details:
   ```bash
   PORT=3000
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-email-password
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```

4. Start the application:
   ```bash
   npm start
   ```

## API Endpoints

### **1. Send Email**

- **URL**: `/api/send-email`
- **Method**: `POST`
- **Description**: Send an email to the specified recipient.

#### Request Body (JSON):
```json
{
  "email": "recipient@example.com",
  "subject": "Your Email Subject",
  "message": "Your email message content"
}
```

#### Response:
- **200 OK**: Email sent successfully.
  ```json
  {
    "message": "Email sent successfully!"
  }
  ```
- **500 Internal Server Error**: Failed to send email.
  ```json
  {
    "error": "Failed to send email."
  }
  ```

### **2. Create User (Optional)**

- **URL**: `/api/users`
- **Method**: `POST`
- **Description**: Add a user to the MongoDB database.

#### Request Body (JSON):
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

#### Response:
- **201 Created**: User created successfully.
  ```json
  {
    "message": "User created successfully",
    "user": {
      "_id": "60c71b7f4f1a2b0017e0db67",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "__v": 0
    }
  }
  ```
- **500 Internal Server Error**: Failed to create user.
  ```json
  {
    "error": "Failed to create user."
  }
  ```

## Project Structure

```
MailWave/
├── config/
│   └── db.js          # MongoDB connection setup
├── controllers/
│   └── emailController.js  # Logic for sending emails
│   └── userController.js   # Logic for managing users (optional)
├── models/
│   └── User.js        # User model
├── routes/
│   └── emailRoutes.js   # Email API routes
│   └── userRoutes.js    # User API routes (optional)
├── app.js             # Main app setup
├── index.js           # Entry point for the server
├── .env               # Environment variables
├── package.json       # Dependencies and scripts
└── README.md          # Documentation
```

## Environment Variables

Ensure the following environment variables are set up in your `.env` file:

- `PORT`: The port on which the server will run.
- `SMTP_HOST`: Your email service host (e.g., Gmail: `smtp.gmail.com`).
- `SMTP_PORT`: SMTP port (e.g., `465` for secure connections).
- `SMTP_USER`: Your SMTP username (email address).
- `SMTP_PASS`: Your SMTP password or app-specific password.
- `MONGO_URI`: MongoDB connection URI (optional, required only for user management).

## Usage

- Send emails using the `/api/send-email` route.
- Optionally, create and manage users with the `/api/users` route if MongoDB is enabled.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributions

Feel free to open issues or submit pull requests to improve the project!

```

---

Now you can simply copy this content into a `README.md` file and include it in your project. Let me know if you'd like to make any changes!