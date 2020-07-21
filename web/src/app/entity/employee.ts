
export class Employee {
    login: string;
    password: string;
    name: string;
    cpf: string;
    email: string;
    address: string;
    id: number;

    constructor(
        login: string,
        password: string,
        name: string,
        cpf: string,
        email: string,
        address: string,
        id?: number,
    ) {
        this.login = login;
        this.password = password;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.address = address;
    }
}