var gulp = require('gulp');
var runSequence = require('run-sequence');
var exec = require('child_process').exec;

var gulpCopy = require('gulp-copy');
var sourceFiles = ['bower_components/**','images/**','node_modules/**','src/**' ,'deploy_key.enc','index.html','polymer.json','css/**','lib/**'];
var destination = 'out/';


function copy(srcName, destName, excludePaths) {
  return gulp
  .src(sourceFiles)
  .pipe(gulpCopy(destination));   
}

gulp.task('build', function () {
  return copy();
});

gulp.task('jekyll-build', function (cb) {
  exec('jekyll build --trace', function (err, stdout, stderr) {
    cb(err);
  });
 });
gulp.task('bower-update', function (cb) {
  exec('bower update', function (err, stdout, stderr) {
    cb(err);
  });
 });



 gulp.task('default', [
  'build'
]);
