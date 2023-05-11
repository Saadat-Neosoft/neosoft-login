const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("app/scss/**/*.scss").pipe(sass()).pipe(dest("app/css"));
}

function watchTask() {
  watch(["app/scss/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);

// gulp.task("sass", function () {
//   return gulp
//     .src("app/scss/**/*.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(gulp.dest("app/css"));
// });

// gulp.task("watch", function () {
//   gulp.watch("app/scss/**/*.scss", gulp.series("sass"));
// });

// gulp.task("fonts", function () {
//   return gulp.src("app/fonts/**/*").pipe(gulp.dest("dist/fonts"));
// });
