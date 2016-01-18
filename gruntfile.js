'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        app: __dirname,

        sass: {
            options: {
                sourceMap: true,
                lineNumbers: false,
                outputStyle: 'compressed'
            },

            prod: {
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },

        watch: {
            options: {
                spawn: false,
                livereload: true
            },

            css: {
                files: [
                    '<%= app %>/sass/**/*'
                ],
                tasks: ['sass']
            },

            js: {
                files: [
                    '<%= app %>/src/**/*.*'
                ],
                tasks: ['eslint']
            }
        },

        connect: {
            options: {
                port: 3000,
                livereload: 35729,
                hostname: 'localhost',
            },
            livereload: {
                options: {
                    base: ['<%= app %>']
                }
            }
        }
    });

    grunt.registerTask('default', ['sass', 'connect', 'watch']);

};