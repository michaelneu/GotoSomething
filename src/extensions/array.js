/**
 * Get the last element of the array or null if the array is empty
 *
 * @return {object} The last element of the array or null
 */
Array.prototype.last = function () {
    if (this.length > 0) {
        return this[this.length - 1];
    } else {
        return null;
    }
};

/**
 * Remove the element at index
 *
 * @param  {int} index The index of the element to be removed
 */
Array.prototype.remove = function (index) {
    if (index < this.length && index >= 0) {
        this.splice(index, 1);
    }
};

/**
 * Check if the array contains a certain element using strict equal or `equals` if possible
 *
 * @param  {object} element The element to find
 * @return {bool}           Whether the array contains the element
 */
Array.prototype.contains = function (element) {
    if (this.length > 0) {
        var checkForEquals = this[0].equals !== undefined;

        for (var i = 0; i < this.length; i++) {
            var k = this[i];

            if ((checkForEquals && k.equals(element)) || k === element) {
                return true;
            }
        }
    }

    return false;
};

/**
 * Remove all duplicate entries from the array
 */
Array.prototype.unique = function () {
    var elements = [];

    for (var i = 0; i < this.length; i++) {
        var element = this[i];

        if (elements.contains(element)) {
            this.remove(i);

            // array modified in place, loop increments i --> decrement i before
            i--;
        } else {
            elements.push(element);
        }
    }
};
