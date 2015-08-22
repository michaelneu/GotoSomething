/**
 * Wraps a JSON file representation into a regular class
 *
 * @param {json} file The file
 */
function File(file) {
    this.filename = file.name;
    this.content  = file.content.replace("\r", "");
    this.basename = file.name.split("/").last();
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
    return this.read().split("\n");
};
