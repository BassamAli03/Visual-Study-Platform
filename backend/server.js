const express = require('express');
const path = require("path");
const contactusController = require('./controller/contactus.jsx');
const signupController = require('./controller/signup.js');
const groupController = require('./controller/creategroup.js');
const postsController = require('./controller/handleposts.js');
const editgroupController = require('./controller/editgroup.js');
const edituserController = require('./controller/edituser.js');
const app = express();
const port = 4000;

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

app.use('/', contactusController);
app.use('/', signupController);
app.use('/', groupController);
app.use('/', postsController);
app.use('/',editgroupController);
app.use('/',edituserController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
