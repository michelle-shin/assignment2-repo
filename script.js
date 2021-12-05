function cleanUpMain() {
    let cleanUp = document.querySelectorAll('.main > *');
    cleanUp.remove;
    for (let i = 0; i < cleanUp.length; i++) { cleanUp[i].remove(); }
}

function createSingleIndex(contactList) {
    let main = document.querySelectorAll('.main');
    
    let createAtag = document.createElement('a');
    createAtag.href = 'page3.html';

    let createDiv = document.createElement('div');
    createDiv.className = 'contact';

    let createPtag = document.createElement('p');
    let textName = document.createTextNode(contactList.name);

    createDiv.appendChild(createPtag);
    createAtag.appendChild(createDiv);
    
    createPtag.appendChild(textName);
    main[0].appendChild(createAtag);
}

function renderIndex() {
    let main = document.querySelectorAll('.main');

    for (let c = 0; c < contactList.length; c++) {
    let createAtag = document.createElement('a');
    let createDiv = document.createElement('div');
    let createPtag = document.createElement('p');

    createPtag.append(contactList[c].name);
    createDiv.className = 'contact';
    createDiv.appendChild(createPtag);
    createAtag.appendChild(createDiv);
    createAtag.href = 'page3.html';
    main[0].appendChild(createAtag);   

    //(4)
     createAtag.addEventListener('click', (e) => {
        e.preventDefault();
        cleanUpMain();
        renderView(contactList[c]);
    }); 
}}

function renderView(contactList) {
    let main = document.querySelectorAll('.main');

    let infoDiv = document.createElement('div');
    infoDiv.className = 'contactinfo';
    main[0].appendChild(infoDiv);

    let nameDiv = document.createElement('div');
    nameDiv.className = 'contactname';
    let nameText = document.createTextNode(contactList.name);
    nameDiv.appendChild(nameText);
    infoDiv.appendChild(nameDiv);

    let contactImg = document.createElement('img');
    contactImg.className = 'profilepic';
    contactImg.src = './img/profile.jpg';
    contactImg.alt = 'Profile Picture';
    nameDiv.appendChild(contactImg);

    let emailDiv = document.createElement('div');
    emailDiv.className = 'contactemail';
    let emailNode = document.createTextNode('email:' + contactList.email);
    emailDiv.appendChild(emailNode);
    infoDiv.appendChild(emailDiv);

    let phoneDiv = document.createElement('div');
    phoneDiv.className = 'contactphone';
    let phoneNode = document.createTextNode('cell: +1' + contactList.phone);
    phoneDiv.appendChild(phoneNode);
    infoDiv.appendChild(phoneDiv);

    let addressDiv = document.createElement('div');
    addressDiv.className = 'contactaddress';
    let addressNode = document.createTextNode('address:' + contactList.address);
    addressDiv.appendChild(addressNode);
    infoDiv.appendChild(addressDiv);

    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttons';
    infoDiv.appendChild(buttonDiv);
    let editButton = document.createElement('button')
    editButton.className = 'button edit';
    let closeButton = document.createElement('button')
    closeButton.className = 'button close';

    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(closeButton);
    
    editButton.value = 'Edit'
    closeButton.value = 'Close'
    let editButtonText = document.createTextNode('Edit')
    let closeButtonText = document.createTextNode('Close')

    editButton.appendChild(editButtonText);
    closeButton.appendChild(closeButtonText);

    main[0].appendChild(infoDiv);  

    //(5) 
    document.querySelector('.close').addEventListener('click', (e) => {
        e.preventDefault();
        cleanUpMain();
        renderIndex(contactList);
    }) 
    //(6)
    document.querySelector('.edit').addEventListener('click', (e) => {
        e.preventDefault();
    })
}

