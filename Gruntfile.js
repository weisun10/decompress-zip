'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: [
                'Gruntfile.js',
                'bin/*',
                'lib/**/*.js',
                'test/*.js'
            ]
        },
        simplemocha: {
            options: {
                reporter: 'spec',
                timeout: '5000'
            },
            full: {
                src: [
                    'test/*.js'
                ]
            },
            short: {
                options: {
                    reporter: 'dot'
                },
                src: [
                    '<%= simplemocha.full.src %>'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-simple-mocha');

    grunt.registerTask('test', ['jshint', 'simplemocha:full']);
    grunt.registerTask('default', 'test');
};
