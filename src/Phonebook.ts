import { IPhonebook } from "./IPhonebook";
import { Contact } from "./Contact";

class Phonebook implements IPhonebook {

    contacts: Contact[] = []

    constructor() { }


    size(): number {
        //gets the amount of contacts
        return this.contacts.length
    }

    add(contact: Contact): number {
        //add contact and returns its new id
        this.contacts.push(contact)
        return contact.id
    }

    addPhone(id: number, phone: string): void {
        //add new phone to existing contact
        for (const contact of this.contacts) {
            if (contact.id == id) {
                contact.phones.push(phone)
            }
        }
    }

    get(id: number): Contact | undefined        //get contact by id
    get(name: string): Contact[] | undefined    //get contacts by name

    get(input: unknown): unknown {
        if (typeof (input) == "number") {
            for (const contact of this.contacts) {
                if (contact.id == input) {
                    return contact
                }
            }
        } else {
            const contactsByName = []
            for (const contact of this.contacts) {
                if (contact.name == input) {
                    contactsByName.push(contact)
                }
            }
            return contactsByName
        }
    }

    remove(id: number): Contact | undefined {
        //remove contact by id and returns it
        let temp
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id == id) {
                temp = this.contacts[i]
                this.contacts[i] = this.contacts[this.contacts.length - 1]
                this.contacts[this.contacts.length - 1] = temp
                break
            }
        }
        const removedContact = this.contacts.pop()
        return removedContact
    }
}

export function createPhonebook(): IPhonebook{
    return new Phonebook()
}