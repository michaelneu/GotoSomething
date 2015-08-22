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
