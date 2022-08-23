"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Phonebook {
    constructor() {
        this.contacts = [];
    }
    size() {
        //gets the amount of contacts
        return this.contacts.length;
    }
    add(contact) {
        //add contact and returns its new id
        return 0;
    }
    addPhone(id, phone) {
        //add new phone to existing contact
    }
    getByID(id) {
        //gets contact by id
        return;
    }
    getByName(name) {
        //get contacts by name
        return;
    }
    remove(id) {
        //remove contact by id and returns it
        return;
    }
}
const phoneBook = new Phonebook();
console.log(phoneBook.size());
