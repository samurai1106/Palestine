// ------------------------ Landing carousel ------------------------
const questions = document.querySelectorAll('.question-slide');
const sliders = document.querySelectorAll('.img-slide')
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');

sliders.forEach((slider,index) => {
    slider.style.left = `${index * 100}%`;
})

let questions_counter = 0;
let imgs_counter = 0;

nextBtn.addEventListener('click', () => {
    imgs_counter++;
    imgsCarousel()
})

prevBtn.addEventListener('click', () => {
    imgs_counter--;
    imgsCarousel()
})

setInterval(() => {
    questions_counter++;
    questionsCarousel();
}, 3500)

function questionsCarousel() {
    // Arrows conditions
    if(questions_counter === questions.length) {
        questions_counter = 0;
    }
    // [1] Hiding all questions
    questions.forEach((question) => {
        question.style.visibility = 'hidden';
        question.style.opacity = '0';
    })
    // [2] Showing the current question 
    questions[questions_counter].style.visibility = 'visible';
    questions[questions_counter].style.opacity = '1';
}
function imgsCarousel() {
    // Arrows conditions
    if(imgs_counter === sliders.length) {
        imgs_counter = 0;
    }
    if(imgs_counter < 0) {
        imgs_counter = sliders.length - 1;
    }
    sliders.forEach((slider) => {
        slider.style.transform = `translateX(-${imgs_counter * 100}%)`
    })
}

// ------------------------ Set CopyRight date automatically ------------------------
const date = document.querySelector('#date');

date.innerHTML = new Date().getFullYear();
