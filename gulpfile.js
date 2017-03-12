var gulp = require("gulp");

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
path={
	html:"./ngrouter/*.html",
	js:"./ngrouter/script/*.js"
};


// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// 代理
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "192.168.0.102"//"你的域名或IP"
    });
});

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(path.html).on('change', reload);
        gulp.watch(path.js).on('change', reload);
});

gulp.task('default', ['serve']);