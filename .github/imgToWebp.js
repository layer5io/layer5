// Convert the images to .webp format
const glob = require('glob');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

// const files = glob.sync('./src/assets/images/*/.{png,jpg}', { nodir: true });
const files = glob.sync('../../src/**/*.{png,jpg}'
, { nodir: true });
console.log(files.size);
a=0
files.forEach(async (file) => {
  const outputDir = path.dirname(file);
  const outputFileName = path.basename(file, path.extname(file)) + '.webp';
  const outputFile = `${outputDir}/${outputFileName}`;
  a++
  try {
    await sharp(file)
      .toFormat('webp')
      .toFile(outputFile);

    console.log(`Image converted to webp: ${file} -> ${outputFile}`);

    fs.unlinkSync(file); // Delete the original file
    console.log(`Original image deleted: ${file}`);
  } catch (error) {
    console.error(`Error converting image: ${file}`);
    console.error(error);
  }
});
console.log(a)