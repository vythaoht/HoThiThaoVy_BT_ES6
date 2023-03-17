import { Customer } from "../Models/Customer.js";
import { Employee } from "../Models/Employee.js";
import { Listperson } from "../Models/Listperson.js";
import { Student } from "../Models/Student.js";

const listPerson = new Listperson();

//Student scope
function addStudent() {
  let name = getElement("#name1").value;
  let address = getElement("#address1").value;
  let numberId = getElement("#numberId1").value;
  let email = getElement("#email1").value;
  let math = getElement("#mathScore").value;
  let physics = getElement("#physicsScore").value;
  let chemistry = getElement("#chemistryScore").value;

  if (!validateStudent()) {
    return;
  }

  const student = new Student(
    name,
    address,
    numberId,
    email,
    math,
    physics,
    chemistry
  );

  listPerson.pushStudentList(student);
  renderStudent(listPerson.studentList);
  resetFormStudent();
}
function resetFormStudent() {
  getElement("#name1").value = "";
  getElement("#address1").value = "";
  getElement("#numberId1").value = "";
  getElement("#email1").value = "";
  getElement("#mathScore").value = "";
  getElement("#physicsScore").value = "";
  getElement("#chemistryScore").value = "";
}

let tableStudent = `
    <table id="tblStudents" class="table display table-bordered table-hover dataTable dtr-inline">
        <thead>
            <tr>
                <th>Họ Tên</th>
                <th>Địa chỉ</th>
                <th>Mã số</th>
                <th>Email</th>
                <th>Toán</th>
                <th>Lý</th>
                <th>Hoá</th>
                <th>Điểm trung bình</th>
                <th>Khác</th>
            </tr>
        </thead>
        <tbody id="tblListStudents">
      
        </tbody>
    </table>
`;

function renderStudent(ds) {
  getElement("#table").innerHTML = tableStudent;
  let html = ds.reduce((result, value) => {
    return (
      result +
      `
      <tr>
      <td>${value.name}</td>
      <td>${value.address}</td>
      <td>${value.numberId}</td>
      <td>${value.email}</td>
      <td>${value.math}</td>
      <td>${value.physics}</td>
      <td>${value.chemistry}</td>
      <td>${value.calcScore()}</td>

      <td>
        <button class="btn btn-danger" data-id="${
          value.numberId
        }" data-type="1">Xoa</button>
        <button class="btn btn-primary" data-id="${
          value.numberId
        }" data-update-type="1">Cap nhat</button>
      </td>
    </tr>
        `
    );
  }, "");

  getElement("#tblListStudents").innerHTML = html;
}
getElement("#btnAddStudent").onclick = addStudent;

function validateStudent() {
  let isCheck = true;

  //Name khong duoc de trong
  let name = getElement("#name1").value;
  if (!name.trim()) {
    isCheck = false;
    getElement("#tbName1").innerHTML = "Tên không được để trống";
    getElement("#tbName1").style.display = "block";
  } else {
    getElement("#tbName1").innerHTML = "";
    getElement("#tbName1").style.display = "none";
  }

  //address
  let address = getElement("#address1").value;
  if (!address.trim()) {
    isCheck = false;
    getElement("#tbAddress1").innerHTML = "Địa chỉ không được để trống";
    getElement("#tbAddress1").style.display = "block";
  } else {
    getElement("#tbAddress1").innerHTML = "";
    getElement("#tbAddress1").style.display = "none";
  }

  //numberId
  let numberId = getElement("#numberId1").value;
  const regexNumberId = /^\d+$/;
  if (!numberId.trim() || !regexNumberId.test(numberId)) {
    isCheck = false;
    getElement("#tbNumberId1").innerHTML = "ID phải là số và không được trống";
    getElement("#tbNumberId1").style.display = "block";
  } else {
    getElement("#tbNumberId1").innerHTML = "";
    getElement("#tbNumberId1").style.display = "none";
  }

  //email
  let email = getElement("#email1").value;
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email.trim() || !regexEmail.test(email)) {
    isCheck = false;
    getElement("#tbEmail1").innerHTML =
      "Email phải đúng định dạng và không được để trống";
    getElement("#tbEmail1").style.display = "block";
  } else {
    getElement("#tbEmail1").innerHTML = "";
    getElement("#tbEmail1").style.display = "none";
  }

  //math
  let mathScore = getElement("#mathScore").value;
  const regexMathScore = /^\d+$/;
  if (!mathScore.trim() || !regexMathScore.test(mathScore)) {
    isCheck = false;
    getElement("#tbMathScore").innerHTML =
      "Điểm phải là số  và không được trống";
    getElement("#tbMathScore").style.display = "block";
  } else {
    getElement("#tbMathScore").innerHTML = "";
    getElement("#tbMathScore").style.display = "none";
  }

  let physicsScore = getElement("#physicsScore").value;
  const regexPhysicsScore = /^\d+$/;
  if (!physicsScore.trim() || !regexPhysicsScore.test(physicsScore)) {
    isCheck = false;
    getElement("#tbPhysicsScore").innerHTML =
      "Điểm phải là số  và không được trống";
    getElement("#tbPhysicsScore").style.display = "block";
  } else {
    getElement("#tbPhysicsScore").innerHTML = "";
    getElement("#tbPhysicsScore").style.display = "none";
  }

  let chemistryScore = getElement("#chemistryScore").value;
  const regexChemistryScore = /^\d+$/;
  if (!chemistryScore.trim() || !regexChemistryScore.test(chemistryScore)) {
    isCheck = false;
    getElement("#tbChemistryScore").innerHTML =
      "Điểm phải là số  và không được trống";
    getElement("#tbChemistryScore").style.display = "block";
  } else {
    getElement("#tbChemistryScore").innerHTML = "";
    getElement("#tbChemistryScore").style.display = "none";
  }

  return isCheck;
}

