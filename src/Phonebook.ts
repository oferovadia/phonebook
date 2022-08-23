import { IPhonebook } from "./IPhonebook";
import { Contact } from "./Contact";

class Phonebook implements IPhonebook {

    contacts: Contact[] = []
    index: number

    constructor() { 
        this.index = 0
    }


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
        if (temp) {
            const removedContact = this.contacts.pop()
            return removedContact
        }
        else {
            return
        }
    }
    
    [Symbol.iterator](): any {
        return this
    }

    next(){
        if(this.index === this.contacts.length){
            return{
                done: true
            }
        }
        else { 
            return{
                done: false,
                value: this.contacts[this.index++]
            }
        }
    }

}

export function createPhonebook(): IPhonebook {
    return new Phonebook()
}