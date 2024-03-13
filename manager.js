const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager)
        this.employees = employees
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }
    _totalSubSalary(bonus) {
        let sum = 0;
        this.employees.forEach((el) => {
            let salaries = el.salary
            if (el instanceof Manager) {
                let employeeSalary = el.employees.reduce((accum, el) => {
                    accum += el.salary
                    return accum
                }, 0)
                sum += (employeeSalary + salaries)
            } else sum += salaries
        })
        return sum
    }

    calculateBonus(multiplier) {
        let bonus = this.salary
        bonus += this._totalSubSalary(bonus)
        return bonus *= multiplier
    }
}

try {
    module.exports = Manager
} catch {
    module.exports = null
}

