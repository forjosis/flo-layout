//
// Variables ===================================
//
let 
    // plugins
    { src, dest, watch, series, parallel } = require('gulp'),
    // sass = require('gulp-sass'),
    sass = require('gulp-sass')(require('sass')),
    // parts
    dist_folder = 'dist',
    source_folder  = 'src',
    path = {
        src:{
            scss: source_folder + '/*.scss'
        },
        watch: {
            scss: source_folder + '/*.scss'
        },
        dist: {
            css: dist_folder + '/'
        }
    };


//
// Tasks ===================================
//
function styles(){
    return src(path.src.scss)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(dest(path.dist.css))
}

function watchFiles(){
	watch([path.watch.scss], styles);
}

exports.styles = styles;
exports.default = series(styles, parallel(watchFiles));