import { Person } from "./Person.js";

export class Customer extends Person {
  constructor(name, address, numberId, email, companyName, bill, feedback) {
    super(name, address, numberId, email);
    this.companyName = companyName;
    this.bill = bill;
    this.feedback = feedback;
  }
}
