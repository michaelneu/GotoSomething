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

//
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
