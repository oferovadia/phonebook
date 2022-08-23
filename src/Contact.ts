class Contact{
    id: number
    name: string
    address: string
    phones: Number[] = []

    constructor(id: number, name: string, address: string, phones: Number[] = []){
        this.id = id
        this.name = name
        this.address = address
        this.phones = phones
    }
}


const con = new Contact(1, "hi", "o", [12324234234])
console.log(con);
