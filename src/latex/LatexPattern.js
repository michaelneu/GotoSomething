/**
 * Latex RegExp Pattern Enum
 */
var LatexPattern = {
    BLOCK: /\\(chapter|(sub)*section|(sub)*paragraph)\{(.*)\}/,
    COMMENT: /(%.*)/,
    NEWLINESHORTCUT: /\\{2}/
};
