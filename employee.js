

class Employee {
    constructor(name, salary, title, manager = null){
        this.name = name
        this.salary = salary
        this.title = title
        this.manager = manager
        manager !== null ? manager.addEmployee(this) : false
    }

    // static hasManager(employee){
    //     console.log(this.manager);

    //     if(this.manager){
    //         const Manager = require(`./manager`)

    //     };
    // }
}

 //const Manager = require(`./manager`)
//const splinter = new Manager('Splinter', 100000, 'Sensei');
//const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
//console.log(Employee.hasManager(donnie))


try {
    module.exports = Employee
} catch {
    module.exports = null
}
//module.exports = Employee
