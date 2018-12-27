var gulp	 =      require('gulp'),
plumber		 =      require('gulp-plumber'),
postcss		 =      require('gulp-postcss'),
cleanCss	 =      require('gulp-clean-css'),
watch		 =      require('gulp-watch'),
autoPrefixer =      require('gulp-autoprefixer'),
rename		 =      require('gulp-rename'),
include		 =      require('gulp-include'),
sass		 =      require('gulp-sass'),
concatCss	 =      require('gulp-concat-css'),
concat		 =	    require('gulp-concat'),
sourcemaps	 =	    require('gulp-sourcemaps'),
notify		 =	    require('gulp-notify'),
clean		 = 	    require('gulp-clean');

//error handling

var onError = function ( err ) {
	console.log( 'An error occured:', err.message);
	this.emit('end');
}

gulp.task('hello', function(done) {
  console.log('Hello David');
  done();
});

gulp.task('sass', function() {
	return gulp.src('./resources/sass/game.scss')
		.pipe(sourcemaps.init())
		.pipe( plumber( {errorHandler: onError } ) )
		.pipe(sass())
		.pipe(autoPrefixer({ browsers: ['last 2 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}))
		.pipe( cleanCss() ) 
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( sourcemaps.write())
		.pipe( gulp.dest( './dist/css') )
		.pipe( notify( { message: 'SASS tasks complete' }))
});	

gulp.task('watch', function() {
	gulp.watch( './resources/sass/**/*.scss', gulp.series('sass') );
});
