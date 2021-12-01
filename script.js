//2
//Attach an event listener to the sidebar link that says "Contacts".
//Any click on this should call a clear function that clears the main area, 
//then call the renderIndex function, passing in the global contact list.
//Also this listener should cancel the event, so that the link is not followed in the normal way.

const contact_button = document.querySelector('.nav-home')
contact_button.addEventListener('click', (event) => {
    console.log(contact_button), event.preventDefault(), cleanUpIndex(), renderIndex(contactList)
})

//3
//Attach an event listener to the sidebar link that says "Create New Contact".
//Any click on this should call a clear function that clears the main area, then call the renderCreate function.
//Also this listener should cancel the event, so that the link is not followed in the normal way.

const createnewcontact_button = document.querySelector('.nav')
createnewcontact_button.addEventListener('click', (event) =>{
    console.log(createnewcontact_button), event.preventDefault(), cleanUpCreate(), renderCreate()
})

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
//4
//Modify your createSingleIndex function so that the entire singleIndex DOM element has a click handler.
//This click handler is a bit more complicated.
//First, it must figure out the "name" that it was created with.  For example, "Bugs Bunny".
//Then, it must search through the global contact list to find a contact that has that name.
//Then, if it found that contact, it should
//a) call a clear function to clear out the main area, and
//b) call renderView(), passing it the contact that it found
//Also this listener should cancel the event, so that the link is not followed in the normal way.
//I am not *requiring* you to put all the code for this task inside the createSingleIndex function, but
//I am *advising you* that with the tools I have shown you, that's probably easiest.

function createSingleIndex(contact) {
    // needs to print the name of the given contact
    let index_tag = document.querySelector('div')
    index_tag.className = 'contact'
    let index_p = document.createTextNode(`${contact.name}`)
    index_tag.appendChild(index_p)
    index_tag.addEventListener('click', (event) =>{
        event.preventDefault(), contactName = event.target.textContent
        for (let i = 0; i < contactList.length; i++){
            if (contactList[i].name == contactName){
                cleanUpIndex()
                renderView(contactList[i])
            }
        }
    })
    return index_tag
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
//5
//Modify your renderView function, add an event listener to the "Close" button.  It should act the same
//as if you press the "Contacts" link in the sidebar.  I leave the details to you.

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
            </div>`
    const close_button = document.querySelector(".button close")
    close_button.addEventListener("click", (event) => {
        event.preventDefault()
        cleanUpIndex()
        renderIndex(contactList)
    })
}

function cleanUpCreate() {
    //page2, remove the .form
    element = document.querySelector(".contactedit")
    element.innerHTML = " "
    
}

function renderCreate() {
    element = document.querySelector(".contactedit")
    element.innerHTML = `
    <div class="contactimg">
                <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
            </div>
            <div class="form">
                <form>
                    <div class="inputcontainer">
                        <input type="text" id="contactname" name="contactname" placeholder="Contact Name">
                        <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
                    </div>

                    <div class="inputcontainer">
                        <input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
                        <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
                    </div>

                    <div class="inputcontainer">
                        <input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
                        <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
                    </div>
                    
                    <div class="inputcontainer">
                        <input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
                        <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
                    </div>

                    <div class="buttons">
                        <button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
                        <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
                    </div>
                </form>
            </div>`
    
    7//
    //Modify your renderCreate function, add an event listener to the "Cancel" button.  It should act the same
    //as if you press the "Contacts" link in the sidebar.  I leave the details to you.      
    //Yes, this is nearly identical to (5), thank you for noticing.
    const cancel_button = document.getElementById('cancel')
    cancel_button.addEventListener("click", (event)=> {
        event.preventDefault()
        cleanUpIndex()
        renderIndex(contactList)
    })   

    //8
    //And now for the real muscle.   This is where we do something interesting.
    //In your renderCreate function, add an event listener to the "Save" button.
    //In this event listener, create a new object, with keys like "name", "email", "phone", and "address".
    //For each of those keys, the value should be pulled out of the appropriate input.
    //At first, to test, once you have created this object, you could `console.log` it, to see that you're making it correctly.
    
    const save_button = document.getElementById("savecontact")
    save_button.addEventListener("click", (event) => {
        const objinsert ={
            name: '',
            email: '',
            phone: '',
            address: ''
        }
    })
}






