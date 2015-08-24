# GotoSomething

The approach of bringing a Sublime-Text-like "Goto-Anything" search dialog to JavaScript - for LaTeX-files.


#### Building

To build clone the repo and run `gulp`.
```
$ git clone https://github.com/minedev/GotoSomething.git
$ cd GotoSomething/
$ npm install
$ gulp
```


#### Usage

Once `goto-something.min.js` is included you can use GotoSomething like this:
```javascript
// initialize the goto finder
var goto = new GotoSometing(files);

// find all results of "influence" in a chapter like "thermodynamics"
var results = goto.find("thermodynamics@influence");

// go through all found places
results.forEach(function (something) {
    // output the matched result
    console.log(something.result);

    // output the title of the block that contains the result
    console.log(something.block.content);
});
```

The files are skimmed like in Sublime-Text, for example when looking for the term `this`, those (and other similar) lines are matched:

- **this**
- **th**e lib **is** awesome
- **t**ext can be parsed w**hi**le typing **s**tuff


### Implementing a custom file management

It might come in handy to use other places than the RAM to store files, for example if you want to use sequential reading of files. To implement this behaviour the `File` class was made. Overwriting its prototype's `read()` and `readLines()` should do, what you want.

Just remember, that the constructor **must** accept an object of the `files` array you pass to `new GotoSomething(files)`. Also note that the result of the `readLines`-method **must** expose a `forEach(function (line, line_number))`-method to iterate through the lines. 

If you want to use the `localStorage` for example, it could look like this:

```javascript
// first re-implement the Files-object to interpret the argument as the filename
function File(filename) {
    this.filename = filename;
}

// in this implementation we're retrieving our file's content from the localStorage
// we don't have to re-implement readLines(), because it will return the lines of read()
File.prototype.read = function () {
    return localStorage.getItem(this.filename);
};



// here we simply pass filenames as the contents are already in the localStorage
// this is not part of the implementation per se, just to visualize how it would affect GotoSometing
console.log(localStorage); // should contain the files and their content
var files = ["file1.tex", "file2.tex"];
var goto  = new GotoSometing(files);
```
