// Display Controller

const display = (function() {

    // DOM caching

    const card = document.querySelector('.card');
    const header = document.querySelector('.header');
    const text = document.querySelector('.text');
    const title = document.querySelector('h1');
    const paragraph = document.querySelector('p');
    const ratingArea = document.querySelector('.rating-area');

    const ratings = document.querySelectorAll('.rating');
    const submitButton = document.querySelector('#submit-btn');


    const renderThxCard = function() {
        createThxImage();
        createRatingText();
        changeText();
        removeRatingArea();
    }

    const createThxImage = function() {
        header.removeChild(document.querySelector('.star-container'));
        header.classList.remove('left-align');
    
        const thankYouImg = document.createElement('img');
        thankYouImg.setAttribute('src', './assets/illustration-thank-you.svg');
        header.appendChild(thankYouImg);
    }

    const createRatingText = function() {
        const ratingText = document.createElement('p');
        ratingText.textContent = `You selected ${ratingComponentController.getRating()} out of 5`;
        ratingText.classList.add('rating-text');
        header.appendChild(ratingText);
    }

    const changeText = function() {
        text.classList.add('center-align');
        title.textContent = 'Thank You!';
        paragraph.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don\'t hesitate to get in touch!';
    }

    const removeRatingArea = function() {
        card.removeChild(ratingArea);
    }


    return {
        ratings,
        submitButton,
        renderThxCard
    }

})();


// Rating Component Controller

const ratingComponentController = (function() {

    let chosenRating;

    const chooseRating = function(e) {
        display.ratings.forEach(rating => rating.classList.remove('active'));
    
        e.target.classList.add('active');
    
        chosenRating = e.target.innerText;
    }

    const submitRating = function() {
        if (chosenRating) {
            display.renderThxCard();
        }
    }

    const getRating = function() {
        return chosenRating
    }

    // binding events

    display.ratings.forEach(rating => rating.addEventListener('click', chooseRating));
    display.submitButton.addEventListener('click', submitRating);


    return {
        getRating
    }

})();