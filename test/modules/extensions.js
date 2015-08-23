QUnit.test("Extensions - String.containsCharacters", function (assert) {
    assert.strictEqual("abcdefg".containsCharacters("bfd"), false, "String doesn't contains 'bfd'");
    assert.strictEqual("abcdefg".containsCharacters("bfg"), true, "String contains 'bfg'");
});

QUnit.test("Extensions - Array.contains", function (assert) {
    var array = [1, 2, 3];

    assert.ok(array.contains(2), "Array contains 2");
    assert.notOk(array.contains(4), "Array contains 4");
});

QUnit.test("Extensions - Array.remove", function (assert) {
    var array = [1, 2, 3];
    array.remove(1);

    assert.deepEqual(array, [1, 3], "Array removed 2");
});

QUnit.test("Extensions - Array.unique", function (assert) {
    var array = [1, 2, 3, 4, 1, 1, 3, 3];
    array.unique();

    assert.deepEqual(array, [1, 2, 3, 4], "Array is unique");
});
