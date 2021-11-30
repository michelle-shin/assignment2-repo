function cleanUpIndex() {
    let cleanUp = document.querySelectorAll('.contact');
    cleanUp.remove;
    for (let i = 0; i < cleanUp.length; i++) { cleanUp[i].remove(); }
}

function createSingleIndex(contact) {
    let main = document.querySelectorAll('.main');

    let createAtag = document.createElement('a');
    let createDiv = document.createElement('div');
    let createPtag = document.createElement('p');
    let textName = document.createTextNode(contact.name);

    createDiv.className = 'contact';
    createDiv.appendChild(createPtag);
    createAtag.appendChild(createDiv);
    createAtag.href = 'page3.html';
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
    };
}

function cleanUpView() {
    let cleanUp = document.querySelectorAll('.contactinfo');
    cleanUp.remove;
    for (let i = 0; i < cleanUp.length; i++) {cleanUp[i].remove();}
}

function renderView(contact) {
    let main = document.querySelectorAll('.main');

    let infoDiv = document.createElement('div');
    infoDiv.className = 'contactinfo';
    main[0].appendChild(infoDiv);

    let nameDiv = document.createElement('div');
    nameDiv.className = 'contactname';
    let nameText = document.createTextNode(contact.name);
    nameDiv.appendChild(nameText);
    infoDiv.appendChild(nameDiv);

    let contactImg = document.createElement('img');
    contactImg.className = 'profilepic';
    contactImg.src = './img/profile.jpg';
    contactImg.alt = 'Profile Picture';
    nameDiv.appendChild(contactImg);

    let emailDiv = document.createElement('div');
    emailDiv.className = 'contactemail';
    let emailNode = document.createTextNode('email:' + contact.email);
    emailDiv.appendChild(emailNode);
    infoDiv.appendChild(emailDiv);

    let phoneDiv = document.createElement('div');
    phoneDiv.className = 'contactphone';
    let phoneNode = document.createTextNode('cell: +1' + contact.phone);
    phoneDiv.appendChild(phoneNode);
    infoDiv.appendChild(phoneDiv);

    let addressDiv = document.createElement('div');
    addressDiv.className = 'contactaddress';
    let addressNode = document.createTextNode('address:' + contact.address);
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

    document.querySelector('.close').addEventListener('click', () => {
        cleanUpView();
        cleanUpIndex();
        renderIndex();
    }) 
    document.querySelector('.edit').addEventListener('click', () => {
        console.log('Nothing');
    })
}

function cleanUpCreate() {
    let cleanUp = document.querySelectorAll('.contactedit');
    cleanUp.remove;
    for (let i = 0; i < cleanUp.length; i++) {cleanUp[i].remove();}
}

function renderCreate(contact) {
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

    main[0].appendChild(editContactDiv); 

    let nameInput = document.getElementById('contactname')
    let phoneInput = document.getElementById('contactphone')
    let addressInput = document.getElementById('contactaddress')
    let emailInput = document.getElementById('contactemail')

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(nameInput.value, phoneInput.value, addressInput.value, emailInput.value)
        cleanUpCreate();
        renderCreate();
    })
}

// TERM ASSIGNMENT #3

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
]

function ContactNav(contact) {
    document.getElementById('contactshome').removeAttribute('href')
  }
document.querySelector('h1').addEventListener('click',  () => {
    cleanUpIndex();
    cleanUpCreate();
    renderIndex();
    ContactNav();
})

function CreateContactNav(contact) {
    document.getElementById('newcontact').removeAttribute('href')
  }
document.querySelector('h2').addEventListener('click', () => {
    cleanUpIndex();
    cleanUpCreate();
    renderCreate();
    CreateContactNav();
})