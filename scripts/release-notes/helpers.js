const COMMENT_BEST_PRACTICES = `<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->
<!-- !!! THIS FILE IS AUTO-GENERATED !!! DO NOT EDIT THIS FILE MANUALLY !!! -->`;
const NEW_LINE = '\n';
const NEW_LINE_DOUBLE = NEW_LINE + NEW_LINE;

/**
 * arrayOfLines
 * @param {string} lines
 * @returns {array}
 */
function arrayOfLines(lines) {
  return lines.match(/[^\r\n]+/g) || [];
}

/**
 * getReleaseDate - returns a human-readable date string
 * @returns {string} - date string in MM DD, YYYY format
 */
function getReleaseDate() {
  const date = new Date();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

module.exports = {
  arrayOfLines,
  getReleaseDate,
  COMMENT_BEST_PRACTICES,
  NEW_LINE,
  NEW_LINE_DOUBLE
};
