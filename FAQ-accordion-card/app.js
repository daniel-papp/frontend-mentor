const accordion = document.getElementsByClassName('accordion-head');

for (let i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}


// accordion[0].addEventListener('click', function() {
//     this.classList.toggle('active1');
// })