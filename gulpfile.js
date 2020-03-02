const gulp = require("gulp");
const exec = require("child_process").exec;
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
    // .pipe(uglify())
    .pipe(gulp.dest("."));
};

const CleanIt = () => {
  return gulp.src(tempFile).pipe(clean());
};

const UpdateIt = cb => {
  exec("clasp push", (err, stdout, stderr) => {
    console.log("= clasp: output ==========================\n");
    
    if (stdout) {
      console.log("stdout", stdout);
    }

    if (stderr) {
      console.log("stderr", stderr);
    }

    console.log("==========================================");
    
    cb(err); // err should be `null` if everything goes right
  });
};

exports.default = () => {
  return gulp.watch(["./src/*.js","./*.html"], gulp.series(GulpIt, CleanIt, UpdateIt));
};
