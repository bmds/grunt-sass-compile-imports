/*
 * grunt-sass-compile-imports
 * https://github.com/bmds/grunt-sass-compile-imports
 *
 * Copyright (c) 2014 Barney Scott
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('sass_compile_imports', 'Create an import file by scanning a directory for SASS files', function() {
      var importFiles = [
          // Header
          '// This file imports all other named scss files.',
          '// It is automatically generated by the grunt sassimports task.',
          '// Do not directly modify this file.',
          ''
      ];
      var files       = this.filesSrc;
      var options     = this.options({
          replacePath:     false,
          quiet:           false,
          removeExtension: true
      });

      // Check that the destination file exists
      if(!grunt.file.exists(this.data.target)) {
          grunt.file.write(this.data.target, '');
      }

      if (!options.quiet) {
          grunt.log.writeln('\nScanning for files to import\n');
      }
      // Loop through the files
      files.forEach(function (filepath) {
          if (!options.quiet) {
              grunt.log.writeln('Importing: ' + filepath.cyan);
          }

          // Remove the .scss extension
          if (options.removeExtension) {
              filepath = filepath.replace('.scss', '');
          }

          // Update the path generated by the tool
          if (options.replacePath !== false) {
              if(options.replacePath.hasOwnProperty('replace') && options.replacePath.hasOwnProperty('pattern')) {
                  filepath = filepath.replace(options.replacePath.pattern, options.replacePath.replace);
              } else {
                  // No so error out
                  grunt.log.warn('The replacePath property does not have the correct configuration!');
                  return false;
              }
          }

          // Add the current file to the list
          importFiles.push('@import "' + filepath + '";');
      });

      grunt.log.writeln('Imported: ' + files.length + ' files'['cyan']);

      // Merge the import files
      importFiles = importFiles.join('\n');
      // Create the new file
      grunt.file.write(this.data.target, importFiles);

      if (!options.quiet) {
          grunt.log.writeln('\nImport file created');
      }
    });

};
