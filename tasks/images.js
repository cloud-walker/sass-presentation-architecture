import gulp from 'gulp'
import sync from 'browser-sync'
import watch from 'gulp-watch'

const glob = 'source/**/*.png'

gulp.task('images', () =>
  gulp.src(glob)
    .pipe(gulp.dest('dist'))
    .pipe(sync.stream())
)

gulp.task('images:watch', () =>
  watch(glob, () => gulp.start('images'))
)
