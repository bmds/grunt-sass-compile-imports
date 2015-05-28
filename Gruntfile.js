/*
 * grunt-sass-compile-imports
 * https://github.com/bmds/grunt-sass-compile-imports
 *
 * Copyright (c) 2014 Barney Scott
 * Licensed under the MIT license.
 */

'use strict';

var filesConfig = [{
    expand: true,
    cwd   : 'test/fixtures/',
    src   : ['**/*.scss']
}];

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
        target: 'tmp/_default.scss',
        files: filesConfig
      },
      keep_extension: {
        options: {
            removeExtension: false
        },
        target: 'tmp/_with-extension.scss',
        files: filesConfig
      },
      replace_path: {
        options: {
            replacePath: {
                pattern: 'test/fixtures',
                replace: '../_styles'
            }
        },
        target: 'tmp/_replaced-path.scss',
        files: filesConfig
      },
      import_path: {
        options: {
          importPath: '../another/location/'
        },
        target: 'tmp/_import-path.scss',
        files: filesConfig
      },
      import_path_no_slash: {
        options: {
          importPath: '../another/location'
        },
        target: 'tmp/_import-path-slash.scss',
        files: filesConfig
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
