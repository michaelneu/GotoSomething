/**
 * Wrapper for static RegExp pattern
 */
var LatexPattern = {
    block: /\\(chapter|(sub)*section|paragraph)\{(.*)\}/,
    comment: /(%.*)/,
    newLineShortcut: /\\{2}/
};
