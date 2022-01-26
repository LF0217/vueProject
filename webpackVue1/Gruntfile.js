module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'dist/', src: ['**'], dest:'D:\\code\\ws_new\\H5\\H5-web\\src\\main\\webapp\\static'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

};
