/**
 * Created by Juan Gallo (Reicko) on 15/10/15.
 */

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server();
});

gulp.task('default', ['webserver']);