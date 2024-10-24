"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(document, name, last_name, address, email, phone) {
        this._document = document;
        this._name = name;
        this._last_name = last_name;
        this._address = address;
        this._email = email;
        //this._password = password;
        this._phone = phone;
    }
    //GETTERS
    get document() {
        return this._document;
    }
    get name() {
        return this._name;
    }
    get last_name() {
        return this._last_name;
    }
    get address() {
        return this._address;
    }
    get email() {
        return this._email;
    }
    //public get password (): string | undefined {
    // return this._password;
    //}
    get phone() {
        return this._phone;
    }
    //SETTERS
    set document(document) {
        this._document = document;
    }
    set name(name) {
        this._name = name;
    }
    set last_name(last_name) {
        this._last_name = last_name;
    }
    set address(address) {
        this._address = address;
    }
    set email(email) {
        this._email = email;
    }
    //public set password(password: string) {
    //  this._password = password;
    //}
    set phone(phone) {
        this._phone = phone;
    }
}
exports.default = User;
