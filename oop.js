var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salaryPerDay = salary;
    }
    Employee.prototype.bonus = function (overtimeDays) {
        return overtimeDays * this.salaryPerDay * 0.5;
    };
    Employee.prototype.additionalBonus = function () {
        return this.salaryPerDay * 0.5;
    };
    Employee.team = {
        dev: 0,
        hr: 0,
        acc: 0
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary) {
        var _this = _super.call(this, name, salary) || this;
        Employee.team.dev++;
        return _this;
    }
    Developer.prototype.bonus = function (overtimeDays) {
        var standardBonus = overtimeDays * this.salaryPerDay * 3;
        var extraBonus = this.additionalBonus();
        return standardBonus + extraBonus;
    };
    return Developer;
}(Employee));
var HR = /** @class */ (function (_super) {
    __extends(HR, _super);
    function HR(name, salary) {
        var _this = _super.call(this, name, salary) || this;
        Employee.team.hr++;
        return _this;
    }
    return HR;
}(Employee));
var dev1 = new Developer("Bob", 100);
var hr1 = new HR("John", 10);
var dev1Bonus = dev1.bonus(2);
var hr1Bonus = hr1.bonus(8);
console.log(dev1Bonus);
console.log(hr1Bonus);
console.log(Employee.team);
console.log("name" in dev1);
console.log(dev1.hasOwnProperty("name"));
var nb = 5;
var st = '5';
console.log(5 == '5');
