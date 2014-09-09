module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vars: {
            rootDir: 'C:/xampp/htdocs/test'
        },
        'less': {
            options:{
                dumpLineNumbers: false//'all'
            },
            dev: {
                files: {
                    '../css/bootstrap.min.css': '<%= vars.rootDir %>/less/bootstrap/bootstrap.less',
                    '../css/AdminLTE.css': '<%= vars.rootDir %>/less/adminLTE/AdminLTE.less'
                }
            }
        },
        'watch': {
            less: {
                files: '<%= vars.rootDir %>/less/**/*.less',
                tasks: ['less']
            }
        }
    });

//    grunt.loadNpmTasks('grunt-contrib-concat');
//    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less', 'watch']);
};