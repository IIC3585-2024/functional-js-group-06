import regexPatterns from '../constants/regexExpr.js';
import createConverter from './createConverter.js';

const convertBold = createConverter(regexPatterns.bold, '<strong>$2</strong>');
const convertItalics = createConverter(regexPatterns.italics, '<em>$2</em>');
const convertStrikethrough = createConverter(regexPatterns.strikethrough, '<del>$1</del>');

const convertLinks = createConverter(regexPatterns.links, '<a href="$2">$1</a>');
const convertImages = createConverter(regexPatterns.images, '<img src="$2" alt="$1">');

const convertPre = createConverter(regexPatterns.pre, '<pre>$1</pre>');
const convertCode = createConverter(regexPatterns.code, '<code>$1</code>');
const convertBreakline = createConverter(regexPatterns.breakline, '<br>');

const convertBlockquoteItems = createConverter(regexPatterns.blockquotes, (match, marker, content) => {
  const level = marker.length;
  let result = content;
  for (let i = 0; i < level; i++) {
    result = `<blockquote>${result}</blockquote>`;
  }
  return result;
});
const flattenBlockquotes = (text) => {
  return text.replace(/<\/blockquote>\s*<blockquote>/g, '<br>');
};

const convertUnorderedList = createConverter(regexPatterns.unorderedListItems, (match) => `<ul>${match}</ul>`);
const convertOrderedList = createConverter(regexPatterns.orderedListItems, (match) => `<ol>${match}</ol>`);

const convertQuickLinks = createConverter(regexPatterns.quickLinks, (match, content) => {
  const isEmail = content.includes('@');
  return isEmail ? `<a href="mailto:${content}">${content}</a>` : `<a href="${content}">${content}</a>`;
});

const convertUnorderedListItem = createConverter(
  regexPatterns.unorderedList,
  (_, indentation, content) => `<li type="unordered" style="margin-left: ${Math.floor(indentation.length / 4) * 2}em;">${content}</li>`
);
const convertOrderedListItem = createConverter(
  regexPatterns.orderedList,
  (_, indentation, content) => `<li type="ordered" style="margin-left: ${Math.floor(indentation.length / 4) * 2}em;">${content}</li>`
);

const convertHeaders = createConverter(
  regexPatterns.headers,
  (match, hashes, content) => `<h${hashes.length}>${content}</h${hashes.length}>`
);

const convertMarkdownToHtml = (markdown) => {
  return [
    convertQuickLinks,
    convertBlockquoteItems,
    convertHeaders,
    convertBold,
    convertItalics,
    convertStrikethrough,
    convertImages,
    convertLinks,
    convertPre,
    convertCode,
    convertUnorderedListItem,
    convertUnorderedList,
    convertOrderedListItem,
    convertOrderedList,
    convertBreakline,
    flattenBlockquotes
  ].reduce((text, converter) => converter(text), markdown);
};

export default convertMarkdownToHtml;
