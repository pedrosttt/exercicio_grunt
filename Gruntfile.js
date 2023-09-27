module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false, // Altere para true para comprimir o CSS
                },
                files: {
                    'dist/css/styles.css': 'src/less/styles.less'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/main.min.js': ['src/js/main.js']
                }
            }
        }
    });

    // Carregando os plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Definindo a tarefa padrão
    grunt.registerTask('default', ['less', 'uglify']);
};
