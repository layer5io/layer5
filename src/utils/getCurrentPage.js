export const getCurrentPage = (location) => {
  if (location !== undefined && location.href !== undefined) {
    const currentChapter = location.href.split("/");
    if(currentChapter[currentChapter.length - 1] != "")
      return currentChapter[currentChapter.length - 1];
    else
      return currentChapter[currentChapter.length - 2];
  }
};