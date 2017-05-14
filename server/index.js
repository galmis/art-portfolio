// @flow

// NOTE: I could've set up babel in order to use es6 syntax,
// but this is fine for such a short file...

const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

//const port = process.env.PORT || 3001;
const port = 3001;
const app = express();

const publicDir = `${__dirname}/../public/`;

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'artportfolioautoemail@gmail.com',
        pass: 'artportfolio'
    }
});

app.use(express.static(publicDir));
// parse application/json
app.use(bodyParser.json());

app.post('/api/postEmail', (req, res) => {
  debugger;
  console.log('/api/postEmail');

  const data = req.body;

  const mailOptions = {
      from: data.email,
      to: 'galminasgiedrius@gmail.com',
      subject: 'Art portfolio message from ' + data.name,
      text: 'Sender name: ' + data.name + '\nSender email: ' + data.email + '\n\nMESSAGE: \n' + data.message // plaintext body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`error: ${JSON.stringify(error)}`);
      res.send(error);
    } else {
      res.send(info);
    }
  });
});

app.get('*', (req, res) => {
  debugger;
  console.log('app.get');
  res.sendFile(path.resolve(publicDir, 'index.html'));
});

app.listen(port);
