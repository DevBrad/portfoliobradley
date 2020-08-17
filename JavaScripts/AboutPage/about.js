
window.onload = function(){
    changeItemColor()
}

function changeItemColor(){
document.getElementById('item_about').classList.add('active')
} 

//ABOUT ME CODE
function showAboutmeContainer(){
  document.querySelector('.container_about_me').innerHTML = `
  <h1 class="header1_about_me">About me</h1>
  <p class="p1_about_me"><span class="upperCase">H</span>ello my name is Mirel, i'm 25 years old and i live in Cluj-Napoca (Romania). <br>
  <span class="upperCase">I</span> lived in Italy for about 16 years with my family and i frequented the entire school there. 5 years ago my father decided that we all should return here in Cluj because life had become really difficult there. <br>
  <span class="upperCase">S</span>ince i am here in Cluj i worked in some companies but i didn't like the work that i made and i decided to change something in my life. <br>
  <span class="upperCase">I</span>  started to learn Web Development 8 months ago at the Informal School of It, during this course i can say that i discovered a passion that i haven't known to have. <br>
  <span class="upperCase">N</span>ow at the moment i with to find a job posision as a Junior Web developer in some company here in Cluj to improve my skills acquired so far.
  </p>`
}
showAboutmeContainer()
// END ABOUT ME CODE

//SLIDER SECTION CODE
function showSliderImages(){

 document.querySelector('.slider').innerHTML = `
 <div class="container_slide_images_about_me">
  <img class="mySlides" src="/images/1.jpg" alt="me">
  <img class="mySlides" src="/images/2.jpg" alt="me">
  <img class="mySlides" src="/images/3.jpg" alt="me">
  <img class="mySlides" src="/images/4.jpg" alt="me">
  <img class="mySlides" src="/images/5.jpg" alt="me">
  <img class="mySlides" src="/images/6.jpg" alt="me">
  <img class="mySlides" src="/images/7.jpg" alt="me">
  <img class="mySlides" src="/images/8.jpg" alt="me">
 </div>`
 
}
showSliderImages()
//END SLIDER SECTION CODE

// ===== SLIDER IMAGES CODE =====
let myIndex = 0;
function carousel() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > slides.length) {myIndex = 1}    
  slides[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}

carousel();


//DARK MODE CODE
const dark_mode = document.querySelector('.night-day')
dark_mode.addEventListener('click',darkMode)

function darkMode(){
  const body = document.getElementById('body').classList.toggle('dark-mode')
  const paragraph_dark_mode = document.getElementById('paragraph_dark_mode')
  const moon = document.querySelector('.fa-moon-o')
  
  if(body.classList == 'dark-mode'){
    moon.src = '/images/moon4.png'
    dark_mode.style.color = 'white'
    paragraph_dark_mode.textContent = 'light mode'
  } else {
    moon.src = '/images/sun.png'
    dark_mode.style.color = 'black'
    paragraph_dark_mode.textContent = 'dark mode'
  }
  
}
// END DARK MODE CODE