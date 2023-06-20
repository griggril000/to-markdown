function downloadMarkdown(filename, text, layout, title, author) {
  const frontMatter = `---
layout: ${layout}
title: ${title}
author: ${author}
---\n`;
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

downloadButton.addEventListener('click', () => {
  const markdownText = markdownContent.value;
  const layout = 'post';
  const title = 'My Markdown Post';
  const author = 'Your Name';
  downloadMarkdown('myMarkdownFile.md', markdownText, layout, title, author);
});
