"use strict";
class changePassword {
    constructor(password, oldPassword, newPassword) {
        this._password = password;
        this._oldPassword = oldPassword;
        this._newPassword = newPassword;
    }
    //GETTERS
    get password() {
        return this._password;
    }
    get oldPassword() {
        return this._oldPassword;
    }
    get newPassword() {
        return this._newPassword;
    }
    //SETTERS 
    set password(password) {
        this._password = password;
    }
    set oldPassword(newPassword) {
        this._newPassword = newPassword;
    }
    set newPassword(newPassword) {
        this._newPassword = newPassword;
    }
}
