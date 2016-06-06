module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourcemap: 'none'
      },
      compile: {
        files: {
          'style/style.css': 'scss/style.scss'
        }
      }
    },
    watch: {
      scss: {
        files: ['**/*.scss', '**/*.html'],
        tasks: ['sass']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};