import { Contact } from "./Contact"

export interface IPhonebook{
    size(): number
    add(contact: Contact): number
    addPhone(id: number, phone: string): void
    get(id: number): Contact | undefined
    get(name: string): Contact[] | undefined
    remove(id: number): Contact | undefined
    [Symbol.iterator](): any
}


// export interface IPhonebook extends Iterable<Contact|undefined> {
//     size(): number
//     add(contact: Contact): number
//     addPhone(id: number, phone: string): void
//     get(id: number): Contact | undefined
//     get(name: string): Contact[] | undefined
//     remove(id: number): Contact | undefined
// }