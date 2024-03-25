const regexPatterns = {
  headers: /^(#{1,6})\s+(.*?)\s*$/gm,
  blockquotes: /^(>+)(.*?)$/gm,
  unorderedList: /^(\s*)[-+*]\s+(.*)$/gm,
  orderedList: /^(\s*)\d+\.\s+(.*)$/gm,
  bold: /(\*\*|__)(.*?)\1/g,
  italics: /(\*|_)(.*?)\1/g,
  strikethrough: /~~(.*?)~~/g,
  links: /\[(.*?)\]\((.*?)\)/g,
  images: /!\[(.*?)\]\((.*?)\)/g,
  pre: /```([\s\S]*?)```/g,
  code: /`([^`]+)`/g,
  breakline: /\n\n/g,
  quickLinks: /<(.*?)>/g,
  unorderedListItems: /((?:\s*<li type="unordered" style="margin-left:.*em;">.*<\/li>\n?)+)/g,
  orderedListItems: /((?:\s*<li type="ordered" style="margin-left:.*em;">.*<\/li>\n?)+)/g
};

export default regexPatterns;
