const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const URL = args[0];
const localFilePath = args[1];

request(URL, (error, response, body) => {
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
    }
  });
  console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}.`);
});