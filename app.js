// Get List & Input===============
var list = document.getElementById('ul_list');
var input = document.getElementById('input');


// Create Add-Item Button =============
function addItem(){
    var li = document.createElement('li');
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    list.appendChild(li)
    input.value = "";

    // Create delete-Item Button ========
    var deleteBtn = document.createElement('button');
    var delBtnText = document.createTextNode('Delete');
    deleteBtn.appendChild(delBtnText);
    deleteBtn.setAttribute('class', 'li_del_btn');
    deleteBtn.setAttribute('onclick', 'delItem(this)');
    li.appendChild(deleteBtn);

    // Create Edit-Item Button ========
    var editBtn = document.createElement('button');
    var editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute('class', 'li_edit_btn');
    editBtn.setAttribute('onclick', 'editItem(this)');
    console.log(editBtn)
    li.appendChild(editBtn);
}

// Create Delete All Button =============
function deleteAll(){
    list.innerHTML = "";
}

// Create Delete Item Button =============
function delItem(e){
    e.parentNode.remove();
}

// Create Edit Item Button =============
function editItem(e){
    var editValue = prompt('Enter Here...',e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editValue;
}


