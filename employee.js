

class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name
        this.salary = salary
        this.title = title
        this.manager = manager
        manager !== null ? manager.addEmployee(this) : false
    }

    calculateBonus(multiplier) {
        let bonus = this.salary * multiplier
        return bonus
    }
}




try {
    module.exports = Employee
} catch {
    module.exports = null
}
//module.exports = Employee
