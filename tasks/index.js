import gulp from 'gulp'
import seq from 'gulp-sequence'

gulp.task('default', seq('build', 'watch'))
gulp.task('build', seq('clean', ['html', 'css']))
gulp.task('watch', seq('sync', ['html:watch', 'css:watch']))
