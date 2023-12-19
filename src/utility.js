export default { appendElementByID, clearChildrenByID };

//Accepts an Id | string as fist argument, followed by the elements to append as child in array
function appendElementByID(Id, elements) {
    elements.forEach(element => document.getElementById(Id).appendChild(element))
}

//takes in Id | string and clears innerHTML
function clearChildrenByID(Id) {
    document.getElementById(Id).innerHTML = null;
}