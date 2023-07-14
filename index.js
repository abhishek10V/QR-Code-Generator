
//1. Use the inquirer npm package to get user input.

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
     /* Pass your questions in here */
     message : "Type in your URL",
     name : "URL",
  }
   
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
fs.writeFile("URL.txt" , url , (err) =>{
    if(err) throw err;
    console.log("File is saved");
}
);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
//2. Use the qr-image npm package to turn the user entered URL into a QR code image.
//3. Create a txt file to save the user input using the native fs node module.

//const inquirer = require('inquirer');

