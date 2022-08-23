"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = require("./Contact");
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
        const removedContact = this.contacts.pop();
        return removedContact;
    }
}
const phoneBook = new Phonebook();
// console.log(phoneBook.size());
phoneBook.add(new Contact_1.Contact(1, "Ofer", "Hertzel", ["052222"]));
phoneBook.add(new Contact_1.Contact(2, "Niv", "Hertzesdfl", ["0523434222"]));
phoneBook.add(new Contact_1.Contact(3, "Noam", "Hertzefdfl", ["052222345435"]));
phoneBook.add(new Contact_1.Contact(4, "Noam", "Hsdfsdfsdfffl", ["0533335"]));
phoneBook.add(new Contact_1.Contact(5, "Noam", "sdfsdfsdf", ["0523345435"]));
// console.log(phoneBook.size());
// console.log(phoneBook);
// console.log(phoneBook);
// console.log("ID: ", phoneBook.get(3));
// console.log("NAME: ", phoneBook.get("Ofer"));
// console.log("NAME: ", phoneBook.get("Noam"));
console.log(phoneBook.remove(4));
console.log(phoneBook);
