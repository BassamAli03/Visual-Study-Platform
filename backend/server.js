const express = require('express');
const contactusController = require('./controller/contactus.jsx');
const signupController = require('./controller/signup.js');
const app = express();
const port = 4000;

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

app.use('/contactus', contactusController);
app.use('/', signupController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
