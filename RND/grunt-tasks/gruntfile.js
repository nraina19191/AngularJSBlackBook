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
        terser: {
            dev: {
                files: {
                    'dist/<%=destinationPkgNameJS%>.min.js': ['src/*.js']
                }
            },
            staging: {
                options: {
                    mangle: true,
                    sourceMap: true
                },
                files: {
                    'dist-staging/<%=destinationPkgNameJS%>.min.js': ['src/*.js']
                }
            }
        },
        destinationPkgNameJS: "condensemain",
        destinationPkgNameCSS: "libcss"
    });
	
    let target = grunt.option('staging') ? 'staging': 'dev';
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-terser');
    grunt.registerTask('default', ['uglify:' + target, 'cssmin:' + target]);
    //grunt.registerTask('terser', ['terser:' + target]);
};