import { Person } from "./Person.js";

export class Student extends Person {
  constructor(name, address, numberId, email, math, physics, chemistry) {
    super(name, address, numberId, email);
    this.math = +math;
    this.physics = +physics;
    this.chemistry = +chemistry;
  }

  calcScore() {
    return (this.math + this.physics + this.chemistry) / 3;
  }
}
