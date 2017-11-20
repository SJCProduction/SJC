const express = require('express');
const path = require('path');
const fs = require('fs');
const srr = require('./index.js');


const app = express();
const PORT = process.env.PORT || 3333;


//Implementing user data function to replace dynamically
//use input obj and replace the init parameter

const inputs = srr.userData()
ssr.init({
  html: inputs.html, 
  component: inputs.component
});

app.use(express.static(inputs.static));

app.get('*', ssr.render(req, res, next), (req, res) => {

  // do other stuff with resp
  res.end();
});

app.listen(PORT, () => {
  console.log(`test-ssr16 app is listening on ${PORT}`)
});
