import regexPatterns from '../constants/regexExpr.js';

const createConverter = (regex, replacement) => (text) => text.replace(regex, replacement);

const convertBold = createConverter(regexPatterns.bold, '<strong>$2</strong>');
const convertItalics = createConverter(regexPatterns.italics, '<em>$2</em>');
const convertStrikethrough = createConverter(regexPatterns.strikethrough, '<del>$1</del>');

const convertLinks = createConverter(regexPatterns.links, '<a href="$2">$1</a>');
const convertImages = createConverter(regexPatterns.images, '<img src="$2" alt="$1">');

const convertPre = createConverter(regexPatterns.pre, '<pre>$1</pre>');
const convertCode = createConverter(regexPatterns.code, '<code>$1</code>');
const convertBreakline = createConverter(regexPatterns.breakline, '<br>');
const convertBlockquotes = createConverter(regexPatterns.blockquotes, (_, marker, content) => `<blockquote>${content}</blockquote>`);

const convertUnorderedList = createConverter(regexPatterns.unorderedListItems, (match) => `<ul>${match}</ul>`);
const convertOrderedList = createConverter(regexPatterns.orderedListItems, (match) => `<ol>${match}</ol>`);

const convertQuickLinks = createConverter(regexPatterns.quickLinks, (match, content) => {
    const isEmail = content.includes('@');
    return isEmail ? `<a href="mailto:${content}">${content}</a>` : `<a href="${content}">${content}</a>`;
});

const convertUnorderedListItem = createConverter(
    regexPatterns.unorderedList,
    (_, indentation, content) => `<li style="margin-left: ${Math.floor(indentation.length / 4) * 2 }em;">${content}</li>`
);
const convertOrderedListItem = createConverter(
    regexPatterns.orderedList,
    (_, indentation, content) => `<li style="margin-left: ${Math.floor(indentation.length / 4) * 2}em;">${content}</li>`
);

const convertHeaders = createConverter(
    regexPatterns.headers,
    (match, hashes, content) => `<h${hashes.length}>${content}</h${hashes.length}>`
);

const convertMarkdownToHtml = (markdown) => {
    return [
        convertQuickLinks,
        convertBlockquotes,
        convertUnorderedListItem,
        convertUnorderedList,
        convertOrderedListItem,
        convertOrderedList,
        convertHeaders,
        convertBold,
        convertItalics,
        convertStrikethrough,
        convertImages,
        convertLinks,
        convertPre,
        convertCode,
        convertBreakline
    ].reduce((text, converter) => converter(text), markdown);
}

export default convertMarkdownToHtml;
