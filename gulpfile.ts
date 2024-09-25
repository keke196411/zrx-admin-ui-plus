const gulp = require('gulp')
const flatten = require('gulp-flatten')
const rename = require('gulp-rename')

gulp.task('copyVueCode', async (done) => {
    console.log('🚀 ~ gulpfile task is running...')
    // gulp.src('src/examples/*.vue').pipe(flatten()).pipe(gulp.dest('docs/.vitepress/components/'))
    // gulp.src('src/assets/style/common/reset.scss').pipe(flatten()).pipe(rename('reset.scss')).pipe(gulp.dest('docs/.vitepress/styles/'))
    gulp.src('src/assets/style/common/variable.scss').pipe(flatten()).pipe(rename('variable.scss')).pipe(gulp.dest('docs/.vitepress/styles/'))
    // gulp.src('src/assets/style/common/var.scss').pipe(flatten()).pipe(gulp.dest('docs/.vitepress/styles/'))
    done()
})
