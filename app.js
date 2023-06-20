const downloadButton = document.querySelector('#download-button');

downloadButton.addEventListener('click', () => {
  const markdownText = `# My Markdown File
This is some text in my markdown file.`;

  downloadMarkdown('myMarkdownFile.md', markdownText);
});
