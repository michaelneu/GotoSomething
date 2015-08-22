/**
 * Wraps a search result
 *
 * @param {string} file   The name of the file
 * @param {int}    line   The line which contains the result
 * @param {Block}  block  The block which contains the result
 * @param {string} result The actual search result
 */
function Something(file, line, block, result) {
    this.file   = file;
    this.line   = line;
    this.block  = block;
    this.result = result;
}
