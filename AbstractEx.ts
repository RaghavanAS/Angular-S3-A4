//creating an abstract class
abstract class Department {
public name: string;
    constructor(name: string) {
        this.name = name;
}
//class memeber which displays the Department Name
    printName(): void {
        console.log(`Name of the Department is ${this.name}`);
    }
    // abstract method printMeeting 
abstract printMeeting(): void;
}
// class AccountingDepartment extends the abstract class Department
class AccountingDepartment extends Department{
    // child class property
    time: number;
    //child class constructor with two parameters
    constructor(name: string,time:number) {
        // referencing the super class constructor
        super(name);
        this.time = time;
    }
    //referencing and extending the super class method
    printName(): void{
        super.printName();
    }
    //giving body for the abstract method of super class
    printMeeting(): void{
        console.log(`Weekly Meeting Timings for ${this.name} Department is at ${this.time} PM`);
    }
}
// class FinanceDepartment extends the abstract class Department
class FinanceDepartment extends Department{
    //child class property
    budget: number;
    //child class constructor with two parameters
    constructor(name: string, budget: number) {
        //referencing the super class constructor
        super(name);
        this.budget = budget;
    }
    // extending the child class printName()
    printName(): void{
        super.printName();
    }
    //giving body for the abstract method of super class
    printMeeting(): void{
        console.log(`Budget of ${this.name} Department is ${this.budget} `);
    }
}
//defining object for Child class Accounting Department
let Adep = new AccountingDepartment("Accounts", 10);
Adep.printName();
Adep.printMeeting();
//defining object for child class Finance Department
let Fdep = new FinanceDepartment("Finance", 22000);
Fdep.printName();
Fdep.printMeeting();
