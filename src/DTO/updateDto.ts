class User {
    private _document: string;
    private _name: string;
    private _last_name: string;
    private _address: string;
    private _email: string; 
    private _password: string;
    private _phone: number;

    constructor(document: string, name: string, last_name: string, address: string, email: string, password: string, phone: number){
        this._document = document;
        this._name = name;
        this._last_name = last_name;
        this._address = address;
        this._email = email;
        this._password = password;
        this._phone = phone;
    }

    //GETTERS

    public get document (): string {
        return this._document;
    }

    public get name (): string {
        return this._name;
    }

    public get last_name (): string {
        return this._last_name;
    }

    public get address (): string {
        return this._address;
    }

    public get email (): string {
        return this._email;
    }

    public get password (): string {
        return this._password;
    }

    public get phone (): number {
        return this._phone;
    }

    //SETTERS

    public set document(document: string) {
        this._document = document;
    }

    public set name(name: string) {
        this._name = name;
    }

    public set last_name(last_name: string) {
        this._last_name = last_name;
    }

    public set address(address: string) {
        this._address = address;
    }

    public set email(email: string) {
        this._email = email;
    }

    public set password(password: string) {
        this._password = password;
    }

    public set phone(phone: number) {
        this._phone = phone;
    }
}