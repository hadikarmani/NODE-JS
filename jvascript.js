// email-sender.js

// Require the necessary modules
const http = require('http');
const fs = require('fs');
const generatePassword = require('generate-password');
const nodemailer = require('nodemailer');

// Create a server that listens on port 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');

  // Create a file named "welcome.txt" containing one line "Hello Node"
  fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('welcome.txt has been created.');

      // Read and console.log data from "welcome.txt"
      fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
        } else {
          console.log('Content of welcome.txt:', data);
        }
      });
    }
  });

  // Generate a random password and log it to the console
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true,
  });

  console.log('Generated Password:', password);

  // Send an email using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Replace with your email
      pass: 'your-email-password', // Replace with your email password or app-specific password
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com', // Replace with your email
    to: 'your-email@gmail.com', // Replace with your email
    subject: 'Test Email from Node.js',
    text: 'Hello! This is a test email sent from Node.js using Nodemailer.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
});
