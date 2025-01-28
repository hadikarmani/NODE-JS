
const http = require('http');
const fs = require('fs');
const generatePassword = require('generate-password');
const nodemailer = require('nodemailer');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');

 
  fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('welcome.txt has been created.');

    
      fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
        } else {
          console.log('Content of welcome.txt:', data);
        }
      });
    }
  });


  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true,
  });

  console.log('Generated Password:', password);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'karmani@hotmail.fr', 
      pass: '494849', 
    },
  });

  const mailOptions = {
    from: 'karmani@hotmail.fr', 
    to: 'karmani@hotmail.fr', 
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

const http = require('http');
const fs = require('fs');
const generatePassword = require('generate-password');
const nodemailer = require('nodemailer');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');

 
  fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('welcome.txt has been created.');


      fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
        } else {
          console.log('Content of welcome.txt:', data);
        }
      });
    }
  });

 
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true,
  });

  console.log('Generated Password:', password);


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'karmani@hotmail.fr', 
      pass: '469844', 
    },
  });

  const mailOptions = {
    from: 'karmani@hotmail.fr', 
    to: 'karmani@hotmail.fr', 
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



const http = require('http');
const fs = require('fs');
const generatePassword = require('generate-password');
const nodemailer = require('nodemailer');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');

 
  fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('welcome.txt has been created.');

     
      fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
        } else {
          console.log('Content of welcome.txt:', data);
        }
      });
    }
  });

  
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true,
  });

  console.log('Generated Password:', password);


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'karmani@hotmail.fr',
      pass: '498465461', 
    },
  });

  const mailOptions = {
    from: 'karmani@hotmail.fr', 
    to: 'karmani@hotmail.fr', 
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
