export default { loadNavbar, loadLandingComponent }
import utility from './utility';
import menu from './menuModule'
import chefImage from './images/landing-page-chef.gif';

function loadNavbar() {
    document.getElementsByTagName('body')[0].prepend(navBarComponent()[1])
    return navBarComponent()[0];
}

function loadLandingComponent() {
    utility.appendElementByID('content', landingComponent());
}

function navBarComponent() {
    let assignedFunctions = [];

    const navBar = document.createElement('div');
    navBar.className = 'nav-bar';

    //takes tab info as array [component_function, 'label' | string] and returns array [attached_function, element]
    function createTabs(...args) {
        return args.map(info => {
            const element = document.createElement('button');
            element.className = 'tab';

            const tabTitle = document.createElement('p');
            tabTitle.innerText = info[1];

            element.appendChild(tabTitle);

            assignedFunctions.push(info[0]);

            return [info[0], element];
        })
    }

    createTabs([loadLandingComponent, 'Landing'], [menu, 'Menu'], [() => console.log('contact tab working!'), 'Contact']).forEach(element => navBar.appendChild(element[1]));

    return [ assignedFunctions, navBar ];
}

function landingComponent() {
    const titleImg = new Image();
    titleImg.src = chefImage;
    titleImg.id = 'chef-gif';

    const headerElement = document.createElement('h1');
    headerElement.textContent = 'Spaghettorama!';

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = utility.randomSelection(['This pasta will Mama your Mia!', 'You\'ve Mama\'d your last Mia', 'It\'s good pasta yo!', 'Arms are heavy...']);

    return [ titleImg, headerElement, descriptionElement ]
}