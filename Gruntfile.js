module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: './public/javascripts/',
        dest: './public/javascripts/<%= pkg.name %>.min.js'
      }
    },
    sass: {
      dist: {
        files: [{
          style: 'compressed',
          expand: true,
          cwd: './sass',
          src: ['*.scss'],
          dest: './public/stylesheets',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  //grunt.registerTask('default', ['uglify', 'sass']);
  grunt.registerTask('default', ['sass']);
};
