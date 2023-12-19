import landingPage from './loadPage';
import './style.css'

console.log('I\'m working from index.js!');

//saves navBarFunctions in array
const navBarFunctions = landingPage.loadNavbar();
landingPage.loadLandingPage();

document.querySelectorAll('.tab').forEach((element, index) => {
    element.addEventListener('click', navBarFunctions[index]);
    element.addEventListener('click', function() {
        if (element.getAttribute('inactive') != 'true') {
            document.querySelectorAll('.tab').forEach(elem => {
                elem.classList = 'tab';
                elem.setAttribute('inactive', 'false');
            });
            element.classList = 'tab tab-selected';
            element.setAttribute('inactive', 'true');
        }
})});