'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    browserSync = require("browser-sync"),
    pug = require("gulp-pug"),
    rimraf = require('rimraf'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    stylelintGulp = require('gulp-stylelint'),
    postcss     = require('gulp-postcss'),
    reporter    = require('postcss-reporter'),
    syntax_scss = require('postcss-scss'),
    stylelint   = require('stylelint'),
    notify = require('gulp-notify'),
    eslint = require('gulp-eslint'),

    reload = browserSync.reload;



var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main-page.js',//В стилях и скриптах нам понадобятся только main-page файлы
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        pug: 'src/pug/**/*.pug',
        stylelintwatch: 'src/style/**/*.scss',
        eslintwatch :'src/js/**/*.js'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 3000,
    logPrefix: "GULP"
};
gulp.task('eslint', function () {
    return gulp.src(['src/js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .on('error',notify.onError({
            message:'There is JS error, please look the console for details'
        }))

});


gulp.task('scss-lint', function () {

    var stylelintConfig = {
        "rules": {
            "block-no-empty": true,
            "color-no-invalid-hex": true,
            "declaration-colon-space-after": "always",
            "declaration-colon-space-before": "never",
            "function-comma-space-after": "always",
            "media-feature-colon-space-after": "always",
            "media-feature-colon-space-before": "never",
            "media-feature-name-no-vendor-prefix": true,
            "max-empty-lines": 5,
            "number-leading-zero": "never",
            "number-no-trailing-zeros": true,
            "selector-list-comma-space-before": "never",
            "selector-list-comma-newline-after": "always",
            "string-quotes": "double",
            "value-no-vendor-prefix": true
        }
    }
    const processors = [
      stylelint(stylelintConfig),
   /*   reporter({
         selector: 'body:before'
      })*/
   ];

    gulp.src('src/style/partials/**/*.scss')
        .pipe(postcss(processors, {syntax: syntax_scss}))
        .pipe(stylelintGulp({
            reporters: [
                {
                    formatter: 'string',
                    console: true
                }
            ]
        }))
        .on('error', notify.onError({
            message: 'There is a CSS error, please look the console for details'
        }));

});


gulp.task('pug', function() {
  return gulp.src(['./src/pug/*.pug'])
    .pipe( plumber() )
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('src/'))
    .pipe(browserSync.stream())
});
gulp.task('html:build', function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});
gulp.task('js:build', function () {
    return gulp.src(['./src/js/**/*.js']) //Найдем наш main-page файл
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});




gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main-page.scss
        .pipe(plumber())
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //И в build
        .pipe(reload({stream: true}));
});
gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});
gulp.task('build', [
    'eslint',
    'scss-lint',
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);
gulp.task('watch', function(){
    watch([path.watch.pug], function(event, cb) {
        gulp.start('pug');
    });
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
    watch([path.watch.eslintwatch], function(event, cb) {
        gulp.start('eslint');
    });
    watch([path.watch.stylelintwatch], function(event, cb) {
        gulp.start('scss-lint');
    });
});
gulp.task('webserver', function () {
    browserSync(config);
});
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});
gulp.task('default', ['build', 'webserver', 'watch']);
