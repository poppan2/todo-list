// Initial Value for count
// EVENTS
// Here, we attach certain function to certain events
// Below, we elaborate on what each function does

// When the #new form is submitted, add the new item

// When an item gets clicked, mark as complete or incomplete

// When a remove link is clicked, remove that item

// When an edit link is clicked, go into edit mode

// When an item editor is submitted, save the changes

// When a user leaves an item editor form, save the changes

// When the Clear List button is clicked, clear out the items 

// When the Clear Completed button is clicked, clear out the completed items


// ID's / Input Fields
let todoForm = $('#new')
let todoList = $('#todos');
let todoFormInput = $('#newItem');

// Numbers
let count = 2;


// FUNCTIONS
// See above for when these are used
const updateCount = function () {
	// Log the current count
	// console.log(count, 'old count');
	// Count the number of items
	count = $('li').length - $('li.done').length;

	// Print the new count
	$('#count').text(count)
}

const addNewItem = function (event) {
	// Prevent page reload
	event.preventDefault();
	// Get the text the user entered	
	let input = todoFormInput.val();
	// Add an <li> with that text to the <ul>	
	$(`<li><span class="item">${input}</span><a class="edit">Edit</a><a class="remove">Remove</a></li>`).appendTo(todoList)
	// Update the count
	updateCount()
	// Resetting input field
	todoFormInput.val('')
}

const removeItem = function (event) {
	// Prevent page reload
	event.preventDefault();
	// The parent is the item; remove it
	let parent = $(event.target).parent()
	parent.remove()
	// The list has been changed, so update the count
	updateCount()
}

const editItem = function (event) {

	// Prevent page reload
	event.preventDefault();
	// Get the text of the to-do item; it's a sibling of the clicked link
	// Get the parent <li>

	let parentListItem = $(event.target).parent();
	
	// Replace the parent <li> contents with an edit form
	
	parentListItem.replaceWith("<li><input type='text'> <a class='save'>Save</a></li>")
	// Focus the keyboard on the input that was just added
}

const saveItem = function (event) {
	// Prevent page reload
	event.preventDefault();
	
	// Get the new text from the editor
	// Get the parent <li>
	let parentListItem = $(event.target).parent();
	let parentInputText = parentListItem.find('input');

	// Replace the parent <li> contents with the updated item and controls
	
	let newLi = parentListItem.replaceWith(`<li><span class="item">${parentInputText.val()}</span><a class="edit">Edit</a><a class="remove">Remove</a></li>`)
}

const switchStatus = function (event) {
	// Get the parent <li>
	let parentListItem = $(event.target).parent();

	// Toggle the class of the parent <li>
	
	parentListItem.toggleClass('done')
	// The list has been changed, so update the count

	updateCount()
	
}

const clearList = function () {
	// Find all the items and remove them
	$('ul').children().remove()
	// The list has been changed, so update the count
	updateCount();
	
}

const clearCompleted = function () {
	// Find all the items that are done, and remove them
	$('ul').children('.done').remove()
	// The list has been changed, so update the count
}


let test = function(){
	console.log('hi')
}

updateCount()
todoForm.submit(addNewItem);
$('ul').on('click', 'li a.remove', removeItem);
$('ul').on('click', 'li a.edit', editItem);
$('ul').on('click', 'li a.save', saveItem);
$('ul').on('click', 'li span', switchStatus);
$('#clear').on('click', clearList);
$('#clearCompleted').on('click', clearCompleted);
// $('#clear').on('click', clearList);
