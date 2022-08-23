"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
class Contact {
    constructor(id, name, address, phones = []) {
        this.phones = [];
        this.id = id;
        this.name = name;
        this.address = address;
        this.phones = phones;
    }
}
exports.Contact = Contact;
