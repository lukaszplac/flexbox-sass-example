module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },

    imagemin: {
    	dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['*.{png,jpg,gif}'],
            dest: 'images/build'
        	}]
    	}
	   },

	   watch: {
        scripts: {
          files: ['scss/*.scss', './*.html'],
          tasks: ['sass'],
          options: {
            spawn: false,
            livereload: true
        	},
    	}
	   },

	   browserSync: {
	       bsFiles: {
	        src : 'css/*.css'
	         },
	       options: {
            watchTask: true,
	       server: {
	            baseDir: "./"
	        },
         plugins: [
                      {
                        module: "bs-html-injector",
                        options: {
                          files: "./*.html"
                        }
                      }
                    ]
	    }
	}
  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ['imagemin', 'sass','browserSync', 'watch']);
};
