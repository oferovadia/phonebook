import { createPhonebook } from "./Phonebook"
import { Contact } from "./Contact"

const yellowPages = createPhonebook()

//Add manually 11 contacts, few with same name
yellowPages.add(new Contact(1, "Yoni", "Hertzel 56, Bat Yam", ["052-941-5872"]))
yellowPages.add(new Contact(2, "Aviv", "Halper 33, Bat Yam", ["052-994-8272"]))
yellowPages.add(new Contact(3, "Shlomi", "Balfur 1, Rishon Lezion", ["053-481-5872"]))
yellowPages.add(new Contact(4, "Noa", "Shalem 89, Ramat Gan", ["059-512-3872"]))
yellowPages.add(new Contact(5, "Roi", "Ben Gurion 4, Bat Yam", ["053-54-9235"]))
yellowPages.add(new Contact(6, "Shir", "Hashalom 78, Afula", ["053-549-2365"]))
yellowPages.add(new Contact(7, "Noa", "Hertzel 2, Bat Yam", ["053-549-2635"]))
yellowPages.add(new Contact(8, "Daniel", "Yoseftal 44, Bat Yam", ["053-549-2435"]))
yellowPages.add(new Contact(9, "Noa", "Daniel 2, Rehovot", ["053-577-2375"]))
yellowPages.add(new Contact(10, "Aviv", "Shlomo Hamelech 5, Bat Yam", ["053-549-7775"]))
yellowPages.add(new Contact(11, "David", "Hashikma 70, Ramant Gan", ["054-542-2875"]))


//add 2 new contacts: 1 with existing name, 1 with new name
//check the size is updated
yellowPages.add(new Contact(2, "Sason", "Hagola 2, Ramant Gan", ["053-987-4625"]))
yellowPages.add(new Contact(3, "Shlomi", "Hadekel 99, Bnei Barak", ["054-876-1305"]))
console.log(`Size: ${yellowPages.size()}`)


//add phone to existing contact
yellowPages.addPhone(5, "054-987-3157")


//get contacts by name and add to them the same phone
const contactsByName = yellowPages.get("Noa")
contactsByName?.forEach(contact => {
    yellowPages.addPhone(contact.id, "052-123-1234")
});


//remove the last contact (of the previous contacts from #8) by id
//check the size is updated
if(contactsByName){
    const contactToRemove = contactsByName[contactsByName.length-1]
    yellowPages.remove(contactToRemove.id)
}
console.log(`Size: ${yellowPages.size()}`)


