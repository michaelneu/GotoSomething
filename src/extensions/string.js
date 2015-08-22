/**
 * Check if a string contains characters even if there are other characters inbetween
 *
 * @param  {string} characters The characters that should be inside the string
 * @return {bool}              Whether the string does contain the characters
 */
String.prototype.containsCharacters = function (characters) {
    if (characters !== undefined && typeof characters === "string") {
        var start = 0;

        for (var i = 0; i < characters.length; i++) {
            start = this.indexOf(characters[i], start);

            if (start === -1) {
                return false;
            }
        }

        return true;
    }

    return false;
};
