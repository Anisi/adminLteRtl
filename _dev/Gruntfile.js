module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vars: {
            rootDir: 'C:/xampp/htdocs/test'
        },
        'less': {
            dev: {
                files: {
                    '../css/test.css': '<%= vars.rootDir %>/less/test.less',
                    '../css/AdminLTE.css': '<%= vars.rootDir %>/less/AdminLTE.less'
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