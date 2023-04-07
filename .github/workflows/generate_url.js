const glob = require('glob');
const fs = require('fs');

// find all the HTML files in the ./public directory
const htmlFiles = glob.sync('**/*.html', {
    cwd: './public', 
  });
  
  // generate the URL array based on the HTML files
  const urls = htmlFiles.map((file) => {
    return `http://localhost/${file}`;
  });
  
  // print the URL array
  //console.log(urls);
  
  //print length of URL array
  console.log(urls.length);
  fs.writeFileSync('urls.json', JSON.stringify(urls));