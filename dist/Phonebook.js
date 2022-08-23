"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhonebook = void 0;
class Phonebook {
    constructor() {
        this.contacts = [];
        this.index = 0;
    }
    size() {
        //gets the amount of contacts
        return this.contacts.length;
    }
    add(contact) {
        //add contact and returns its new id
        this.contacts.push(contact);
        return contact.id;
    }
    addPhone(id, phone) {
        //add new phone to existing contact
        for (const contact of this.contacts) {
            if (contact.id == id) {
                contact.phones.push(phone);
            }
        }
    }
    get(input) {
        if (typeof (input) == "number") {
            for (const contact of this.contacts) {
                if (contact.id == input) {
                    return contact;
                }
            }
        }
        else {
            const contactsByName = [];
            for (const contact of this.contacts) {
                if (contact.name == input) {
                    contactsByName.push(contact);
                }
            }
            return contactsByName;
        }
    }
    remove(id) {
        //remove contact by id and returns it
        let temp;
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id == id) {
                temp = this.contacts[i];
                this.contacts[i] = this.contacts[this.contacts.length - 1];
                this.contacts[this.contacts.length - 1] = temp;
                break;
            }
        }
        if (temp) {
            const removedContact = this.contacts.pop();
            return removedContact;
        }
        else {
            return;
        }
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        if (this.index === this.contacts.length) {
            return {
                done: true
            };
        }
        else {
            return {
                done: false,
                value: this.contacts[this.index++]
            };
        }
    }
}
function createPhonebook() {
    return new Phonebook();
}
exports.createPhonebook = createPhonebook;
