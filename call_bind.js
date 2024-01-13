;
;
var obj1 = {
    name: "Object 1",
    getName: function () {
        return this.name;
    }
};
var obj2 = {
    name: "Object 2",
};
var obj3 = {
    name: "Object 2",
};
// 1. Regular Function & bind
var getName1 = obj1.getName();
var getName2 = obj1.getName.bind(obj2)();
console.log("Object with id = 1, has name: ".concat(getName1));
console.log("Object with id = 2, has name: ".concat(getName2));
// 2. Regular Function & call
var getName = obj1.getName.call(obj2);
console.log("Object with id = 2, has name: ".concat(getName));
// 3. Arrow Function
var obj4 = {
    name: "Object 4",
    getName: function () {
        var _this = this;
        var sayYourName = function () {
            return "Hey! My name is ".concat(_this.name);
        };
        return sayYourName();
    }
};
var getName4 = obj4.getName();
console.log("Object with id = 4, has name: ".concat(getName4));
var obj5 = {
    name: "Object 5",
};
var getName5 = obj4.getName.bind(obj5)();
console.log("Object with id = 5, has name: ".concat(getName5));
var getName52 = obj4.getName.call(obj5);
console.log("Object with id = 5, has name: ".concat(getName52));
