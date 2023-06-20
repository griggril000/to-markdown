function downloadMarkdown(filename, text, layout, title, author) {
  let frontMatter = `---\n`;
  if (layout) frontMatter += `layout: ${layout}\n`;
  if (title) frontMatter += `title: ${title}\n`;
  if (author) frontMatter += `author: ${author}\n`;
  frontMatter += `---\n\n`;
  const markdownText = frontMatter + text;
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(markdownText));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

const downloadButton = document.querySelector('#download-button');
const markdownContent = document.querySelector('#markdown-content');
const markdownLayout = document.querySelector('#markdown-layout');
const markdownTitle = document.querySelector('#markdown-title');
const markdownAuthor = document.querySelector('#markdown-author');

downloadButton.addEventListener('click', () => {
  const markdownText = markdownContent.value;
  if (markdownText.trim() === '') {
    alert('Please enter markdown content before downloading');
  } else {
    const layout = markdownLayout.value;
    const title = markdownTitle.value;
    const author = markdownAuthor.value;
    downloadMarkdown('myMarkdownFile.md', markdownText, layout, title, author);
  }
});
