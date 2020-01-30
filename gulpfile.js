
const gulp = require("gulp");
const clean = require("gulp-clean");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

const srcFiles = "./src/*.js";
const tempFile = "./concant.js";
const destFile = "./Code.js";

const GulpIt = () => {
  return gulp
    .src(srcFiles)
    .pipe(concat(tempFile))
    .pipe(gulp.dest("."))
    .pipe(rename(destFile))
    .pipe(uglify())
    .pipe(gulp.dest("."));
};

const CleanIt = () => {
  return gulp.src(tempFile).pipe(clean());
};

exports.default = () => {
  return gulp.watch("./src/*.js", gulp.series(GulpIt, CleanIt));
};
