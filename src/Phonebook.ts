import { IPhonebook } from "./IPhonebook";
import { Contact } from "./Contact";

class Phonebook implements IPhonebook {

    contacts: Contact[] = []

    constructor(){}
    

    size(): number {
        //gets the amount of contacts
        return this.contacts.length
    }

    addContact(contact: Contact): number {
        //add contact and returns its new id
        this.contacts.push(contact)
        return contact.id
    }

    addPhone(id: number, phone: string): void {
        //add new phone to existing contact
    }

    getByID(id: number): Contact | undefined {
        //gets contact by id
        return
    }

    getByName(name: string): Contact[] | undefined {
        //get contacts by name
        return
    }

    remove(id: number): Contact | undefined {
        //remove contact by id and returns it
        return
    }
}



const phoneBook = new Phonebook()

console.log(phoneBook.size());
phoneBook.addContact(new Contact(1, "Ofer", "Hertzel", ["052222"]))