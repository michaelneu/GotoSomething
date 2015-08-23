QUnit.test("Latex - LatexInterpreter", function (assert) {
    var latex = [
        // (somewhat) valid latex
        "\\chapter{\\textbf{1}} }",                     // the trailing "}" should be stripped
        "other content \\subsubsection{1.0.1} foo",         // should work, although other content is prepended
        "\\chapter{2} \\subsection{2.1} \\paragraph{2.1.0.0.1}", // should result in 2 blocks

        // invalid
        "\\subsection{\\textbf{2.1.1}", // should not appear in the result set
        "foobar % \\chapter{3}",       // chapter is commented out, should not appear either

        // check for block start-end
        "foo",
        "bar",
        "foobar",
        "\\chapter{4}",
        "foo",
        "bar",
        "\\chapter{5}"
    ];

    var interpreter = new LatexInterpreter(latex, "test.tex"),
        blocks      = interpreter.blocks;

    assert.strictEqual(blocks.length, 7, "7 Blocks detected");
    assert.strictEqual(blocks[0].content, "\\textbf{1}", "Block content is correct");
    assert.strictEqual(blocks[1].type, "subsubsection", "Block type is correct");

    assert.strictEqual(blocks[0].start, 0, "Correct block start is set");
    assert.strictEqual(blocks[0].end, 2, "Correct block ending is set");
});
