interface IPhonebook {
    size(): number
    add(contact: Contact): number
    addPhone(id: number, phone: string): void
    getByID(id: number): Contact | undefined
    getByName(name: string): Contact[] | undefined
    remove(id: number): Contact | undefined
}