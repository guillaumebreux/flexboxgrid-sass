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
    sass: {
      options: {
        sourcemap: 'none',
        style: 'compressed'
      },
      compile: {
        files: {
          'dist/style/style.min.css': 'scss/style.scss'
        }
      }
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

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'autoprefixer']);

};