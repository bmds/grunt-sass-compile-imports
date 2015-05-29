'use strict';

var grunt = require('grunt');

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

exports.sass_compile_imports = {
	default_options: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/_default.scss');
		var expected = grunt.file.read('test/expected/default_options');
		test.equal(actual, expected, 'Default options should function correctly.');

		test.done();
	},
	keep_extension: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/_with-extension.scss');
		var expected = grunt.file.read('test/expected/keep_extension');
		test.equal(actual, expected, 'Extensions should be kept.');

		test.done();
	},
	replace_path: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/_replaced-path.scss');
		var expected = grunt.file.read('test/expected/replace_path');
		test.equal(actual, expected, 'Path replaced with setting.');

		test.done();
	},
	import_path: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/_import-path.scss');
		var expected = grunt.file.read('test/expected/import_path');
		test.equal(actual, expected, 'Import paths should be used');

		test.done();
	},
	import_path_slash: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/_import-path-slash.scss');
		var expected = grunt.file.read('test/expected/import_path');
		test.equal(actual, expected, 'Always add a trailing slash if one isn\'t set');

		test.done();
	},
	custom_header: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/_custom-header.scss');
		var expected = grunt.file.read('test/expected/custom_header');
		test.equal(actual, expected, 'A custom header should have been used');

		test.done();
	}
};
