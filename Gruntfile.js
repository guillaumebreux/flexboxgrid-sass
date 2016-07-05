module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dev: {options: {style: 'expanded', sourcemap: 'none'}, files: {'dist/style/style.css': 'scss/style.scss'}},
      prod: {options: {style: 'compressed', sourcemap: 'none'}, files: {'dist/style/style.min.css': 'dist/style/style.css'}}
    },
    watch: {
      scss: {
        files: ['**/*.scss', '**/*.html'],
        tasks: ['sass', 'autoprefixer']
      }
    },
    autoprefixer: {
      dist: {
        files: [{
          expand: true,
          cwd: 'style/',
          src: '**/*.css',
          dest: 'style/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'autoprefixer']);

};