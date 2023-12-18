import chefImage from './images/landing-page-chef.gif';

function imgComponent() {
    const titleImg = new Image();
    titleImg.src = chefImage;
    titleImg.setAttribute('width', '500px')

    return titleImg;
}

function titleComponent() {
    const element = document.createElement('h1');
    element.textContent = 'Spaghettorama!'

    return element;
}

function textComponent() {
    const element = document.createElement('p');
    element.textContent = 'This pasta will Mama your Mia';

    return element;
}

//Accepts an Id | string as fist argument, followed by the elements to append as child
function appendElementByID(Id, ...args) {
    args.forEach(element => document.getElementById(Id).appendChild(element))
}

export default function pageLoad() {
    console.log('pageLoad is working!');
    appendElementByID('content', imgComponent(), titleComponent(), textComponent())
}