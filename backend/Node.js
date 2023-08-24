const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const app = express();

// Define routes and middleware here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});