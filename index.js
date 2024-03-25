import convertMarkdownToHtml from './utils/markdownParser.js';

const addEventListeners = () => {
  const markdownInput = document.getElementById('markdown-input');
  const htmlOutput = document.getElementById('html-output');

  markdownInput.addEventListener('input', () => {
    const markdown = markdownInput.value;
    const html = convertMarkdownToHtml(markdown);
    htmlOutput.innerHTML = html;
  });
};

addEventListeners();
