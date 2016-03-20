module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['javascripts/logo.js'],
        dest: 'public/javascripts/main.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: './public/javascripts/main.js',
        dest: './public/javascripts/main.min.js'
      }
    },
    sass: {
      dist: {
        files: [{
          style: 'compressed',
          expand: true,
          cwd: './sass',
          src: ['[a-z]*.scss'],
          dest: './public/stylesheets',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat', 'uglify', 'sass']);
};
