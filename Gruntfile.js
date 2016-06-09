module.exports = function(grunt) {

  grunt.initConfig({
    imageoptim: {
      myTask: {
        options: {
          jpegMini: true,
          imageAlpha: true,
          quitAfter: true
        },
        src: ['views/images/']
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      myTask: {
      files: {
        'js/perfmatters.min.js': ['js/perfmatters.js'],
        'views/js/main.min.js': ['views/js/main.js']
        }
      }
    },
    cssmin: {
      myTask: {
      files: [{
        expand: true,
        cwd: 'views/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'views/css/',
        ext: '.min.css'
        }]
      }
    },
    uncss: {
      myTask: {
      files: {
          'css/print.css': ['index.html'],
          'css/style.css': ['index.html'],
          'views/css/style.css': ['project-2048.html', 'project-mobile.html', 'project-webperf.html', 'views/js/pizza.html'],
          'views/css/bootstrap-grid.css': ['project-2048.html', 'project-mobile.html', 'project-webperf.html', 'views/js/pizza.html']
        }
      }
    },
    htmlmin: {
      myTask: {
      options: {
        removeComments: true,
        collapseWhitespace: true
        },
      files: {
        'index.html': 'index.html',
        'project-2048.html': 'project-2048.html',
        'project-mobile.html': 'project-mobile.html',
        'project-webperf.html': 'project-webperf.html',
        'views/js/pizza.html': 'views/js/pizza.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['imageoptim', 'uglify', 'uncss', 'htmlmin']);
};