//Employee scope
function addEmployee() {
  let name = getElement("#name2").value;
  let address = getElement("#address2").value;
  let numberId = getElement("#numberId2").value;
  let email = getElement("#email2").value;
  let workingDate = getElement("#workingDate").value;
  let salary = getElement("#salary").value;

  if (!validateEmployee()) {
    return;
  }

  const employee = new Employee(
    name,
    address,
    numberId,
    email,
    workingDate,
    salary
  );

  listPerson.pushEmployeeList(employee);
  renderEmployee(listPerson.employeeList);
  resetFormEmployee();
}
function resetFormEmployee() {
  getElement("#name2").value = "";
  getElement("#address2").value = "";
  getElement("#numberId2").value = "";
  getElement("#email2").value = "";
  getElement("#workingDate").value = "";
  getElement("#salary").value = "";
}
getElement("#addEmployee").onclick = addEmployee;

let tableEmployee = `
    <table id="tblEmployees" class="table display table-bordered table-hover dataTable dtr-inline">
        <thead>
            <tr>
                <th>Họ Tên</th>
                <th>Địa chỉ</th>
                <th>Mã số</th>
                <th>Email</th>
                <th>Số ngày làm việc</th>
                <th>Lương theo ngày</th>
                <th>Tổng lương</th>
                <th>Khác</th>
            </tr>
        </thead>
        <tbody id="tblListEmployees">
      
        </tbody>
    </table>
`;
function renderEmployee(ds) {
  getElement("#table").innerHTML = tableEmployee;
  let html = ds.reduce((result, value) => {
    return (
      result +
      `
        <tr>
            <td>${value.name}</td>
            <td>${value.address}</td>
            <td>${value.numberId}</td>
            <td>${value.email}</td>
            <td>${value.workingDate}</td>
            <td>${value.salary}</td>
            <td>${value.calcSalary()}</td>
            <td>
            <button class="btn btn-danger"
            data-id="${value.numberId}" data-type="2"
            >Xoa</button>
            <button class="btn btn-primary" data-id="${
              value.numberId
            }" data-update-type="2">Cap nhat</button>
          </td>
        </tr>
        `
    );
  }, "");

  getElement("#tblListEmployees").innerHTML = html;
}

