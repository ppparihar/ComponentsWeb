module.exports = function(grunt) {

    grunt.initConfig({        
        exec:{
            jekyll:{
                cmd: "jekyll build --trace"
            },
            bower:{
                cmd: "bower update"
            },
            npm:{
                cmd: "npm update"
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('build', [
        "exec:bower",
        "exec:jekyll"
      ]);
    grunt.registerTask('default', ['build']);

};
