export class Employee {
    employee_number: number;
    name: {
        first: string,
        last: string,
        middle: string
    }
    phone?: EmployeePhone;
}

export class EmployeePhone {
    telephone: string
}