import utility from './utility';

export default function loadMenuComponent() {
    utility.appendElementByID('content', menuComponent());
}

function menuComponent() {
    const headerElement = document.createElement('h1');
    headerElement.textContent = 'Menu';

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = 'This menu is random like the noodles in pasta'

    const justKeepSlapping = document.createElement('p');
    justKeepSlapping.textContent = 'Just keep slapping that menu tab if you want to randomize'

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

    return [ headerElement, descriptionElement, justKeepSlapping, menuList ]
}