import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import sass from 'gulp-sass'
import sync from 'browser-sync'
import watch from 'gulp-watch'

const errorHandler = notify.onError('<%= error.message %>')

gulp.task('css', () =>
  gulp.src('source/index.scss')
    .pipe(plumber({errorHandler}))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'))
    .pipe(sync.stream())
)

gulp.task('css:watch', () =>
  watch('source/**/*.scss', () =>
    gulp.start('css')
  )
)
