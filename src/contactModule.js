import utility from './utility';
import lilDevil from './images/lil_devil.gif'

export default function loadContactComponent() {
    utility.appendElementByID('content', contactComponent());
}

function contactComponent() {
    const headerElement = document.createElement('h2');
    headerElement.textContent = 'Contact Information';

    const subheader = document.createElement('p');
    subheader.textContent = 'Please refrain from contacting me if possible';

    const contactContainer = document.createElement('div');
    contactContainer.classList = 'contact-container';

    const contactName = document.createElement('p');
    contactName.textContent = 'Name: Santa Spaghetti';

    const contactAddress = document.createElement('p');
    contactAddress.textContent = 'Address: Literally Hell';

    const contactPhone = document.createElement('p');
    contactPhone.textContent = 'Phone Number: (666) 666-6666';

    utility.appendInMemoryElement(contactContainer, [ contactName, contactAddress, contactPhone ]);

    const img = new Image();
    img.src = lilDevil;
    img.classList = 'lil-devil'  ;  

    return [ headerElement, subheader, contactContainer, img ]
}