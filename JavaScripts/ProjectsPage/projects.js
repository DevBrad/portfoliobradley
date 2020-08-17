window.onload = () =>{
    changeProjectsColor()
    cards()
}

function changeProjectsColor(){
 document.getElementById('projects_item').classList.add('active')
}

//=====PROJECTS CONTAINER CODE=====
function cards(){
    const section = document.querySelector('.projects_section')
    const container_cards = document.createElement('div')
    container_cards.setAttribute('class','container_cards_class')
    container_cards.innerHTML += `<div id='card_1' class="card"><a href="https://crinel.github.io/myIMDB-13.1/pages/register.html" target="_blank" id="a1_link">show project</a><img src="/images/register.PNG"></div>
    <div id="card_2" class="card"> <a href="/images/dato5.PNG" target="_blank" id="a2_link">show project</a> <img src="/images/dato5.PNG"></div>
    <div id="card_3" class="card"> <a href="/images/dato6.PNG" target="_blank" id="a3_link">show project</a> <img src="/images/dato6.PNG"> </div>
    <div id="card_4" class="card"> <a href="/images/dato7.PNG" target="_blank" id="a4_link">show project</a> <img src="/images/dato7.PNG"> </div>
    <div id="card_5" class="card"> <a href="/images/dato8.PNG" target="_blank" id="a5_link">show project</a> <img src="/images/dato8.PNG"> </div>
    <div id="card_6" class="card"> <a href="/images/dato10.PNG" target="_blank" id="a6_link">show project</a> <img src="/images/dato10.PNG"> </div>
    `
    section.appendChild(container_cards)
}
//===== END PROJECTS CONTAINER CODE=====

//DARK MODE CODE
const dark_mode = document.querySelector('.night-day')
dark_mode.addEventListener('click',darkMode)

function darkMode(){
  const body = document.getElementById('body');
  const paragraph_dark_mode = document.getElementById('paragraph_dark_mode')
  const moon = document.querySelector('.fa-moon-o')
  body.classList.toggle('dark-mode')
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