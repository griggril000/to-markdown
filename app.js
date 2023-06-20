function downloadMarkdown(filename, text, layout, title, author, date, updated, imageContributor, contributorLink, contributorSite, contributorSiteLinkToImage) {
  let frontMatter = `---\n`;
  if (layout) frontMatter += `layout: ${layout}\n`;
  if (title) frontMatter += `title: ${title}\n`;
  if (author) frontMatter += `author: ${author}\n`;
  if (date) frontMatter += `date: ${date}\n`;
  if (updated) frontMatter += `updated: ${updated}\n`;
  if (imageContributor) frontMatter += `image_contributor: ${imageContributor}\n`;
  if (contributorLink) frontMatter += `contributor_link: ${contributorLink}\n`;
  if (contributorSite) frontMatter += `contributor_site: ${contributorSite}\n`;
  if (contributorSiteLinkToImage) frontMatter += `contributor_site_link_to_image: ${contributorSiteLinkToImage}\n`;
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
const markdownDate = document.querySelector('#markdown-date');
const markdownUpdated = document.querySelector('#markdown-updated');
const imageContributor = document.querySelector('#image-contributor');
const contributorLink = document.querySelector('#contributor-link');
const contributorSite = document.querySelector('#contributor-site');
const contributorSiteLinkToImage = document.querySelector('#contributor-site-link-to-image');

downloadButton.addEventListener('click', () => {
  const markdownText = markdownContent.value;
  if (markdownText.trim() === '') {
    alert('Please enter markdown content before downloading');
  } else {
    const layout = markdownLayout.value;
    const title = markdownTitle.value;
    const author = markdownAuthor.value;
    const date = markdownDate.value;
    const updated = markdownUpdated.value;
    const imageContribValue = imageContributor.value;
    const contribLinkValue = contributorLink.value;
    const contribSiteValue = contributorSite.value;
    const contribSiteLinkToImageValue = contributorSiteLinkToImage.value;
    downloadMarkdown(
      'myMarkdownFile.md',
      markdownText,
      layout,
      title,
      author,
      date,
      updated,
      imageContribValue,
      contribLinkValue,
      contribSiteValue,
      contribSiteLinkToImageValue
    );
  }
});
