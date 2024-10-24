"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }
    //GETTERS
    get $email() {
        return this._email;
    }
    get $password() {
        return this._password;
    }
    //SETTERS
    set $email(value) {
        this._email = value;
    }
    set $password(value) {
        this._password = value;
    }
}
exports.default = Auth;
