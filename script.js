function cleanUpIndex() {
    // removes all DOM node that are unique to index page 
    let cleanUp = document.querySelectorAll('.contact');
    cleanUp.remove;
    for (let i = 0; i < cleanUp.length; i++) { cleanUp[i].remove(); }
}

function createSingleIndex(contact) {
    // CREAT DOM node that represents a single index card for index page. 
    // take in single object = object represents a single contact 
    let main = document.querySelectorAll('.main');

    let createAtag = document.createElement('a');
    let createDiv = document.createElement('div');
    let createPtag = document.createElement('p');

    createDiv.className = 'contact';
    createDiv.appendChild(createPtag);
    createAtag.appendChild(createDiv);
    createAtag.href = 'page3.html';
    createAtag.appendChild(createPtag);
    main[0].appendChild(createAtag);
}

function renderIndex(contact) {
    // creates all of DOM nodes that are unique
    // take single parameter, array containing contacts, each represent single contact
    let main = document.querySelectorAll('.main');

    for (let c = 0; c < contact.length; c++) {
    let createAtag = document.createElement('a');
    let createDiv = document.createElement('div');
    let createPtag = document.createElement('p');

    createPtag.append(contact[c].name);
    createDiv.className = 'contact';
    createDiv.appendChild(createPtag);
    createAtag.appendChild(createDiv);
    createAtag.href = 'page3.html';
    main[0].appendChild(createAtag);   
    };
}

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

function cleanUpView() {
    // removes all DOM node that are unique to index page 
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
}


