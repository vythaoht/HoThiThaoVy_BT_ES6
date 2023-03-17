function getElement(selector) {
  return document.querySelector(selector);
}

getElement("#btnAdd").onclick = function () {
  let selectType = getElement("#selectType").value;

  if (selectType === "1") {
    getElement("#studentModal").classList.add("modal__open");
  } else if (selectType === "2") {
    getElement("#employeeModal").classList.add("modal__open");
  } else if (selectType === "3") {
    getElement("#customerModal").classList.add("modal__open");
  }
};

getElement("#closeStudentModal").onclick = function () {
  getElement("#studentModal").classList.remove("modal__open");
};
getElement("#closeEmployeeModal").onclick = function () {
  getElement("#employeeModal").classList.remove("modal__open");
};
getElement("#closeCustomerModal").onclick = function () {
  getElement("#customerModal").classList.remove("modal__open");
};
