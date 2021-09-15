const form = document.querySelector('#addForm')
const item = document.querySelector('#item')  
const addInList = document.querySelector('#items')
const deleteBtn = document.querySelectorAll('.delete')
const filter = document.querySelector('#filter');
form.addEventListener('submit',addItem) // Form submit event
addInList.addEventListener('click',removeItem)// Delete event
filter.addEventListener('input',filterItems)  //filter event

function addItem(e){
  e.preventDefault()

  if(item.value.length !== 0 ){
  const li = document.createElement('li')    // Create new li element 
  const button = document.createElement('button')   // Create del button element
  button.className = 'btn btn-danger delete'       // Add class
  button.append('X')
  li.append(item.value)       //Get Input value
  li.className = 'list-group-item'     // Add class
  li.appendChild(button)              // Append button to li
  addInList.appendChild(li)           // Append li to list
  item.value = ''           //refreshing the input value to nothing
}
}
function removeItem(e){                 // Remove item
  if(e.target.classList.contains('delete')){          //defining e.target to be only delete button.
    const li = e.target.parentElement                 
    li.remove()
  }
}

function filterItems(e){
  const lis = addInList.children
  for(li of lis){
    const value = (li.firstChild.textContent).toLowerCase()
    const compareTo = e.target.value.toLowerCase()
    if(value.indexOf(compareTo) == -1){       //-1 means that both both strings do not have anything to match.
      li.style.display = 'none'
    }else{
      li.style.display = 'grid'               //else is important because lis wont come back on there own.
    }
  }
}

