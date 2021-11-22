const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},  

	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]


function cleanUpIndex() {
    //removes all of the .contact elements
    element = document.querySelector(".main")
    element.innerHTML = " "

}

function createSingleIndex(contact) {
    // needs to print the name of the given contact
    //console.log(contact.name)
    //element.classList.add("contact")
    const type = document.querySelector(".main")

    type.innerHTML += `
    <a href="page3.html"><div class="contact"><p>${contact}</p></div></a>
    
    `
    
}

function renderIndex(contactList) {   
    
    for (i=0; i < contactList.length; i++) {

       // console.log(contactList[i]["name"])

       createSingleIndex(contactList[i]["name"])

      }
    
   
       
}


function cleanUPView() {
    // page3 is the View page, remove the .contactinfo
    element = document.querySelector(".conatctinfo")
    element.innerHTML = ""
}

function renderView(contactList) {
    
}

function cleanUpCreate() {
    //page2, remove the .form
    element = document.querySelector(".form")
    element.innerHTML = ""
    
}

function renderCreate(contact) {
    
}






