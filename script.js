// Reference variables 
let mainContainer = document.getElementsByClassName('main_container');
let mainTitle = document.getElementById('main_title');
let storyResult = document.getElementById('story_result');
// The [0] is use to access the first (and only) element within the class name
let formContainer = document.getElementsByClassName('form_container')[0];
let adLib = document.getElementsByClassName('adlib');
let titleInput = document.getElementById('title_input');
let nounInput = document.getElementById('noun');
let verbInput = document.getElementById('verb');
let adjInput = document.getElementById('adjective');
let submButton = document.getElementById('submit_button');

// Function for user's main input (update title)
function updateInput(){
    mainTitle.textContent = titleInput.value;
}

// Function to confirm the user input and displays an alert sign if there are no user input
function confirmInput(event){
    event.preventDefault(); // Prevents the default form submission behavior which would reload the page.   
    
    if(titleInput.value === '' || nounInput.value === '' || verbInput.value === '' || adjInput.value === ''){
        alert('please fill in all fields');
    }
    else{
        // Generates a story
        // ${} allows you to embed expressions within a string
        let story =`Today I visited ${nounInput.value}, went out and ${verbInput.value}, and had so much ${adjInput.value}`;

        // Display the adlib story
        // Textcontent allows you to display everything within user's input without including HTML tags around them
        storyResult.textContent = story;

        // Hide the form
        formContainer.style.display = "none";

        // Display the main title
        mainTitle.textContent = titleInput.value; 
    }
}

// Add event listener to the title input button
titleInput.addEventListener('input', updateInput);

// Add a event listener to the submit button
submButton.addEventListener('click', confirmInput);

