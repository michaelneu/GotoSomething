/**
 * Wraps a search result
 *
 * @param {int}    line   The line which contains the result
 * @param {Block}  block  The block which contains the result
 * @param {string} result The actual search result
 */
function Something(line, block, result) {
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
        var equalLine   = this.line === otherThing.line,
            equalBlock  = this.block.equals(otherThing.block),
            equalResult = this.result === otherThing.result;

        return equalLine && equalBlock && equalResult;
    } else {
        return false;
    }
};
