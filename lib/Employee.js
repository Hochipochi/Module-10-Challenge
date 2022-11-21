class Employee {
    
    constructor(name) {
      this.name = name;
      this.id = Math.floor(Math.random() * 100);
      this.email = name + '@company.com';
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return "Employee";
    }
  
  }


  // const employeeOne = new Employee('Andrew')
  // console.log(employeeOne)
  // const employeeName = employeeOne.getName()
  // console.log(employeeName)

  module.exports = Employee;