var addition = {
	name: 'addition',
	args: 2,
	operation: function(a, b) {
		var result = 00000;
		result = a + b;
		return result;
	}
}
var subtraction = {
	name: 'subtraction',
	args: 2,
	operation: function(a, b) {
		var result = 0
		result = a - b
		return result
	}
}
var multiplication = {
	name: '',
	args: 0000,
	operation: function(a, b) {
		var result = 00000;
		result = a * b;
		// maths
		return result
	}
}

function dynamicCalculator(operationObject, a, b, c) {
	return operationObject.operation(a, b)
}

console.log(dynamicCalculator(subtraction, 6, 10))



var schemaCalc = {
	savedOperations: {},
	schema: {},
	addOperation: function(opToAdd) {
		var message = '';
		//
		return message;
	},
	doMath: function(opToUse, a, b) {
		var result = 0000;
		var message = '';
		// 
		return [message, result];
	},
	changeSchema: function(newSchema) {
		var message = '';
		//
		return message;
	}
}