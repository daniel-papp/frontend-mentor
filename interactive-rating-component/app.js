// DOM caching 

const card = document.querySelector('.card');
const header = document.querySelector('.header');
const text = document.querySelector('.text');
const title = document.querySelector('h1');
const paragraph = document.querySelector('p');
const ratingArea = document.querySelector('.rating-area');

const ratings = document.querySelectorAll('.rating');
const submitButton = document.querySelector('#submit-btn');

// Declaring variables

let chosenRating;

// Functions

const chooseRating = function(e) {
    ratings.forEach(rating => rating.classList.remove('active'));

    e.target.classList.add('active');

    chosenRating = e.target.innerText;
}

const createThankYouCard = function() {
    console.log(`Thank You!`);
    console.log(`You selected ${chosenRating} out of 5`);


    text.classList.add('center-align');
    title.textContent = 'Thank You!';
    paragraph.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don\'t hesitate to get in touch!';
    card.removeChild(ratingArea);
}

const submitRating = function() {
    if (chosenRating) {
        createThankYouCard();
    }
}



// Assigning event listeners

ratings.forEach(rating => rating.addEventListener('click', chooseRating));

submitButton.addEventListener('click', submitRating);