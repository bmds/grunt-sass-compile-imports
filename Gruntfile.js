/*
 * grunt-sass-compile-imports
 * https://github.com/bmds/grunt-sass-compile-imports
 *
 * Copyright (c) 2014 Barney Scott
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    sass_compile_imports: {
      default_options: {
        target: 'test/_partials.scss',
        src: ['test/fixtures/testing', 'test/fixtures/123']
      },
      custom_options: {
        options: {
            removeExtension: false
        },
        target: 'test/_partials.scss',
        files: [{
            expand: true,
            cwd   : 'test/fixtures/',
            src   : ['**/*.scss']
        }]
      },
      replace_path: {
        options: {
            replacePath: {
                pattern: 'test/fixtures',
                replace: '../_styles'
            }
        },
        target: 'test/_partials.scss',
        files: [{
            expand: true,
            cwd   : 'test/fixtures/',
            src   : ['**/*.scss']
        }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-debug-task');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'sass_compile_imports', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

};
