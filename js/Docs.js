// ------------------------ Aside drop down ------------------------
const dropBtn = document.querySelectorAll('#drop-btn');
const subLinks = document.querySelectorAll('.sub-links');

dropBtn.forEach((btn) => {
    btn.addEventListener('click',(ev) => {
        rotateIcone(btn);
        dropMenu(ev);
    })
})

function rotateIcone (btn) {
    btn.classList.toggle('rotate-icone');
}

function dropMenu(ev) {
    let SubL_index = ev.currentTarget.dataset.index;
    subLinks[SubL_index].classList.toggle('show');
}

// ------------------------ aside responsive ------------------------
const asideBtn = document.querySelector('#side-bar-btn');
const aside = document.querySelector('main aside');
const XmarkBtn = document.querySelector('#X-mark');

asideBtn.addEventListener('click',() => {
    aside.classList.add('show')
})

XmarkBtn.addEventListener('click',() => {
    aside.classList.remove('show')
})

// ------------------------ Scroll to top ------------------------
const scrollUpBtn = document.querySelector('#scroll-up');

window.addEventListener('scroll', () => {
    if(window.scrollY > 800) {
        scrollUpBtn.classList.add('show-scroll-icone')
    }
    else {
        scrollUpBtn.classList.remove('show-scroll-icone')
    }
})

scrollUpBtn.addEventListener('click',() => {
    window.scrollTo(0,0)
})