const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email)
        this.officeNumber = Math.floor(Math.random() * 10);
        this.role = 'Manager';
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getHtml() {
        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${this.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${this.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">Office number: ${this.officeNumber}</li>
            </ul>
        </div>`
    }

}

module.exports = Manager;