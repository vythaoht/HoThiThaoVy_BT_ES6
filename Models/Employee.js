import { Person } from "./Person.js";

export class Employee extends Person {
  constructor(name, address, numberId, email, workingDate, salary) {
    super(name, address, numberId, email);
    this.workingDate = +workingDate;
    this.salary = +salary;
  }

  calcSalary() {
    return this.workingDate * this.salary;
  }
}
