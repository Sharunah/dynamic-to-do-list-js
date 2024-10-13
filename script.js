// 1. Setup Event Listener for Page Load:
document.addEventListener('DOMContentLoaded', function() {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint for user data
        const dataContainer = document.getElementById('api-data'); // Select the element to display API data

        try {
            const response = await fetch(apiUrl); // Fetch data from the API
            const users = await response.json(); // Convert the response to JSON

            const userList = document.createElement('ul'); // Create a <ul> element

            users.forEach(user => {
                const listItem = document.createElement('li'); // Create a <li> element
                listItem.textContent = user.name; // Set the text content to the user's name
                userList.appendChild(listItem); // Append the <li> to userList
            });

            dataContainer.appendChild(userList); // Append userList to dataContainer

        } catch (error) {
            dataContainer.innerHTML = ''; // Clear existing content
            dataContainer.textContent = 'Failed to load user data.'; // Set error message
            console.error('Error fetching data:', error); // Log the error
        }
    }

    fetchUserData(); // Invoke fetchUserData when the document is fully loaded
});

// Select DOM Elements:



const addButton = document.getElementById('add-task-btn'); // Select the "Add Task" button
const taskInput = document.getElementById('task-input'); // Select the input field for tasks
const taskList = document.getElementById('task-list'); // Select the unordered list for displaying tasks

// Create the addTask Function:
function addTask() {
    const taskText = taskInput.value.trim(); // Retrieve and trim the value from the input field

    if (taskText === "") {
        alert("Please enter a task."); // Prompt the user if the input is empty
        return; // Exit the function if the input is empty
    }

}

// 4 Task Creation and Removal:

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn'); // Correct ID
    const taskInput = document.getElementById('task-input'); // Select the input field for tasks
    const taskList = document.getElementById('task-list'); // Select the unordered list for displaying tasks

    // Add an event listener to addButton to call addTask when clicked
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // Check if the pressed key is 'Enter'
            addTask(); // Call addTask
        }
    });
});

function addTask() {
    const taskText = taskInput.value.trim(); // Retrieve and trim the value from the input field

    if (taskText === "") {
        alert("Please enter a task."); // Prompt the user if the input is empty
        return; // Exit the function if the input is empty
    }

    const listItem = document.createElement('li'); // Create a new li element
    listItem.textContent = taskText; // Set its textContent to taskText

    const removeButton = document.createElement('button'); // Create a new button element
    removeButton.textContent = "Remove"; // Set button text
    removeButton.classList.add('remove-btn'); // Add class to the remove button

    removeButton.onclick = function() {
        taskList.removeChild(listItem); // Remove the li element from taskList
    };

    listItem.appendChild(removeButton); // Append the remove button to the li element
    taskList.appendChild(listItem); // Append the li to taskList
    taskInput.value = ''; // Clear the task input field
}

// 5.Attach Event Listeners:
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task'); // Select the "Add Task" button
    const taskInput = document.getElementById('task-input'); // Select the input field for tasks
    const taskList = document.getElementById('task-list'); // Select the unordered list for displaying tasks

    // Add an event listener to addButton to call addTask when clicked
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // Check if the pressed key is 'Enter'
            addTask(); // Call addTask
        }
    });
});

function addTask() {
    const taskText = taskInput.value.trim(); // Retrieve and trim the value from the input field

    if (taskText === "") {
        alert("Please enter a task."); // Prompt the user if the input is empty
        return; // Exit the function if the input is empty
    }

    // Create a new li element
    const listItem = document.createElement('li');
    listItem.textContent = taskText; // Set its textContent to taskText

    // Create a new button element for removing the task
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove"; // Set button text
    removeButton.className = 'remove-btn'; // Assign a class name

    // Assign an onclick event to the remove button
    removeButton.onclick = function() {
        taskList.removeChild(listItem); // Remove the li element from taskList
    };

    // Append the remove button to the li element
    listItem.appendChild(removeButton);
    // Append the li to taskList
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = ''; // Set taskInput to an empty string
}