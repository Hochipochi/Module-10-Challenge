class Employee {
    
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
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