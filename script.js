function addItem() {
let itemInput = document.getElementById('input').value;
let listItem = document.createElement('li');
listItem.addEventListener('click', completeFunc.bind(this, itemInput, listItem));
listItem.textContent = itemInput;
let shoppingList = document.getElementById('toBuy');
shoppingList.appendChild(listItem);
document.getElementById('input').value = '';

}


  function completeFunc(elemName, myListElem) {
    let compList = document.getElementById('completed');
    let compItem = document.createElement('li');
    compItem.textContent = elemName;
    compList.appendChild(compItem);
    document.getElementById('toBuy').removeChild(myListElem);
  }


const myBtn = document.getElementById('btnLeft');
myBtn.addEventListener('click', addItem);