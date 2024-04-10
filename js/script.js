const menu = document.getElementById("menu");
const action = document.getElementById("actions");


menu.addEventListener ("click",() => {
    hundlemenu();
})

function hundlemenu(){
menu.classList.toggle("is-active");
actions.classList.toggle("is-active");
}

const typedSpan = document.getElementById("typed")
const totype = ["graphic designer", "Visual identity designer", "Social media designer"]

const delayTyping_char = 120;
const delayErasing_text = 120;
const delayTyping_text = 500;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < totype[totypeIndex].length) {
    typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, delayTyping_char);
  }
  else {
    setTimeout(eraseText, delayTyping_text);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typedSpan.textContent = totype[totypeIndex].substring(0, charIndex-1);
    charIndex = charIndex-1;
    setTimeout(eraseText, delayErasing_text);
  }
  else {
    totypeIndex++;

    if (totypeIndex >= totype.length)
      totypeIndex = 0;
      setTimeout(typeText, delayTyping_text);
  }
}

window.onload = function() {
  if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
}





(function () {
  var galleryLightbox = document.querySelector('.gallery-lightbox');
  var galleryItems = document.querySelectorAll('.gallery-item');
  var closeButton = document.querySelector('.gallery-button-close');
  var nextButton = document.querySelector('.gallery-button-next');
  var previousButton = document.querySelector('.gallery-button-previous');

  var galleryItemIndex = 0;

  function createGalleryNavigation() {
    var navigationItemHtml = '<li class="gallery-navigation-item"><a class="gallery-navigation-button"></a></li>';
  
    var navigation = document.querySelector('.gallery-navigation');
  
    for(var i = 0; i < galleryItems.length; i++) {
    navigation.innerHTML += navigationItemHtml;
    }
  }

  createGalleryNavigation();

  var navItems = document.querySelectorAll('.gallery-navigation-button');

  function showGallery() {
    galleryLightbox.style.display = 'block';
  }

  function hideGallery() {
    galleryLightbox.style.display = 'none';
  }

  function updateNavigation() {
    for(var i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('active');
    }
  
    navItems[galleryItemIndex].classList.add('active');
  }

  function showImage() {
    var imageUrl = galleryItems[galleryItemIndex].getAttribute('gallery-full-image');
  
    var img = document.createElement('img');
    img.src = imageUrl;
    img.className = 'openItem';
  
    var galleryContent = document.querySelector('.gallery-content');
    var oldImage = galleryContent.querySelector('img');
    if (oldImage) {
      galleryContent.removeChild(oldImage);
    }
  
    galleryContent.appendChild(img);
  
    updateNavigation();
  }

  function getItemIndex(items, item) {
    return Array.from(items).indexOf(item);
  }

  function onGalleryItemClick(event) {
    var clickedGalleryItem = event.currentTarget;
  
    showGallery();
    galleryItemIndex = getItemIndex(galleryItems, clickedGalleryItem);
    showImage();
  }

  for(var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].addEventListener('click', onGalleryItemClick);
  }

  function onCloseButtonClick() {
    hideGallery();
  }

  closeButton.addEventListener('click', onCloseButtonClick);

  function onNextButtonClick() {
    galleryItemIndex++;
    if (galleryItemIndex === galleryItems.length) {
      galleryItemIndex = 0;
    }
    showImage();
  }

  nextButton.addEventListener('click', onNextButtonClick);


  function onPreviousButtonClick() {
    galleryItemIndex--;
    if (galleryItemIndex === -1) {
      galleryItemIndex = galleryItems.length - 1;
    }
    showImage();
  }

  previousButton.addEventListener('click', onPreviousButtonClick);

  function onNavigationButtonClick(event) {
    var clickedNavigationItem = event.currentTarget;
  
    galleryItemIndex = getItemIndex(navItems, clickedNavigationItem);
    showImage();
  }

  for(var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', onNavigationButtonClick);
  }
  
  
  function onKeyUp(event) {
    if (event.which === 27) {
      //Escape key up
      hideGallery();
      
    } else if (event.which === 39) {
      //Arrow right key up
      onNextButtonClick();
      
    } else if (event.which === 37) {
      //Arrow left key up
      onPreviousButtonClick();
      
    }
  }
  
  
  
  document.body.addEventListener('keyup', onKeyUp);

}());


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});





// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}