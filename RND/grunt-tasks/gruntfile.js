module.exports = function(grunt){
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dev: {
                options: {
                    banner: '/*jqr-dev*/',
                    mangle: false,
                    sourceMap: false
                },
                files: {
                    'dist/<%=destinationPkgNameJS%>.min.js': ['src/*.js']
                }
            },
            staging: {
                options: {
                    banner: '/*jqr-stag*/',
                    mangle: true,
                    sourceMap: true
                },
                files: {
                    'dist-staging/<%=destinationPkgNameJS%>.min.js': ['src/*.js']
                }
            }
        },
        cssmin: {
            dev: {
                options: {
                    banner: '/*jqr-dev*/',
                    mangle: false,
                    sourceMap: false
                },
                files: {
                    'dist/<%=destinationPkgNameCSS%>.min.css': ['src/*.css']
                }
            },
            staging: {
                options: {
                    banner: '/*jqr-stag*/',
                    mangle: true,
                    sourceMap: true
                },
                files: {
                    'dist-staging/<%=destinationPkgNameCSS%>.min.css': ['src/*.css']
                }
            }
        },
        destinationPkgNameJS: "condensemain",
        destinationPkgNameCSS: "libcss"
    });
	
    let target = grunt.option('staging') ? 'staging': 'dev';
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['uglify:' + target, 'cssmin:' + target]);
};