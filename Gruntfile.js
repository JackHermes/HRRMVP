module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      express: {
        dev: {
          options: {
            script: './server/server.js'
          }
        }
        // tasks:  [ 'express:dev' ]
        // options: {
        //   spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        // }
      }
    }
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-express-server');

grunt.registerTask('express:dev', function() {
  grunt.task.run
});
grunt.registerTask('server', [ 'express:dev', 'watch' ]);