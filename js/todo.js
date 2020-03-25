let addBtn = 
document.getElementById('btn');
let inputText = 
document.getElementById('input-text');
let toDoList = 
document.getElementById('to-do-list');
let completed = document.getElementById('completed');

addBtn.addEventListener('click', function(){

if (inputText.value === '') {
	alert('You have to write something');
} else {


let newLi = document.createElement('li');
let input = document.createElement('input');
let liContent = document.createTextNode(inputText.value);
let editBtn = document.createElement('button');
let finishedBtn = document.createElement('button');
let deleteBtn = document.createElement('button');

deleteBtn.innerHTML = "Delete";
editBtn.innerHTML = "Edit";
finishedBtn.innerHTML = "Finished";

input.setAttribute('value', inputText.value);
input.disabled= true;
newLi.appendChild(input);
newLi.appendChild(editBtn);
newLi.appendChild(deleteBtn);
newLi.appendChild(finishedBtn);
input.appendChild(liContent);
toDoList.appendChild(newLi);


deleteBtn.addEventListener('click', function(){
	let li = this.parentNode;
	li.remove()

});

editBtn.addEventListener('click', function(){
		if (input.value === '') {
			alert('You have to write something');
		}
		input.disabled = false;
		

});

finishedBtn.addEventListener('click', function(){
		completed.appendChild(newLi);
		newLi.removeChild(finishedBtn);
});
}
});
