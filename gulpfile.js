var gulp = require('gulp');
var sonar = require('gulp-sonar');
var argv = require('yargs').argv;
var packageProperties = require(process.cwd() + '/package.json');

gulp.task('sonarqube', function () {
    var options = {}
    options.sonar = {
        login: argv.sonarLogin || "6d86cc0efa0b56351c0ca1f7a45d5189bfb6b309",
        sources: argv.sonarSources || ".",
        exclusions: argv.sonarExclusions || "node_modules/**",
        projectKey: packageProperties.name + ":" + packageProperties.version
    };
    return gulp.src('.')
        .pipe(sonar(options));
});