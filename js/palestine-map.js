// ------------------------ Cursor zoom in effect on palestine map ------------------------
const mapContainer = document.querySelector('.map');
const mapImg = document.querySelector('.map img');

let clientX;
let clientY;
let mWidth;
let mHeight;

mapContainer.addEventListener('mousemove', (ev) => {
    let clientX = ev.clientX - mapContainer.offsetLeft;
    let clientY = ev.clientY - mapContainer.offsetTop;

    let mWidth = mapContainer.offsetWidth;
    let mHeight = mapContainer.offsetHeight;

    clientX = clientX / mWidth * 100;
    clientY = clientY / mHeight * 100;

    mapImg.style.transform = `translate(-${clientX}%,-${clientY}%) scale(2)`
})

mapContainer.addEventListener('mouseleave', () => {
    mapImg.style.transform = `translate(-50%,-50%) scale(1)`
})

mapContainer.addEventListener('touchstart', (ev) => {
    clientX = ev.clientX - mapContainer.offsetLeft;
    clientY = ev.clientY - mapContainer.offsetTop;

    mWidth = mapContainer.offsetWidth;
    mHeight = mapContainer.offsetHeight;
})

mapContainer.addEventListener('touchmove', (ev) => {
    clientX = clientX / mWidth * 100;
    clientY = clientY / mHeight * 100;

    mapImg.style.transform = `translate(-${clientX}%,-${clientY}%) scale(2)`
})

mapContainer.addEventListener('touchend', () => {
    mapImg.style.transform = `translate(-50%,-50%) scale(1)`
})