//the first three functions are about how much fluids they drank for three days
exports.monday_coffee = function(drinks) {
    var fluid = [];
    var total = 0;

    for (var type in drinks) {
        if (drinks[type].hasOwnProperty("coffee")) {
            fluid.push({
                price: drinks[type].coffee
            });
            total += drinks[type].coffee;
        }
    }
    return total
}

exports.tuesday_tea = function(drinks) {
    var fluid = [];
    var total = 0;

    for (var type in drinks) {
        if (drinks[type].hasOwnProperty("tea")) {
            fluid.push({
                price: drinks[type].tea
            });
            total += drinks[type].tea;
        }
    }
    return total
}

exports.wednesday_water = function(drinks) {
    var fluid = [];
    var total = 0;

    for (var type in drinks) {
        if (drinks[type].hasOwnProperty("water")) {
            fluid.push({
                price: drinks[type].water
            });
            total += drinks[type].water;
        }
    }
    return total
}


// who had functions
exports.least_monday = function(drinks) {
    function data(day, bev, max) {
        var min = max;
        var most = {}

        day.forEach(function(person) {
            if (person[bev] < min) {
                min = person[bev];
                most = {
                    name: person.person,
                    num: min
                };
            }
        })
        console.log(most.name)
        return most.name
    }

    return data(drinks, "coffee", 5)
}

exports.most_tuesday = function(drinks) {
    function data(day, bev) {
        var max = 0;
        var most = {}

        day.forEach(function(person) {
            if (person[bev] > max) {
                max = person[bev];
                most = {
                    name: person.person,
                    num: max
                };
            }
        });
        console.log(most.name)
        return most.name
    }
    return data(drinks, "tea")
}

exports.least_wednesday = function(drinks) {
    function data(day, bev, max) {
        var min = max;
        var most = {}

        day.forEach(function(person) {
            if (person[bev] < min) {
                min = person[bev];
                most = {
                    name: person.person,
                    num: min
                };
            }
        })
        console.log(most.name)
        return most.name
    }

    return data(drinks, "water", 9)
}