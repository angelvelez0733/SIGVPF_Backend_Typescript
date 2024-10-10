export default class userDto {
    private _document: string;
    private _name: string;
    private _last_name:  string;
    private _address: string;
    private _email: string;
    private _password: string;
    private _phone: number;
    private _created_at?: Date;
    private _updated_at?: Date;
    
    constructor(document: string, name: string, last_name: string, address: string, email:  string, password: string, phone: number) {
        this._document = document;
        this._name = name;
        this._last_name = last_name;
        this._address = address;
        this._email = email;
        this._password = password;
        this._phone = phone;
    }
    
    public get document(): string {
        return this._document;
    }

    public set document(document: string) {
        this._document = document;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get last_name(): string {
        return this._last_name;
    }

    public set last_name(last_name: string) {
        this._last_name = last_name;
    }

    public get address(): string {
        return this._address;
    }

    public set address(address: string) {
        this._address = address;
    }

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }

    public get password(): string {
        return this._password;
    }

    public set password(password: string) {
        this._password = password;
    }

    public get phone(): number {
        return this._phone;
    }

    public set phone(phone: number) {
        this._phone = phone;
    }

    public get created_at(): Date | undefined {
        return this._created_at;
    }

    public set created_at(created_at: Date) {
        this._created_at = created_at;
    }

    public get updated_at(): Date | undefined {
        return this._updated_at;
    }

    public set updated_at(updated_at: Date) {
        this._updated_at = updated_at;
    }
}