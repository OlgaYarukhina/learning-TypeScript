class Employee {
    public name: string;
    protected salaryPerDay: number;

    static team: {dev: number, hr: number, acc: number} = {
        dev: 0,
        hr: 0,
        acc: 0
    }

    constructor(name: string, salary: number){
        this.name = name;
        this.salaryPerDay = salary;
    }

    public bonus (overtimeDays: number): number{
        return overtimeDays * this.salaryPerDay * 0.5
    }

    protected additionalBonus(): number{
        return this.salaryPerDay * 0.5
    }
}

class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary); 
        Employee.team.dev++;
    }
   
    public bonus(overtimeDays: number): number{
        let standardBonus = overtimeDays * this.salaryPerDay * 3;
        let extraBonus = this.additionalBonus(); 
        return standardBonus + extraBonus;
    }
}

class HR extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary); 
        Employee.team.hr++;
    }
}

let dev1: Employee = new Developer("Bob", 100);
let hr1: Employee = new HR("John", 10);

let dev1Bonus: number = dev1.bonus(2); 
let hr1Bonus: number = hr1.bonus(8); 

console.log(dev1Bonus);
console.log(hr1Bonus);
console.log(Employee.team);

console.log("name" in dev1);
console.log(dev1.hasOwnProperty("name"));