function cleanUpIndex() {
    // removes all DOM node that are unique to index page 
    let cleanUp = document.querySelectorAll('.contact');
    cleanUp.remove;
    for (let i = 0; i < cleanUp.length; i++) { cleanUp[i].remove(); }
}


function createSingleIndex (contact) {
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


function renderIndex (contact) {
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
