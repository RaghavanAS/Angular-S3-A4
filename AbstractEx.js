var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//creating an abstract class
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    //class memeber which displays the Department Name
    Department.prototype.printName = function () {
        console.log("Name of the Department is " + this.name);
    };
    return Department;
}());
// class AccountingDepartment extends the abstract class Department
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    //child class constructor with two parameters
    function AccountingDepartment(name, time) {
        var _this = 
        // referencing the super class constructor
        _super.call(this, name) || this;
        _this.time = time;
        return _this;
    }
    //referencing and extending the super class method
    AccountingDepartment.prototype.printName = function () {
        _super.prototype.printName.call(this);
    };
    //giving body for the abstract method of super class
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("Weekly Meeting Timings for " + this.name + " Department is at " + this.time + " PM");
    };
    return AccountingDepartment;
}(Department));
// class FinanceDepartment extends the abstract class Department
var FinanceDepartment = /** @class */ (function (_super) {
    __extends(FinanceDepartment, _super);
    //child class constructor with two parameters
    function FinanceDepartment(name, budget) {
        var _this = 
        //referencing the super class constructor
        _super.call(this, name) || this;
        _this.budget = budget;
        return _this;
    }
    // extending the child class printName()
    FinanceDepartment.prototype.printName = function () {
        _super.prototype.printName.call(this);
    };
    //giving body for the abstract method of super class
    FinanceDepartment.prototype.printMeeting = function () {
        console.log("Budget of " + this.name + " Department is " + this.budget + " ");
    };
    return FinanceDepartment;
}(Department));
//defining object for Child class Accounting Department
var Adep = new AccountingDepartment("Accounts", 10);
Adep.printName();
Adep.printMeeting();
//defining object for child class Finance Department
var Fdep = new FinanceDepartment("Finance", 22000);
Fdep.printName();
Fdep.printMeeting();
//# sourceMappingURL=AbstractEx.js.map