const downloadMarkdown = (filename, text) => {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/markdown;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

const markdownText = `# My Markdown File
This is some text in my markdown file.`;

downloadMarkdown('myMarkdownFile.md', markdownText);
