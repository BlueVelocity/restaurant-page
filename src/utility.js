export default { appendElementByID, clearChildrenByID, randomSelection };

//Accepts an Id | string as fist argument, followed by the elements to append as child in array
function appendElementByID(Id, elements) {
    elements.forEach(element => document.getElementById(Id).appendChild(element))
}

//takes in Id | string and clears innerHTML
function clearChildrenByID(Id) {
    document.getElementById(Id).innerHTML = null;
}

//takes items as an array of items | any and returns a random item
function randomSelection(array) {
    const randNum = Math.random();
    const interval = 1/array.length;
    let selection = array[0];
    array.forEach((desc, index) => {
        if ((index * interval) < randNum && randNum < ((index + 1) * interval)) {
            selection = desc;
        }
    });
    return selection;
}