function renderCreate() {
    let main = document.querySelectorAll('.main');

    let editContactDiv = document.createElement('div');
    editContactDiv.className = 'contactedit';
    main[0].appendChild(editContactDiv);

    let imgDiv = document.createElement('div');
    imgDiv.className = 'contactimg'
    let contactImg = document.createElement('img');
    contactImg.className = 'profilepic';
    contactImg.src = './img/profile.jpg';
    contactImg.alt = 'Profile Picture';
    imgDiv.appendChild(contactImg);
    editContactDiv.appendChild(imgDiv); 

    let formDiv = document.createElement('div');
    formDiv.className = 'form';
    editContactDiv.appendChild(formDiv);
    let contactForm = document.createElement('form');
    formDiv.appendChild(contactForm);

    let contactNameDiv = document.createElement('div');
    contactNameDiv.className = 'inputcontainer';

    let inputContactName = document.createElement('input');
    inputContactName.type = 'text';
    inputContactName.id = 'contactname';
    inputContactName.name = 'contactname';
    inputContactName.placeholder = 'Contact Name';
    contactNameDiv.appendChild(inputContactName);

    let namePlus = document.createTextNode('+');
    let nameButton = document.createElement('button');
    nameButton.className = 'extrafield';
    nameButton.id = 'extranamefield';
    nameButton.name = 'extranamefield';
    
    nameButton.appendChild(namePlus); 
    contactNameDiv.appendChild(nameButton);
    contactForm.appendChild(contactNameDiv);
    formDiv.appendChild(contactForm);
    editContactDiv.appendChild(formDiv);

    let contactPhoneDiv = document.createElement('div');
    contactPhoneDiv.className = 'inputcontainer';
    let inputContactPhone = document.createElement('input');
    inputContactPhone.type = 'tel';
    inputContactPhone.id = 'contactphone';
    inputContactPhone.name = 'contactphone';
    inputContactPhone.placeholder = 'Contact Phone';
    contactPhoneDiv.appendChild(inputContactPhone);

    let phonePlus = document.createTextNode('+');
    let phoneButton = document.createElement('button');
    phoneButton.className = 'extrafield';
    phoneButton.id = 'extraphonefield';
    phoneButton.name = 'extraphonefield';
    
    phoneButton.appendChild(phonePlus); 
    contactPhoneDiv.appendChild(phoneButton);
    contactForm.appendChild(contactPhoneDiv);
    formDiv.appendChild(contactForm);
    editContactDiv.appendChild(formDiv);

    let contactAddressDiv = document.createElement('div');
    contactAddressDiv.className = 'inputcontainer';
    let inputContactAddress = document.createElement('input');
    inputContactAddress.type = 'text';
    inputContactAddress.id = 'contactaddress';
    inputContactAddress.name = 'contactname';
    inputContactAddress.placeholder = 'Contact Address';
    contactAddressDiv.appendChild(inputContactAddress);

    let addressPlus = document.createTextNode('+');
    let addressButton = document.createElement('button');
    addressButton.className = 'extrafield';
    addressButton.id = 'extraaddressfield';
    addressButton.name = 'extraaddressfield';
    
    addressButton.appendChild(addressPlus); 
    contactAddressDiv.appendChild(addressButton);
    contactForm.appendChild(contactAddressDiv);
    formDiv.appendChild(contactForm);
    editContactDiv.appendChild(formDiv);

    let contactEmailDiv = document.createElement('div');
    contactEmailDiv.className = 'inputcontainer';

    let inputContactEmail = document.createElement('input');
    inputContactEmail.type = 'email';
    inputContactEmail.id = 'contactemail';
    inputContactEmail.name = 'contactemail';
    inputContactEmail.placeholder = 'Contact Email';
    contactEmailDiv.appendChild(inputContactEmail);

    let emailPlus = document.createTextNode('+');
    let emailButton = document.createElement('button');
    emailButton.className = 'extrafield';
    emailButton.id = 'extraemailfield';
    emailButton.name = 'extraemailfield';
    
    emailButton.appendChild(emailPlus); 
    contactEmailDiv.appendChild(emailButton);
    contactForm.appendChild(contactEmailDiv);
    formDiv.appendChild(contactForm);
    editContactDiv.appendChild(formDiv);
    
    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttons';
    contactForm.appendChild(buttonDiv);
    formDiv.appendChild(contactForm);

    let saveButton = document.createElement('button')
    saveButton.type = 'submit';
    saveButton.className = 'button save';
    saveButton.id = 'savecontact';
    saveButton.name = 'savecontact';
    buttonDiv.appendChild(saveButton);

    let cancelButton = document.createElement('button')
    cancelButton.type = 'reset';
    cancelButton.className = 'button cancel';
    cancelButton.id = 'cancel';
    cancelButton.name = 'cancel';
    buttonDiv.appendChild(cancelButton);

    let saveButtonText = document.createTextNode('Save Contact')
    let cancelButtonText = document.createTextNode('Cancel')

    saveButton.appendChild(saveButtonText);
    cancelButton.appendChild(cancelButtonText);

    //(7)
    document.querySelector('.cancel').addEventListener('click', (e) => {
        e.preventDefault();
        cleanUpMain();
        renderIndex(contactList);
    }) 

    //(8,9)
    saveButton.addEventListener('click', (e) => {
        e.preventDefault();
        newContactList = {
            name: '',
            phone: '',
            address: '',
            email: '',
        }
        newContactList.name = inputContactName.value
        newContactList.phone = inputContactPhone.value
        newContactList.address = inputContactAddress.value
        newContactList.email = inputContactEmail.value
        contactList.push(newContactList)
        console.log(contactList)
    })
}


// TERM ASSIGNMENT #3

//(1)
let contactList = [
    {
    name: "Roberta Dobbs",
    phone: "778-555-1234",
    address: "101 Main St, Anytown, USA",
    email: "subgenius@slack.example.com",
    }, 
    {
    name: "Bugs Bunny",
    phone: "123-867-5309",
    address: "Warner Brothers Animation Lot",
    email: "whatsup@doc.example.com",
    },
    {
    name: "Daniel Lee",
    phone: "604-795-1122",
    address: "23 Victoria Ave, Vancouver, BC",
    email: "dlee@gmail.com"
    }
]

//(2)
document.querySelector('h1').addEventListener('click',  (e) => {
    e.preventDefault();
    cleanUpMain();
    renderIndex(contactList);
})

//(3)
document.querySelector('h2').addEventListener('click', (e) => {
    e.preventDefault();
    cleanUpMain();
    renderCreate(contactList);
})

//(10)
window.onload = function (e) {
    e.preventDefault();
    cleanUpMain();
    renderIndex(contactList);
}