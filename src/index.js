import landingPage from './loadPage';
import utility from './utility';
import './style.css'

console.log('I\'m working from index.js!');

//saves navBarFunctions in array
const navBarFunctions = landingPage.loadNavbar();
landingPage.loadLandingComponent();

document.querySelectorAll('.tab').forEach((element, index) => {
    element.addEventListener('click', () => {
        utility.clearChildrenByID('content');
        navBarFunctions[index]();
        
        if (element.getAttribute('inactive') != 'true') {
            document.querySelectorAll('.tab').forEach(elem => {
                elem.classList = 'tab';
                elem.setAttribute('inactive', 'false');
            });
            element.classList = 'tab tab-selected';
            element.setAttribute('inactive', 'true');
        };
    });
});