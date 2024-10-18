class changePassword {
    private _password: string; 
    private _oldPassword: string;
    private _newPassword: string;

    constructor(password: string, oldPassword: string, newPassword: string) {
        this._password = password;
        this._oldPassword = oldPassword;
        this._newPassword = newPassword;
    }

    //GETTERS

    get password(): string {
        return this._password
    }

    get oldPassword(): string {
        return this._oldPassword;
    }

    get newPassword(): string {
        return this._newPassword;
    }

    //SETTERS 
    set password(password: string) {
        this._password = password;
    }

    set oldPassword(newPassword: string) {
        this._newPassword = newPassword;
    }

    set newPassword(newPassword: string) {
        this._newPassword = newPassword;
    }
}