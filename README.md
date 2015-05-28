# grunt-sass-compile-imports

> Create an import file by scanning a directory for SASS files

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sass-compile-imports --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sass-compile-imports');
```

## The "sass_compile_imports" task

### Overview
In your project's Gruntfile, add a section named `sass_compile_imports` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sass_compile_imports: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.removeExtension
Type: `Boolean`
Default value: `true`

Flag specifying if the generated paths should exclude the .scss extension.

#### options.quiet
Type: `Boolean`
Default value: `false`

A flag used to specify if the task should output information about the files it is importing

### Usage Examples

Coming soon


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