function validateEmployee() {
  let isCheck = true;

  //Name khong duoc de trong
  let name = getElement("#name2").value;
  if (!name.trim()) {
    isCheck = false;
    getElement("#tbName2").innerHTML = "Tên không được để trống";
    getElement("#tbName2").style.display = "block";
  } else {
    getElement("#tbName2").innerHTML = "";
    getElement("#tbName2").style.display = "none";
  }

  let address = getElement("#address2").value;
  if (!address.trim()) {
    isCheck = false;
    getElement("#tbAddress2").innerHTML = "Địa chỉ không được để trống";
    getElement("#tbAddress2").style.display = "block";
  } else {
    getElement("#tbAddress2").innerHTML = "";
    getElement("#tbAddress2").style.display = "none";
  }

  let numberId = getElement("#numberId2").value;
  const regexNumberId = /^\d+$/;
  if (!numberId.trim() || !regexNumberId.test(numberId)) {
    isCheck = false;
    getElement("#tbNumberId2").innerHTML = "ID phải là số và không được trống";
    getElement("#tbNumberId2").style.display = "block";
  } else {
    getElement("#tbNumberId2").innerHTML = "";
    getElement("#tbNumberId2").style.display = "none";
  }

  let email = getElement("#email2").value;

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email.trim() || !regexEmail.test(email)) {
    isCheck = false;
    getElement("#tbEmail2").innerHTML =
      "Email phải đúng định dạng và không được để trống";
    getElement("#tbEmail2").style.display = "block";
  } else {
    getElement("#tbEmail2").innerHTML = "";
    getElement("#tbEmail2").style.display = "none";
  }

  let workingDate = getElement("#workingDate").value;
  const regexWorkingDate = /^\d+$/;
  if (!workingDate.trim() || !regexWorkingDate.test(workingDate)) {
    isCheck = false;
    getElement("#tbWorkingDate").innerHTML =
      "Ngày làm phải là số  và không được trống";
    getElement("#tbWorkingDate").style.display = "block";
  } else {
    getElement("#tbWorkingDate").innerHTML = "";
    getElement("#tbWorkingDate").style.display = "none";
  }

  let salary = getElement("#salary").value;
  const regexSalary = /^\d+$/;
  if (!salary.trim() || !regexSalary.test(salary)) {
    isCheck = false;
    getElement("#tbSalary").innerHTML = "Lương phải là số  và không được trống";
    getElement("#tbSalary").style.display = "block";
  } else {
    getElement("#tbSalary").innerHTML = "";
    getElement("#tbSalary").style.display = "none";
  }

  return isCheck;
}

//Customer scope
function addCustomer() {
  let name = getElement("#name3").value;
  let address = getElement("#address3").value;
  let numberId = getElement("#numberId3").value;
  let email = getElement("#email3").value;
  let companyName = getElement("#companyName").value;
  let bill = getElement("#bill").value;
  let feedback = getElement("#feedback").value;

  if (!validateCustomer()) {
    return;
  }

  const customer = new Customer(
    name,
    address,
    numberId,
    email,
    companyName,
    bill,
    feedback
  );
  listPerson.pushCustomerList(customer);
  renderCustomer(listPerson.customerList);
  resetFormCustomer();
}
function resetFormCustomer() {
  getElement("#name3").value = "";
  getElement("#address3").value = "";
  getElement("#numberId3").value = "";
  getElement("#email3").value = "";
  getElement("#companyName").value = "";
  getElement("#bill").value = "";
  getElement("#feedback").value = "";
}
getElement("#addCustomer").onclick = addCustomer;

let tableCustomer = `
    <table id="tblCustomers" class="table display table-bordered table-hover dataTable dtr-inline">
        <thead>
            <tr>
                <th>Họ Tên</th>
                <th>Địa chỉ</th>
                <th>Mã số</th>
                <th>Email</th>
                <th>Tên công ty</th>
                <th>Tổng bill</th>
                <th>Đánh giá</th>
                <th>Khác</th>
            </tr>
        </thead>
        <tbody id="tblListCustomers">
      
        </tbody>
    </table>
`;

function renderCustomer(ds) {
  getElement("#table").innerHTML = tableCustomer;
  let html = ds.reduce((result, value) => {
    return (
      result +
      `
            <tr>
                <td>${value.name}</td>
                <td>${value.address}</td>
                <td>${value.numberId}</td>
                <td>${value.email}</td>
                <td>${value.companyName}</td>
                <td>${value.bill}</td>
                <td>${value.feedback}</td>
                <td>
                <button class="btn btn-danger"
                data-id="${value.numberId}" data-type="3"
                >Xoa</button>
                <button class="btn btn-primary"  data-id="${value.numberId}" data-update-type="3">Cap nhat</button>
                </td>
            </tr>
        `
    );
  }, "");

  getElement("#tblListCustomers").innerHTML = html;
}

