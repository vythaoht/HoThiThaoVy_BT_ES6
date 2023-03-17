export class Listperson {
  constructor() {
    this.studentList = [];
    this.employeeList = [];
    this.customerList = [];
  }

  //Student list scope (function)
  pushStudentList(student) {
    this.studentList.push(student);
  }

  //Employee list scope (function)
  pushEmployeeList(employee) {
    this.employeeList.push(employee);
  }

  //Customer list scope (function)
  pushCustomerList(customer) {
    this.customerList.push(customer);
  }

  //Helpers XOAAA theo IDDD
  deleteUser(id, type) {
    if (type === "1") {
      let index = this.studentList.findIndex((value) => {
        return value.numberId === id;
      });
      this.studentList.splice(index, 1);
    } else if (type === "2") {
      let index = this.employeeList.findIndex((value) => {
        return value.numberId === id;
      });
      this.employeeList.splice(index, 1);
    } else if (type === "3") {
      let index = this.customerList.findIndex((value) => {
        return value.numberId === id;
      });
      this.customerList.splice(index, 1);
    }
  }

  readStudentList() {
    return this.studentList;
  }

  readEmployeeList() {
    return this.employeeList;
  }

  readCustomerList() {
    return this.customerList;
  }
}
