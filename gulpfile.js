const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// scss compiler

function style( ) {

    // find scss file
    return gulp.src('./css/**/*style.scss')

    // pass scss through sass compiler
    .pipe(sass())

    // save compiled css
    .pipe(gulp.dest('./css'))
}

exports.style = style


 
