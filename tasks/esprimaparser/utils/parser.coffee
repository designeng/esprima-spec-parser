esprima = require "esprima"
escodegen = require "escodegen"
_ = require "underscore"

parser = (content) ->
	AST = esprima.parse(content)
	node = AST.body[0]



	specItems = node.expression.arguments[0].body.body[0].argument.properties

	for item in specItems
		if item.type == "Property" and item.key.type == "Identifier" and item.key.name.indexOf("View") > 0
			console.log "ITEM:::", item


module.exports = parser 