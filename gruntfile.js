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
                tasks: ['sass', 'postcss', 'asset_cachebuster']
            },

            js: {
                files: [
                    '<%= app %>/src/**/*.*'
                ],
                tasks: ['eslint', 'asset_cachebuster']
            }
        },

        imagemin: {
            options: {                       // Target options
                optimizationLevel: 6,
                progressive: true
            },

            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'img/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'img/'                  // Destination path prefix
                }]
            }
        },

        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'public/*.css'
            }
        },

        asset_cachebuster: {
            options: {
                buster: Date.now()
            },
            build: {
                files: {
                    'public/main.css': ['public/main.css'],
                    'public/index.html': ['public/index.html'],
                    'public/about/index.html': ['public/about/index.html'],
                }
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

    grunt.registerTask('default', ['postcss', 'asset_cachebuster']);

};