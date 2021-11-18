
function cleanUpIndex() {
    //removes all of the .contact elements
    element = document.querySelector(".main")
    element.innerHTML = ""

}

function createSingleIndex(contact) {

    <p> ${contact[0].name} </p>
    


    
}

function renderIndex(contactList) {
    // sub with for of loop    

    for (let i = 0; i < contactList.length; i++) {
        createSingleIndex(contact)
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




