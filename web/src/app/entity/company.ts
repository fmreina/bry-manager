
export class Company {
    name;
    cnpj;
    address;
    id;

    constructor(
        name: string,
        cpnj: string,
        address: string,
        id?: number,
    ) {
        this.name = name;
        this.cnpj = cpnj;
        this.address = address;
    }
}