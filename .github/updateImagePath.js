// --- Update the image path in files

const fs = require('fs');
const path = require('path');

// Define the project directory path
const projectDirectory = '../../';

// Function to recursively process files in a directory
function processFiles(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      processFiles(filePath); // Recurse into subdirectory
    } else if (stats.isFile() && (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.mdx'))) {
      // Read the file content
      let fileContent = fs.readFileSync(filePath, 'utf8');

      // Regular expression pattern to match image URLs
      const imageUrlPattern = /https?:\/\/\S+\.(png|jpg)/g;

      // Replace occurrences of .png and .jpg with .webp, excluding web links
      fileContent = fileContent.replace(/(?<!https?:\/\/\S+)\.(png|jpg)/g, (match, extension) => {
        return extension === 'png' || extension === 'jpg' ? `.webp` : match;
      });

      // Replace image URLs back to original format
      fileContent = fileContent.replace(imageUrlPattern, (match) => {
        return match.replace('.webp', (extension) => (extension === 'webp' ? '.png' : extension));
      });

      // Write the updated content back to the file
      fs.writeFileSync(filePath, fileContent, 'utf8');
    }
  });
}

// Run the script
processFiles(projectDirectory);
console.log('File content update completed.');