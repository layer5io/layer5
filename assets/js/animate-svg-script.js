// var wrapper = document.querySelector('animate-wrapper animate-arch')
// var btnDraw = document.querySelector('.btn-draw')
// var btnErase = document.querySelector('.btn-erase')
function myFunction() {
  document.querySelector(".animate-arch").classList.add('active');
}
// We are only adding and removing the 'active' class,
// the entire animation is defined in the CSS code
function draw() {
  wrapper.classList.add('active')
}

function erase() {
  wrapper.classList.remove('active')
}

// Add handlers to our buttons
// btnDraw.addEventListener('click', draw, false)
// btnErase.addEventListener('click', erase, false)

// Play draw animation once
setTimeout(myFunction, 300)