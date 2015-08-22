/**
 * Latex RegExp Pattern Enum
 */
var LatexPattern = {
    BLOCK: /\\(chapter|(sub)*section|paragraph)\{(.*)\}/,
    COMMENT: /(%.*)/,
    NEWLINESHORTCUT: /\\{2}/
};
