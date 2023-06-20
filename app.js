function downloadMarkdown(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

const downloadButton = document.querySelector('#download-button');
const markdownContent = document.querySelector('#markdown-content');

downloadButton.addEventListener('click', () => {
  const markdownText = markdownContent.value;
  downloadMarkdown('myMarkdownFile.md', markdownText);
});
