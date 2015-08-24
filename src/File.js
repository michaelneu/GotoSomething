/**
 * Wraps a JSON file representation into a regular class
 *
 * @param {json} file The file
 */
function File(file) {
    this.filename = file.name;
    this.content  = file.content.replace("\r", "");
}

/**
 * Get the file's content
 *
 * @return {string} The content
 */
File.prototype.read = function () {
    return this.content;
}

/**
 * Get the file's content as an array of its lines
 *
 * @return {array} The lines of the file
 */
File.prototype.readLines = function () {
    var content = this.read();

    if (content !== null && content !== undefined) {
        return content.split("\n");
    } else {
        return [];
    }
};