function validateCustomer() {
  let isCheck = true;

  //Name khong duoc de trong
  let name = getElement("#name3").value;
  if (!name.trim()) {
    isCheck = false;
    getElement("#tbName3").innerHTML = "Tên không được để trống";
    getElement("#tbName3").style.display = "block";
  } else {
    getElement("#tbName3").innerHTML = "";
    getElement("#tbName3").style.display = "none";
  }

  let address = getElement("#address3").value;
  if (!address.trim()) {
    isCheck = false;
    getElement("#tbAddress3").innerHTML = "Địa chỉ không được để trống";
    getElement("#tbAddress3").style.display = "block";
  } else {
    getElement("#tbAddress3").innerHTML = "";
    getElement("#tbAddress3").style.display = "none";
  }

  let numberId = getElement("#numberId3").value;
  const regexNumberId = /^\d+$/;
  if (!numberId.trim() || !regexNumberId.test(numberId)) {
    isCheck = false;
    getElement("#tbNumberId3").innerHTML = "ID phải là số và không được trống";
    getElement("#tbNumberId3").style.display = "block";
  } else {
    getElement("#tbNumberId3").innerHTML = "";
    getElement("#tbNumberId3").style.display = "none";
  }

  let email = getElement("#email3").value;

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email.trim() || !regexEmail.test(email)) {
    isCheck = false;
    getElement("#tbEmail3").innerHTML =
      "Email phải đúng định dạng và không được để trống";
    getElement("#tbEmail3").style.display = "block";
  } else {
    getElement("#tbEmail3").innerHTML = "";
    getElement("#tbEmail3").style.display = "none";
  }

  let companyName = getElement("#companyName").value;
  if (!companyName.trim()) {
    isCheck = false;
    getElement("#tbCompanyName").innerHTML = "Địa chỉ không được để trống";
    getElement("#tbCompanyName").style.display = "block";
  } else {
    getElement("#tbCompanyName").innerHTML = "";
    getElement("#tbCompanyName").style.display = "none";
  }

  let bill = getElement("#bill").value;
  const regexBill = /^\d+$/;
  if (!bill.trim() || !regexBill.test(bill)) {
    isCheck = false;
    getElement("#tbBill").innerHTML = "Hoá đơn phải là số  và không được trống";
    getElement("#tbBill").style.display = "block";
  } else {
    getElement("#tbBill").innerHTML = "";
    getElement("#tbBill").style.display = "none";
  }

  let feedback = getElement("#feedback").value;
  if (!feedback.trim()) {
    isCheck = false;
    getElement("#tbFeedback").innerHTML = "Đánh giá không được để trống";
    getElement("#tbFeedback").style.display = "block";
  } else {
    getElement("#tbFeedback").innerHTML = "";
    getElement("#tbFeedback").style.display = "none";
  }

  return isCheck;
}

//Helpers
getElement("#selectType").onchange = function (e) {
  if (e.target.value === "1") {
    renderStudent(listPerson.studentList);
  } else if (e.target.value === "2") {
    renderEmployee(listPerson.employeeList);
  } else if (e.target.value === "3") {
    renderCustomer(listPerson.customerList);
  }
};

getElement("#table").onclick = function (e) {
  //xoa theo ID
  if (e.target.hasAttribute("data-id") && e.target.hasAttribute("data-type")) {
    // lay duoc numberId va type
    listPerson.deleteUser(
      e.target.getAttribute("data-id"),
      e.target.getAttribute("data-type")
    );

    if (e.target.getAttribute("data-type") === "1") {
      renderStudent(listPerson.studentList);
    } else if (e.target.getAttribute("data-type") === "2") {
      renderEmployee(listPerson.employeeList);
    } else if (e.target.getAttribute("data-type") === "3") {
      renderCustomer(listPerson.customerList);
    }
  }

  //show modal cap nhat theo type
  if (
    e.target.hasAttribute("data-id") &&
    e.target.hasAttribute("data-update-type")
  ) {
    if (e.target.getAttribute("data-update-type") === "1") {
      getElement("#studentModal").classList.add("modal__open");
      renderDataOnModalToUpdate(e.target.getAttribute("data-id"), "1");
    } else if (e.target.getAttribute("data-update-type") === "2") {
      getElement("#employeeModal").classList.add("modal__open");
      renderDataOnModalToUpdate(e.target.getAttribute("data-id"), "2");
    } else if (e.target.getAttribute("data-update-type") === "3") {
      renderDataOnModalToUpdate(e.target.getAttribute("data-id"), "3");
      getElement("#customerModal").classList.add("modal__open");
    }
  }
};

