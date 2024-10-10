"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class userDto {
    constructor(document, name, last_name, address, email, password, phone) {
        this._document = document;
        this._name = name;
        this._last_name = last_name;
        this._address = address;
        this._email = email;
        this._password = password;
        this._phone = phone;
    }
    get document() {
        return this._document;
    }
    set document(document) {
        this._document = document;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get last_name() {
        return this._last_name;
    }
    set last_name(last_name) {
        this._last_name = last_name;
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
    get phone() {
        return this._phone;
    }
    set phone(phone) {
        this._phone = phone;
    }
    get created_at() {
        return this._created_at;
    }
    set created_at(created_at) {
        this._created_at = created_at;
    }
    get updated_at() {
        return this._updated_at;
    }
    set updated_at(updated_at) {
        this._updated_at = updated_at;
    }
}
exports.default = userDto;
