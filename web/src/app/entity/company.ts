import { Employee } from './employee';

export class Company {
    name;
    cnpj;
    address;
    employees: Employee[];
    id;

    constructor(
        name: string,
        cpnj: string,
        address: string,
        employees?: Employee[],
        id?: number,
    ) {
        this.name = name;
        this.cnpj = cpnj;
        this.address = address;
        this.employees = employees;
        this.id = id;
    }
}