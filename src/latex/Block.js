/**
 * Represents a ToC block in Latex
 * @param {string} latexBlock The matched Latex command
 * @param {int}    line       The line the block is in
 * @param {string} filename   The file that contains the block
 */
function Block(latexBlock, start, filename) {
    var match = LatexPattern.BLOCK.exec(latexBlock);

    this.type     = match[1];
    this.content  = match[4];
    this.filename = filename;
    this.start    = start;
    this.end      = -1;
}

/**
 * Enum for sorting blocks
 */
Block.Order = {
    CHAPTER: 5,
    SECTION: 4,
    SUBSECTION: 3,
    SUBSUBSECTION: 2,
    PARAGRAPH: 1,
    SUBPARAGRAPH: 0,

    fromType: function (type) {
        switch (type) {
            case "chapter":
                return Block.Order.CHAPTER;

            case "section":
                return Block.Order.SECTION;

            case "subsection":
                return Block.Order.SUBSECTION;

            case "subsubsection":
                return Block.Order.SUBSUBSECTION;

            case "paragraph":
                return Block.Order.PARAGRAPH;

            case "SUBPARAGRAPH":
                return Block.Order.SUBPARAGRAPH;
        }
    }
};

/**
 * Compare this block to another block
 *
 * @param  {Block} otherBlock The other block
 * @return {bool}             Whether both blocks are equal
 */
Block.prototype.equals = function (otherBlock) {
    if (otherBlock instanceof Block) {
        var equalType     = this.type === otherBlock.type,
            equalContent  = this.content === otherBlock.content,
            equalFilename = this.filename === otherBlock.filename,
            equalStart    = this.start === otherBlock.start,
            equalEnd      = this.end === otherBlock.end;

        return equalType && equalContent && equalFilename && equalStart && equalEnd;
    } else {
        return false;
    }
};

/**
 * Represents an unknown ToC block in Latex
 *
 * @param {string} filename The file that contains the block
 */
function UnknownBlock(filename) {
    this.prototype = Object.create(Block.prototype);

    this.filename = filename;
}
