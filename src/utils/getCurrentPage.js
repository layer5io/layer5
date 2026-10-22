export const getCurrentPage = (location) => {
  if (location !== undefined && location.href !== undefined) {
    const currentChapter = location.href.split("/");
    let chapter = currentChapter[currentChapter.length - 1] != ""
      ? currentChapter[currentChapter.length - 1]
      : currentChapter[currentChapter.length - 2];
    if (chapter && chapter.endsWith(".html")) {
      chapter = chapter.replace(".html", "");
    }
    return chapter;
  }
};