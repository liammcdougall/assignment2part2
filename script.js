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
    <a href="page3.html"><div class="contact"><p>${contact}</p></div></a>`
}

function renderIndex(contactList) {   
    
    for (i=0; i < contactList.length; i++) {

       // console.log(contactList[i]["name"])

       createSingleIndex(contactList[i]["name"])

      }
    
   
       
}


function cleanUpView() {
    // page3 is the View page, remove the .contactinfo
    element = document.querySelector(".contactinfo")
    element.innerHTML = " "
}

function renderView(contact) {
    //Create a function called renderView that creates all of the DOM nodes that are unique to the View page.
    //This function will take in a single parameter,
    // which is an object that represents a single contact  
    element = document.querySelector(".contactinfo")
    element.innerHTML +=

    `<div class="contactname">
                ${contact["name"]}
                <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
            </div>
            <div class="contactemail">email: ${contact["email"]}</div>
            <div class="contactphone">cell: ${contact["phone"]}</div>
            <div class="contactaddress">address: ${contact["address"]}</div>
            <div class="buttons">
                <button class="button edit" value="Edit">Edit</button>
                <button class="button close" value="Close">Close</button>
            </div>
    `
}

function cleanUpCreate() {
    //page2, remove the .form
    element = document.querySelector(".contactedit")
    element.innerHTML = " "
    
}

function renderCreate() {
    
}






