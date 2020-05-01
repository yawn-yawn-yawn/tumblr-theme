var gulp = require("gulp");
var sass = require("gulp-sass");

var theme = "theme3"

gulp.task("sass", function () {
    return (
        gulp.src(`${theme}/src/sass/**/*.scss`) // 取得するファイル
            .pipe(sass({ outputStyle: "expanded" })) // コンパイル時のオプション
            .pipe(gulp.dest(`${theme}/src/css`)) // 保存先
    );
});

gulp.task("sass-watch", function () {
    return gulp.watch(`${theme}/src/sass/**/*.scss`, function () {
        return (
            gulp.src(`${theme}/src/sass/**/*.scss`)
                .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
                .pipe(gulp.dest(`${theme}/src/css`))
        );
    });
});