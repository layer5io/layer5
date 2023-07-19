const fs = require("fs");
const path = require("path");

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
    .map(file => path.join(srcpath, file))
    .filter(path => fs.statSync(path).isDirectory());
}

const collectionWithYears = ["blog", "news"];

function devIgnoreArray(folder) {

  const folderMap = getDirectories(`${__dirname}/src/collections/${folder}`).map(url => url.replace(`${__dirname}/src/collections/${folder}/`, ""));

  if (collectionWithYears.includes(folder)) {
    const includeArray = [];
    let folderCount = 0;
    const foldersWithYears = folderMap.map(name => Number(name)).filter(number => !isNaN(number)).sort((a, b) => b - a).map(year => year.toString());

    for (const itemFolder of foldersWithYears) {
      includeArray.push(itemFolder);
      const numFolders = getDirectories(`${__dirname}/src/collections/${folder}/${itemFolder}`).length;
      folderCount = folderCount + numFolders;
      if (folderCount > 10) return folderMap.filter(item => !includeArray.includes(item)).map(item => `**/${item}`);
    }
  } else if (folder === "members") {
    const excludeArray = folderMap.filter(item => item !== "lee-calcote");
    return excludeArray.slice(10).map(item => `**/${item}`);
  } else {
    return folderMap.length > 12
      ? folderMap.slice(12).map(item => `**/${item}`)
      : [];
  }
}

module.exports = devIgnoreArray;