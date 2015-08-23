QUnit.test("GotoSomething - SearchPattern", function (assert) {
    var pattern1 = new SearchPattern("abc@def");
    assert.strictEqual(pattern1.filter, "abc", "Filter is parsed correctly");
    assert.strictEqual(pattern1.pattern, "def", "Pattern is parsed correctly");

    var pattern2 = new SearchPattern("def");
    assert.strictEqual(pattern2.filter, "", "Filter is parsed correctly");
    assert.strictEqual(pattern2.pattern, "def", "Pattern is parsed correctly");

    var pattern3 = new SearchPattern("@");
    assert.strictEqual(pattern3.filter, "", "Filter is parsed correctly");
    assert.strictEqual(pattern3.pattern, "", "Pattern is parsed correctly");
});

QUnit.test("GotoSomething - full search", function (assert) {
    assert.notStrictEqual(window.files, undefined, "files is defined");

    var goto = new GotoSomething(files);
    var result = goto.find("2@this");

    assert.strictEqual(result.length, 3, "3 results found");
    assert.strictEqual(result[1].line, 8, "result line is correct");
    assert.ok(result[2].block instanceof UnknownBlock, "unknown blocks are handled correctly");
});
