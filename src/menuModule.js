import utility from './utility';
import meme from './images/permanence_meme.jpg'
import meatball from './images/meatball.png'

export default function loadMenuComponent() {
    utility.appendElementByID('content', menuComponent());
}

function menuComponent() {
    const headerElement = document.createElement('h2');
    headerElement.textContent = 'Menu';

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = 'This menu is random like the noodles in pasta';

    const justKeepSlapping = document.createElement('p');
    justKeepSlapping.textContent = 'Just keep slapping that menu tab if you like chaos, the kitchen staff won\'t mind';

    function randomMenuItems() {
        const mains = ['Spaghetti', 'Pasta', 'Noodles', 'Ramen', 'Vermicelli'];
        const sides = ['frites', 'escargots', 'garlic bread', 'apple', 'ricin', 'meatball'];

        return mains.map(main => {
            const menuItem = document.createElement('li')
            menuItem.textContent = `${main} with ${utility.randomSelection(sides)}`
            return menuItem;
        })
    }

    const menuList = document.createElement('ul');
    menuList.classList = 'menu-list';
    randomMenuItems().forEach(menuItem => menuList.appendChild(menuItem))

    //styling done here for the meme
    const permananceMemeball  = new Image();
    permananceMemeball.classList = 'clickable-image';
    permananceMemeball.setAttribute('visibility', 'hidden');
    permananceMemeball.setAttribute('style', 'width: 8rem; margin-top: 1rem');
    permananceMemeball.setAttribute('hover', 'pointer');
    permananceMemeball.src = meatball;

    permananceMemeball.addEventListener('click', function memeListener(){
        permananceMemeball.src = meme;
        permananceMemeball.classList = null;
        permananceMemeball.setAttribute('style', 'width: 20rem; border-radius: 1rem; margin-top: 1rem');
        permananceMemeball.removeEventListener('click', memeListener)

        const itsFree = document.createElement('p');
        itsFree.textContent = 'The food looks free, but it\'ll still cost you :)';
        utility.appendElementByID('content', [ itsFree ])
    })

    return [ headerElement, descriptionElement, justKeepSlapping, menuList, permananceMemeball]
}