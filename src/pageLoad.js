import pageManipulation from './pageManipulation';
import chefImage from './images/landing-page-chef.gif';
import './style.css';

export default function pageLoad() {
    console.log('pageLoad is working!');
    pageManipulation.appendElementByID('content', landingComponent())
}

function landingComponent() {
        const titleImg = new Image();
        titleImg.src = chefImage;
        titleImg.setAttribute('width', '500px')

        const headerElement = document.createElement('h1');
        headerElement.textContent = 'Spaghettorama!'

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = 'This pasta will Mama your Mia';

    return [ titleImg, headerElement, descriptionElement ]
}