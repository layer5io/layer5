// utils/redirects.js
const fs = require('fs');
const yaml = require('js-yaml'); // Add to package.json if needed

const loadRedirects = () => {
  const file = fs.readFileSync('./redirects.yaml', 'utf8');
  return yaml.load(file).redirects || [];
};

module.exports = { loadRedirects };