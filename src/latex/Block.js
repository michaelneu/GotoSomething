/**
 * Represents a ToC block in Latex
 * @param {string} latexBlock The matched Latex command
 * @param {int}    line       The line the block is in
 * @param {string} filename   The file that contains the block
 */
function Block(latexBlock, start, filename) {
    var match = LatexPattern.block.exec(latexBlock);

    this.type     = match[1];
    this.content  = match[3];
    this.filename = filename;
    this.start    = start;
    this.end      = -1;
}
