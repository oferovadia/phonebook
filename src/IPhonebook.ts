import { Contact } from "./Contact"

export interface IPhonebook {
    size(): number
    addContact(contact: Contact): number
    addPhone(id: number, phone: string): void
    getByID(id: number): Contact | undefined
    getByName(name: string): Contact[] | undefined
    remove(id: number): Contact | undefined
}