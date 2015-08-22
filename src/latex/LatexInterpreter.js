/**
 * Skim the lines of a Latex file for chapters/[sub]sections
 *
 * @param {array} lines The lines of the file
 */
function LatexInterpreter(lines, filename) {
    var blocks     = [],
        blockStart = 0;

    for (var line_number = 0; line_number < lines.length; line_number++) {
        var line = lines[line_number];

        // strip comments
        line = line.replace(LatexPattern.comment, "");
        // strip new-line-shortcuts
        line = line.replace(LatexPattern.newLineShortcut, "");

        var bigBlockMatch = LatexPattern.block.exec(line);

        if (bigBlockMatch !== null) {
            var fullBigBlock = bigBlockMatch[0];

            // go through big block to see if there are other blocks included
            // see pumping-lemma
            var bracketsOpened = 0,
                bracketsClosed = 0,
                blockStart     = 0;

            for (var letter_number = 0; letter_number < fullBigBlock.length; letter_number++) {
                var letter = fullBigBlock[letter_number];

                if (letter === "{") {
                    bracketsOpened++;
                } else if (letter === "}") {
                    bracketsClosed++;
                }

                if (bracketsClosed > 0 && bracketsOpened === bracketsClosed) {
                    // we closed all brackets we opened
                    bracketsOpened = 0;
                    bracketsClosed = 0;

                    var subBlock = fullBigBlock.substring(blockStart, letter_number + 1);
                    blockStart = letter_number + 1;

                    var block = new Block(subBlock, line_number, filename);

                    // now that we have the start of the current block we can set the end of the previous block
                    var previousBlock = blocks.last();
                    if (previousBlock !== null) {
                        previousBlock.end = block.start;
                    }

                    blocks.push(block);
                }
            }
        }
    }

    var lastBlock = blocks.last();
    if (lastBlock !== null) {
        lastBlock.end = lines.length;
    }

    this.blocks = blocks;
}