//Hàm lấy thông tin input để show lên modal
function renderDataOnModalToUpdate(id, type) {
  if (type === "1") {
    // Tim student trong mang students thong qua ID
    let student = listPerson.readStudentList().find((item) => {
      return item.numberId === id;
    });

    getElement("#name1").value = student.name;
    getElement("#address1").value = student.address;
    getElement("#numberId1").value = student.numberId;
    getElement("#email1").value = student.email;
    getElement("#mathScore").value = +student.math;
    getElement("#physicsScore").value = +student.physics;
    getElement("#chemistryScore").value = +student.chemistry;
    getElement("#btnAddStudent").disabled = true;
    getElement("#numberId1").disabled = true;
  } else if (type === "2") {
    let employee = listPerson.readEmployeeList().find((item) => {
      return item.numberId === id;
    });

    getElement("#name2").value = employee.name;
    getElement("#address2").value = employee.address;
    getElement("#numberId2").value = employee.numberId;
    getElement("#email2").value = employee.email;
    getElement("#workingDate").value = employee.workingDate;
    getElement("#salary").value = employee.salary;
  } else if (type === "3") {
    let customer = listPerson.readCustomerList().find((item) => {
      return item.numberId === id;
    });

    getElement("#name3").value = customer.name;
    getElement("#address3").value = customer.address;
    getElement("#numberId3").value = customer.numberId;
    getElement("#email3").value = customer.email;
    getElement("#companyName").value = customer.companyName;
    getElement("#bill").value = customer.bill;
    getElement("#feedback").value = customer.feedback;
  }
}

//render lại giao diện sau khi thực hiện update
getElement("#btnUpdateStudent").onclick = function () {
  let name = getElement("#name1").value;
  let address = getElement("#address1").value;
  let numberId = getElement("#numberId1").value;
  let email = getElement("#email1").value;
  let math = getElement("#mathScore").value;
  let physics = getElement("#physicsScore").value;
  let chemistry = getElement("#chemistryScore").value;

  if (!validateStudent()) {
    return;
  }

  let student = new Student(
    name,
    address,
    numberId,
    email,
    math,
    physics,
    chemistry
  );

  let index = listPerson.studentList.findIndex((value) => {
    return value.numberId === numberId;
  });
  listPerson.studentList[index] = student;
  renderStudent(listPerson.studentList);
  resetFormStudent();
  getElement("#btnAddStudent").disabled = false;
  getElement("#numberId1").disabled = false;
};

getElement("#btnUpdateEmployee").onclick = function () {
  let name = getElement("#name2").value;
  let address = getElement("#address2").value;
  let numberId = getElement("#numberId2").value;
  let email = getElement("#email2").value;
  let workingDate = getElement("#workingDate").value;
  let salary = getElement("#salary").value;

  if (!validateEmployee()) {
    return;
  }

  let employee = new Employee(
    name,
    address,
    numberId,
    email,
    workingDate,
    salary
  );

  let index = listPerson.employeeList.findIndex((value) => {
    return value.numberId === numberId;
  });
  listPerson.employeeList[index] = employee;
  renderEmployee(listPerson.employeeList);
  resetFormEmployee();
};

getElement("#btnUpdateCustomer").onclick = function () {
  let name = getElement("#name3").value;
  let address = getElement("#address3").value;
  let numberId = getElement("#numberId3").value;
  let email = getElement("#email3").value;
  let companyName = getElement("#companyName").value;
  let bill = getElement("#bill").value;
  let feedback = getElement("#feedback").value;

  if (!validateCustomer()) {
    return;
  }

  let customer = new Customer(
    name,
    address,
    numberId,
    email,
    companyName,
    bill,
    feedback
  );

  let index = listPerson.customerList.findIndex((value) => {
    return value.numberId === numberId;
  });
  listPerson.customerList[index] = customer;
  renderCustomer(listPerson.customerList);
  resetFormCustomer();
  getElement("#numberId3").disabled = false;
};
