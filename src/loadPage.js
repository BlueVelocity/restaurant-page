export default { firstLoad, loadLandingPage }
import utility from './utility';
import chefImage from './images/landing-page-chef.gif';

function firstLoad() {
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

    //takes tab text as string and returns tab elements as an array
    function createTabs(...args) {
        return args.map(text => {
            const element = document.createElement('button');
            element.className = 'tab';

            const tabTitle = document.createElement('p');
            tabTitle.innerText = text;

            element.appendChild(tabTitle);

            return element
        })
    }

    createTabs('Landing', 'Menu', 'Contact').forEach(element => navBar.appendChild(element));

    return navBar;
}

function landingComponent() {
    utility.clearChildrenByID('content');
    
    const titleImg = new Image();
    titleImg.src = chefImage;
    titleImg.id = 'chef-gif';

    const headerElement = document.createElement('h1');
    headerElement.textContent = 'Spaghettorama!';

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = utility.randomSelection('This pasta will Mama your Mia!', 'You\'ve Mama\'d your last Mia!', 'It\'s good pasta yo!');

    return [ titleImg, headerElement, descriptionElement ]
}