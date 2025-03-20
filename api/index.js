require('dotenv').config();
const app = require("../src/app");
const logger = require("../src/utils/logger");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server is running at port ${port}`);
});

module.exports = app;
// const express = require('express');
// const port = process.env.PORT || 3001;
// const app = express();
// const { sql } = require('@vercel/postgres');

// const bodyParser = require('body-parser');
// const path = require('path');

// // Create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(express.static('public'));

// app.get('/', function (req, res) {
// 	res.status(201).json({
//         data: "Welcome to Stripe Homepage",
//         message: "Root stripe fullstack is called Successfully",
//       });
// });


// app.listen(port, () => console.log(`Server ready on port ${port}.`));

// module.exports = app;


