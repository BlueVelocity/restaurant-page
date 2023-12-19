export default { pageSetup, loadLandingPage }
import utility from './utility';
import chefImage from './images/landing-page-chef.gif';
import spaghettiHeader from './images/spaghetti_header.jpg';

function pageSetup() {
    console.log('loadPage is working!');
    document.getElementsByTagName('body')[0].prepend(navBarComponent());
    utility.appendElementByID('content', landingComponent());
}

function loadLandingPage() {
    utility.clearChildrenByID('content');

    utility.appendElementByID('content', landingComponent())
}

function navBarComponent() {
    const navBar = document.createElement('div');
    navBar.className = 'nav-bar';

    return navBar;
}

function landingComponent() {
    utility.clearChildrenByID('content');
    
    const titleImg = new Image();
    titleImg.src = chefImage;
    titleImg.id = 'chef-gif';

    const headerElement = document.createElement('h1');
    headerElement.textContent = 'Spaghettorama!'

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = 'This pasta will Mama your Mia';

    return [ titleImg, headerElement, descriptionElement ]
}