// get the counter element

const counter = document.querySelector('.counter');

//get the increment button

const incrementButton = document.querySelector('.increment');


// get the reset button

const resetButton = document.querySelector('.reset');


// initialise the count variable 

let count = 0;

// add event listener for increment button

incrementButton.addEventListener('click', () => {
    //increment the count variable
    count++;

    //update the counter element with the new count
    
    counter.innerText = count;
});

// add event listener for reset button

resetButton.addEventListener('click', () => {
    // reset the count variable to 0

    count = 0;

    //update the counter element with the new count

    counter.innerText = count;
});