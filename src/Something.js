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

/**
 * Compare this thing to something different
 * 
 * @param  {Something} otherThing The other thing
 * @return {bool}                 Whether both things are equal
 */
Something.prototype.equals = function (otherThing) {
    if (otherThing instanceof Something) {
        var equalFile   = this.file === otherThing.file,
            equalLine   = this.line === otherThing.line,
            equalBlock  = this.block.equals(otherThing.block),
            equalResult = this.result === otherThing.result;

        return equalFile && equalLine && equalBlock && equalResult;
    } else {
        return false;
    }
};
