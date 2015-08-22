var gulp   = require("gulp");
var clean  = require("gulp-clean");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var qunit  = require("gulp-qunit");


var SRC = {
    JS: "src/**/*.js",
    TEST: "test/**/*.html"
};

var DEST = {
    JS: "dist/"
}

gulp.task("build", function () {
    gulp.src(SRC.JS)
        .pipe(concat("goto-something.js"))
        .pipe(gulp.dest(DEST.JS))
        .pipe(uglify())
        .pipe(rename("goto-something.min.js"))
        .pipe(gulp.dest(DEST.JS));
});

gulp.task("test", function () {
    gulp.src(SRC.TEST)
        .pipe(qunit().on("error", function () { } ));
});

gulp.task("default", ["build", "test"]);

gulp.task("watch", ["build"], function () {
    gulp.watch(SRC.JS, ["default"]);
    gulp.watch(SRC.TEST, ["test"]);
});
