const header = document.querySelector('header');
const images = document.querySelectorAll('.work-images img');
const body = document.querySelector('body');
const displayImage = document.querySelector('.display-image');
const exit = document.querySelector('.display-image i');
const price = document.querySelectorAll('.price-block');
const burger = document.querySelector('.burger');
const exitLink = document.querySelector('.exit-link');
const linkContainer = document.querySelector('.link-container');
const mobileLink = document.querySelector('.mobile-link');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 550);
})

var imageToDisplay;
var textDisplay;
images.forEach((image) => {
    image.addEventListener('click', () => {
        imageToDisplay = document.createElement('img');
        imageToDisplay.src = image.src;
        textDisplay = document.createElement('p');
        textDisplay.innerText = `A ${image.alt}`;
        displayImage.appendChild(imageToDisplay);
        displayImage.appendChild(textDisplay);
        displayImage.classList.add('display-flex');
    })
})

displayImage.addEventListener('click', () => {
    displayImage.removeChild(imageToDisplay);
    displayImage.classList.remove('display-flex');
    displayImage.removeChild(textDisplay);
})

price.forEach((priceBlock) => {
    priceBlock.addEventListener('click', () => {
        if (priceBlock.classList.contains('selected')) {
            return;
        } else {
            price.forEach((priceBlock2) => {
                priceBlock2.classList.remove('selected');
                priceBlock2.classList.remove('change-padding');
            })
            priceBlock.classList.add('selected');
            setTimeout(function() {
                priceBlock.classList.add('change-padding');
            } ,500)
        }
    })
})

var x = window.matchMedia("(max-width: 600px)")
var y = window.matchMedia("(min-width: 601px)")

setInterval(function() {
    if (y.matches) {
        linkContainer.style = "";
    }
}, 500);

mobileLink.addEventListener('click', () => {
    if (x.matches) {
        burger.classList.toggle('display-none');
        exitLink.classList.toggle('display-none');
        console.log(burger)
        if (burger.classList.contains('display-none')) {
            linkContainer.style.display = "flex";
            linkContainer.style.animation = "slide-left .5s ease";
            setTimeout(function() {
                linkContainer.style.transform = 'translateX(0)';
            }, 500);
        } else if (exitLink.classList.contains('display-none')) {
            linkContainer.style.animation = "slide-right .5s ease";
            setTimeout(function() {
                linkContainer.style.display = "none";
                linkContainer.style.transform = 'translateX(100%)';
            }, 500);
    }
    }
})

linkContainer.addEventListener('click', () => {
    if (x.matches) {
        burger.classList.toggle('display-none');
        exitLink.classList.toggle('display-none');
        linkContainer.style.animation = "slide-right .5s ease";
            setTimeout(function() {
                linkContainer.style.display = "none";
                linkContainer.style.transform = 'translateX(100%)';
            }, 500);
    }
})

// header.addEventListener('click', () => {
//     if (burger.classList.contains('display-none') && (x.matches)) {
//         burger.classList.toggle('display-none');
//         exitLink.classList.toggle('display-none');
//         linkContainer.style.animation = "slide-right .5s ease";
//             setTimeout(function() {
//                 linkContainer.style.display = "none";
//                 linkContainer.style.transform = 'translateX(100%)';
//             }, 500);
//     }
// })