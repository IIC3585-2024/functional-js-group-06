const createConverter = (regex, replacement) => (text) => text.replace(regex, replacement);

export default createConverter;
