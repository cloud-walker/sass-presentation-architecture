import gulp from 'gulp'
import sync from 'browser-sync'
import watch from 'gulp-watch'

const glob = 'source/index.html'

gulp.task('html', () =>
  gulp.src(glob)
    .pipe(gulp.dest('dist'))
    .pipe(sync.stream())
)

gulp.task('html:watch', () =>
  watch(glob, () => gulp.start('html'))
)
