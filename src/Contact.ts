export class Contact{
    id: number
    name: string
    address: string
    phones: string[] = []

    constructor(id: number, name: string, address: string, phones: string[] = []){
        this.id = id
        this.name = name
        this.address = address
        this.phones = phones
    }
}