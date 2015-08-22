/**
 * Initializes a new GotoSomething object
 *
 * @param {object} files A file array
 */
function GotoSomething(files) {
    this.files = files.map(function (element) {
        return new File(element);
    });
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

    this.files.forEach(function (file) {
        var lines = file.readLines();

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


        // if the first block isn't on line 1, then there's an unknown block before
        // add this block to the search ranges as it might be part of some other block
        var firstBlockStart = -1;

        if (blocks.length > 0) {
            firstBlockStart = blocks[0].start;
        }
        
        if (firstBlockStart !== 0 || firstBlockStart === -1) {
            var range = {
                start: 0,
                end: firstBlockStart,
                block: new UnknownBlock(file.filename)
            };

            rangesToLookIn.unshift(range);
        }

        // walk through the ranges and look for the pattern
        rangesToLookIn.forEach(function (range) {
            for (var i = range.start; i < range.end; i++) {
                var line = lines[i];

                if (line.containsCharacters(pattern.pattern)) {
                    var something = new Something(file.filename, i, range.block, line);
                    result.push(something);
                }
            }
        });
    });

    result.unique();

    return result;
};
