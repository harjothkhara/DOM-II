// Your code goes here

// Adding event listeners 

const navLogo = document.querySelector('.logo-heading'); 
// console.log(navLogo);
navLogo.addEventListener('mouseover', function(event){
    console.log(`navLogo fired!`)
})

const navAnchors = document.querySelector('.nav'); 
// console.log(navItems);
navAnchors.addEventListener('dblclick', function(event){
    console.log(`navAnchors fired!`)
})

const headerArea = document.querySelector("p");
// console.log(headerArea);
headerArea.addEventListener('keypress', function(event) {
    body.style.backgroundColor = 'red';
    // eventObject.stopPropagation();
});

const images = document.querySelector('img');
// console.log(images);
images.addEventListener('mouseover', function(event) {
    console.log(`this images event is working`)
})

window.addEventListener('scroll', function(event) {
    console.log(`you are scrolling!`)
})

window.addEventListener('resize', function(event) {
    console.log(`the window is resizing!`)
})

const h1 = document.querySelector('h1');
// console.log(h1);
window.addEventListener('keydown',function(event) {
    h1.style.fontSize = '10rem';
    h1.style.color = 'crimson';
});

const destination = Array.from(document.getElementsByClassName('destination'));
destination.forEach(element => element.addEventListener('mousemove', event => element.style.backgroundColor = 'crimson'))


const copyright = document.querySelector('.footer p')
// console.log(copyright)
copyright.addEventListener('dblclick',function(event) {
    copyright.style.fontSize = '10rem';
    copyright.style.color = 'crimson';
});


const p = document.querySelector('p')
// console.log(p)
p.addEventListener('mouseenter',function(event) {
    p.style.color = 'violet';
});


// Button
const signMeUpBtn = document.querySelector('.btn');
console.log(signMeUpBtn);

signMeUpBtn.addEventListener('click', function(){
    console.log(`signMeUpBtn fired!`)
});

