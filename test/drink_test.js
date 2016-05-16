var index = require('../index');
var assert = require('assert');

var Monday = [{
    "person": "Mdu",
    "coffee": 5,
    "tea": 0,
    "water": 3
}, {
    "person": "Brenda",
    "coffee": 1,
    "tea": 3,
    "water": 1
}, {
    "person": "Lesego",
    "coffee": 0,
    "tea": 4,
    "water": 2
}];

var Tuesday = [{
    "person": "Lesego",
    "tea": 3,
    "water": 1,
    "coffee": 1
}, {
    "person": "Mdu",
    "tea": 0,
    "water": 5,
    "coffee": 7
}, {
    "person": "Brenda",
    "tea": 4,
    "water": 0,
    "coffee": 2
}];

var Wednesday = [{
    "person": "Brenda",
    "water": 4,
    "coffee": 3,
    "tea": 2
}, {
    "person": "Lesego",
    "water": 4,
    "coffee": 0,
    "tea": 3
}, {
    "person": "Mdu",
    "water": 9,
    "coffee": 8,
    "tea": 2
}];

describe("test how much", function() {
    it("returns how much they drank on monday", function() {
        var result = index.monday_coffee(Monday);
        assert.equal(result, 6);
    });

    it("returns how much they drank tea on tuesday", function() {
        var result = index.tuesday_tea(Tuesday);
        assert.equal(result, 7);
    })

    it("returns how much they drank water on Wednesday", function(){
    	var result = index.wednesday_water(Wednesday);
    	assert.equal(result, 17);
    });
});

describe("who drank", function(){
	it("returns who had the least coffee on monday", function(){
		var result = index.least_monday(Monday);
		assert.equal(result, "Lesego");
	})

	it("returns who had the most tea on tuesday", function(){
		var result = index.most_tuesday(Tuesday);
		assert.equal(result, "Brenda");
	})

	it("returns who had the least water on wednesday", function(){
		var result = index.least_wednesday(Wednesday);
		assert.equal(result, "Brenda")
	})
})