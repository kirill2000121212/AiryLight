const { src, dest, watch, parallel, series } = require("gulp");
const scss = require('gulp-sass')(require('sass'));
const concat = require("gulp-concat");
const uglify = require('gulp-uglify-es').default;
const browserSync = require("browser-sync").create();
const cleaner = require("gulp-clean");


const styles = () => 
    src("./client/scss/*.scss")
    .pipe(concat('style.min.css'))
    .pipe(scss({ outputStyle : 'compressed' }).on('нихатю компрессироваца! /:3', scss.logError))
    .pipe(dest("./client/css"))
    .pipe(browserSync.stream())


const javaScript = () => 
    src(["./client/js/*.js", "!./client/js/main.min.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("./client/js"))
    .pipe(browserSync.stream())


const watching = () =>
    browserSync.init({
        server : { baseDir : './client' },
        port : 4000
    }) 
    watch(['client/scss/*.scss'], styles)
    watch(['client/js/main.js'], javaScript)
    watch(['client/*.html']).on('change', browserSync.reload)

    
const cleanDist = () => 
    src("dist")
    .pipe(cleaner())
        
    
const building = () =>
    src([
        "./client/css/style.min.css",
        "./client/js/main.min.js",
        "./client/*.html"
    ], { base : './client' }) 
    .pipe(dest("./dist"))   



exports.styles = styles;
exports.javaScript = javaScript;
exports.watching = watching;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, javaScript, watching);