import gulp from 'gulp'
import sync from 'browser-sync'

gulp.task('sync', () => sync.init({
  server: 'dist',
  open: false
}))
