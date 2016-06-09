module.exports = function(grunt) {

  grunt.initConfig({
    imageoptim: {
      myTask: {
        options: {
          jpegMini: true,
          imageAlpha: true,
          quitAfter: true
        },
        src: ['img/']
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
    uncss: {
      myTask: {
      files: {
          'css/print.css': ['project-2048.html', 'project-mobile.html', 'project-webperf.html','index.html']/*,
          'views/css/style.min.css': ['views/pizza.html'],
          'views/css/bootstrap-grid.min.css': ['views/js/pizza.html']*/
        }
      }
    },
    cssmin: {
      myTask: {
      files: [{
        expand: true,
        cwd: 'views/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
        }]
      }
    },
    htmlmin: {
      myTask: {
      options: {
        removeComments: true,
        collapseWhitespace: true
        },
      files: {
        /*'index.html': 'index.html',
        'project-2048.html': 'project-2048.html',
        'project-mobile.html': 'project-mobile.html',
        'project-webperf.html': 'project-webperf.html',*/
        'views/pizza.html': 'views/pizza.html'
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
