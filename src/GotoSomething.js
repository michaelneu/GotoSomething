/**
 * Initializes a new GotoSomething object
 *
 * @param {object} files A file array
 */
function GotoSomething(files) {
    this.files = files;
}

/**
 * Find the given pattern in the file array
 *
 * @param  {string} pattern The pattern to look for in the file array
 * @return {array}          The found places
 */
GotoSomething.prototype.find = function (pattern) {
    var result = [],
        pattern = new SearchPattern(pattern);

    var currentBlock = null;

    this.files.forEach(function (file) {
        var lines    = file.content.replace("\r", "").split("\n");

        // parse the blocks
        var latex  = new LatexInterpreter(lines, file.name),
            blocks = latex.blocks;

        var matchingBlocks = blocks.filter(function (element) {
            return element.content.containsCharacters(pattern.filter);
        });
        var rangesToLookIn = matchingBlocks.map(function (element) {
            var range = {
                start: element.start,
                end: element.end,
                block: element
            };

            return range;
        });

        // if the block we're currently in matches the filter append it to the ranges
        if (currentBlock !== null && currentBlock.content.containsCharacters(pattern.filter)) {
            var firstBlockStart = -1;

            if (blocks.length > 0) {
                firstBlockStart = blocks[0].start;
            }

            // but only if the first new block isn't in the first line (= current block empty)
            if (firstBlockStart !== 0 || firstBlockStart === -1) {
                var range = {
                    start: 0,
                    end: firstBlockStart,
                    block: currentBlock
                };

                rangesToLookIn.unshift(range);
            }
        }

        // walk through the ranges and look for the pattern
        rangesToLookIn.forEach(function (range) {
            for (var i = range.start; i < range.end; i++) {
                var line = lines[i];

                if (line.containsCharacters(pattern.pattern)) {
                    var something = new Something(file.name, i, range.block, line);
                    result.push(something);
                }
            }
        });

        // remember the current block
        var lastBlock = blocks.last();
        if (lastBlock !== null) {
            currentBlock = lastBlock;
        }
    });

    return result;
};
