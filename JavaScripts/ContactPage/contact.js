window.onload = function(){changeContactColor()}

function changeContactColor(){
  document.getElementById('item_contact').classList.add('active')
}
//INPUT VALIDATION CODE 

document.getElementById('submit_btn').addEventListener('click',validate)

function validate(e){
e.preventDefault()

const _validUserName = '[A-Za-z]{8}';
const _validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const error_name = document.getElementById('error_name')
const error_email = document.getElementById('error_email')
const avatar = document.querySelector('.fa-user')
const envelope = document.getElementById('envelope')
const border_red = '2px solid red'
const border_green = '2px solid green'


if(!document.getElementById('input_name').value.match(_validUserName)){
  document.getElementById('input_name').style.border = border_red
  avatar.style.color = 'red'
 error_name.style.display = 'block'
} else if(document.getElementById('input_name').value.match(_validUserName)){
  document.getElementById('input_name').style.border = border_green
  avatar.style.color = 'green'
  error_name.style.display = 'none'
}

if(!document.getElementById('input_email').value.match(_validEmail)){
  document.getElementById('input_email').style.border = border_red
  envelope.style.color = 'red'
  error_email.style.display = 'block'
 
} else if(document.getElementById('input_email').value.match(_validEmail)){
  document.getElementById('input_email').style.border = border_green
  envelope.style.color = 'green'
  error_email.style.display = 'none'
}

if(document.getElementById('input_name').value.match(_validUserName) && (document.getElementById('input_email').value.match(_validEmail))){
  sendEmail()
//   window.location.href = 'mailTo:mirelmandrut94@yahoo.com'
 } 
}

// END INPUT VALIDATION CODE 

//RESET INPUT VALUE CODE
document.getElementById('reset_input_value').addEventListener('click',resetInputValue)

function resetInputValue(e){
  e.preventDefault()
 document.getElementById('input_name').style.border = '1px solid grey'
 document.getElementById('input_email').style.border = '1px solid grey'
 document.querySelector('.fa-user').style.color = 'black'
 document.getElementById('envelope').style.color = 'black'

 
 const myForm = document.getElementById('my_Form')
 myForm.reset()
 if(document.getElementById('error_name').style.display == 'block'){
  document.getElementById('error_name').style.display = 'none'
 } if(document.getElementById('error_email').style.display == 'block'){
  document.getElementById('error_email').style.display = 'none'
 }


}
// END RESET INPUT VALUE CODE

//ICONS CONTAINER CODE
function show_icons(){
  const container_icons = document.querySelector('.container_card_icons')
  container_icons.classList.add('class_container_card_icons')
  const card1 = document.createElement('div')
  card1.setAttribute('class','card')
  card1.innerHTML += `<a href="https://www.facebook.com/mirel.bradley" target="_blank"> <i class="fa fa-facebook"></i></a>`
  const card2 = document.createElement('div')
  card2.setAttribute('class','card')
  card2.innerHTML += `<a href="https://www.instagram.com/alldaybradley/" target="_blank"><i class="fa fa-instagram"></i></a>`
  const card3 = document.createElement('div')
  card3.setAttribute('class','card')
  card3.innerHTML += `<a href="https://www.linkedin.com/in/mirel-mandrut-294a74191/" target="_blank"><i class="fa fa-linkedin"></i></a>`
  const card4 = document.createElement('div')
  card4.setAttribute('class','card')
  card4.innerHTML += `<a href="https://unsplash.com/@bradleymirel" target="_blank"><i class="fa fa-camera-retro"></i></a>`
  container_icons.appendChild(card1)
  container_icons.appendChild(card2)
  container_icons.appendChild(card3)
  container_icons.appendChild(card4)
}
show_icons()

//END ICONS CONTAINER CODE


//DARK MODE CODE
document.querySelector('.night-day').addEventListener('click',darkMode)

function darkMode(){
  document.getElementById('body').classList.toggle('dark-mode')
 
  if(document.getElementById('body').classList == 'dark-mode'){
    document.querySelector('.fa-moon-o').src = '/images/moon4.png'
    dark_mode.style.color = 'white'
    document.getElementById('paragraph_dark_mode').textContent = 'light mode'

  } else {
    document.querySelector('.fa-moon-o').src = '/images/sun.png'
    dark_mode.style.color = 'black'
    document.getElementById('paragraph_dark_mode').textContent = 'dark mode'
  }
}
// END DARK MODE CODE

//SEND EMAIL CODE
function sendEmail() {
  (function () {
      emailjs.init("user_Nl5wfLKoSnXufsMT8bsdA");
  })();



  let name = document.getElementById('input_name').value;
  let from = document.getElementById('input_email').value;
  let message = document.getElementById('message').value;


  var templateParams = {
      to_name: name,
      from_name: from,
      message_html: message,
      person_name: name
  };

  // send request
  emailjs.send('gmail','template_dTtINCkM',templateParams)
      .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('email was sent')
      }, function (error) {
          console.log('FAILED :(', error);
      });
}
//END SEND EMAIL CODE