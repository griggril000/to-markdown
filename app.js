const downloadButton = document.querySelector('#download-button');
const markdownContent = document.querySelector('#markdown-content');

downloadButton.addEventListener('click', () => {
  const markdownText = markdownContent.value;
  downloadMarkdown('myMarkdownFile.md', markdownText);
});
