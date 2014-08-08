parser = require "./utils/parser"


module.exports = (grunt) ->
	grunt.registerTask "esprimaParser", "esprimaParser", () ->  

		file = "source/spec.js"
		fileContent = grunt.file.read file

		parser(fileContent)



		grunt.log.ok "OK"