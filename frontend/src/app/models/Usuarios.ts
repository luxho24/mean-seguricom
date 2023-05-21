export class Usuario {
    _id?: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    document_type: string;
    document_number: number;
    birth_date: string;
    password: string;
    rol: string;

    constructor(firstname: string, lastname: string, email: string, phone: number, document_type: string, document_number: number, birth_date: string, password: string, rol: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.document_type = document_type;
        this.document_number = document_number;
        this.birth_date = birth_date;
        this.password = password;
        this.rol = rol;
    }
}