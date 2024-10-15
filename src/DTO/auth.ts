export default class Auth {

    private _email: string;
    private _password: string;

    constructor(email: string, password: string){
        this._email = email;
        this._password = password;
    }

    //GETTERS
    public get $email(): string{
        return this._email;
    }

    public  get $password(): string{
        return this._password;
    }

    //SETTERS
    public set $email(value: string) {
        this._email = value;
    }

    public set $password(value: string) {
        this._password = value;
    }

}