window.onload = function(){
    changeHomeColor()
    
  }
  function changeHomeColor(){
  document.getElementById('item_home').classList.add('active')
  }
  
  function showPresentationCode(){
  
  document.querySelector('.presentation').innerHTML = `
  <div class="container_presentation">
   <div class="dark_mode_container">
      <a class="item_5" href="#"><img class="fa-moon-o" src="/images/sun.png" alt=""></a>
    <div class="night-day"><p id="paragraph_dark_mode">dark mode</p></div>
  </div>
  <div class="container_presentation_img">
     <img id="personal_img" src="/images/me.jpg" alt="Bradley" />
    <div class="add_photo"> <a href="#"><i class="fa fa-exchange" title="change image"></i></a> </div>
    <div class="delete"><i class="fa fa-trash" title="delete image"></i></div>
  </div>
  <div class="container_header_button">
    <h1 id="content_header1">Hi, I'm <span id="myName">Mirel</span>!</h1> 
    <div class="buttons">
      <i id="change_content_btn" class="fa fa-pencil" aria-hidden="true">   Edit</i>
      <input type="text" id="newInputName">
      <button id="save_newName_btn">save</button>
    </div>
  </div>
  <i id="editPresentationPencil" class="fa fa-pencil" aria-hidden="true">   Edit</i>
  <h2 id="header2_content">
    I'm a <i class="jwd">Junior Web Developer</i> based in ( <i class="fa fa-map-marker"></i> Cluj-Napoca ). <br />
    I started to learn Web Development 7 months ago, and i'm very
    passionate and dedicated to my work. <br />
    I enjoy every step of the design process.
  </h2>
  <textarea id="content_presentation"></textarea>
  <button id="save_new_content_presentation_btn">save</button>
  </div>
  `}
  showPresentationCode()
  
  
  document.getElementById('editPresentationPencil').addEventListener('click',showTextarea)
  
  function showTextarea(){
    document.getElementById('content_presentation').value = document.getElementById('header2_content').textContent
    document.getElementById('content_presentation').style.margin = '0 auto'
    document.getElementById('content_presentation').style.display = 'block'
    document.getElementById('save_new_content_presentation_btn').style.margin = '0 auto'
    document.getElementById('save_new_content_presentation_btn').style.display = 'block'
    
  }
  
  document.getElementById('save_new_content_presentation_btn').addEventListener('click',saveNewContentPresentation)
  
  function saveNewContentPresentation(){
    document.getElementById('header2_content').textContent = document.getElementById('content_presentation').value
    setTimeout(() => {
      document.getElementById('content_presentation').style.display = 'none'
      document.getElementById('save_new_content_presentation_btn').style.display = 'none'
    }, 300);
  }
  
  // ===== EDUCATION CODE
  function showEducationCode(){
    document.querySelector(".education_section").innerHTML = `
    <div class="container_education">
              <div class="container_header_1">
                <p id="education_paragraph" class="paragraph_1"><i class="fa fa-graduation-cap"></i> Education <i class="fa fa-pencil" id="show_editFormSchool" aria-hidden="true">   Edit</i></p>
              </div>
              <div class="content">
                <div class="container_content">
                  <div class="period"><i class="fa fa-calendar"></i> 
                  <p id="school_year">2010-2015</p>
                  </div>
                  <div class="school_info">
                    <p class="degree_highSchool">
                      - High School / Vocational school: Contability
                    </p>
                    <span class="info_school">Economic Technical Institute, Ceprano,FR (Italy)</span>
                      <div class="edit_info_school">
                       <form id="form_school">
                         <i class="fa fa-times" id="close_form_school"></i>
                         <input type=text id="input_FormSchool1">
                         <input type=text id="input_FormSchool2">
                         <input type=text id="input_FormSchool3">
                         <p> <b>Web Development Course</b></p>
                         <input type=text id="input_FormSchool4">
                         <input type=text id="input_FormSchool5">
                         <input type=text id="input_FormSchool6">
                         <input type=text id="input_FormSchool7">
                         <input type=text id="input_FormSchool8">
                         <input type=text id="input_FormSchool9">
                         <input type=text id="input_FormSchool10">
                         <input type=text id="input_FormSchool11">
                      </form>
                       <button id="save_new_info_school_btn">save</button>
                      </div>
                    <div class="period"><i class="fa fa-calendar" id="period_course"> Jan 2020 - Aug 2020</i></div>
                     <p class="degree_highSchool" id="course">- Web Development, Accredited course/ Informal School of It.</p>
                    <div class="course_program">  
                      <ul class="program_list">
                       <li id="item1">HTML5, and CSS3: how to build a User Interface.</li>
                       <li id="item2">JavaScript: how to use variables, functions, objects, scope, AJAX, DOM, ES6, JSON, BOM.</li>
                       <li id="item3">OOP: basics about classes, objects and inheritance.</li>
                       <li id="item4">GIT: learned the principles and basic commands.</li>
                       <li id="item5">JQuery basics: selectors, events, hide/show,animate, css().</li>
                       <li id="item6">REACT basics: render HTML, components, props, state, lifecycle, events.</li>
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
            </div>
    `
  }
  showEducationCode()
  
  document.getElementById('show_editFormSchool').addEventListener('click',showEditFormSchool)
  
  function showEditFormSchool(){
    document.querySelector('.edit_info_school').style.display = 'block'
    document.getElementById('input_FormSchool1').value = document.getElementById('school_year').innerHTML
    document.getElementById('input_FormSchool2').value = document.querySelector('.degree_highSchool').innerHTML
    document.getElementById('input_FormSchool3').value = document.querySelector('.info_school').innerHTML
    document.getElementById('input_FormSchool4').value = document.getElementById('period_course').textContent
    document.getElementById('input_FormSchool5').value = document.getElementById('course').innerHTML
    document.getElementById('input_FormSchool6').value = document.getElementById('item1').innerHTML
    document.getElementById('input_FormSchool7').value = document.getElementById('item2').innerHTML
    document.getElementById('input_FormSchool8').value = document.getElementById('item3').innerHTML
    document.getElementById('input_FormSchool9').value = document.getElementById('item4').innerHTML
    document.getElementById('input_FormSchool10').value = document.getElementById('item5').innerHTML
    document.getElementById('input_FormSchool11').value = document.getElementById('item6').innerHTML
  
  }
  
  document.getElementById('close_form_school').addEventListener('click',closeEditFormSchool)
  function closeEditFormSchool(){
    document.querySelector('.edit_info_school').style.display = 'none'
    document.getElementById('school_year').innerHTML = document.getElementById('input_FormSchool1').value
  }
  
  document.getElementById('save_new_info_school_btn').addEventListener('click',saveEditFormSchool)
  function saveEditFormSchool(){
    document.getElementById('school_year').innerHTML = document.getElementById('input_FormSchool1').value
    document.querySelector('.degree_highSchool').innerHTML = document.getElementById('input_FormSchool2').value
    document.querySelector('.info_school').innerHTML = document.getElementById('input_FormSchool3').value
    document.getElementById('period_course').textContent =  document.getElementById('input_FormSchool4').value
    document.getElementById('course').innerHTML =  document.getElementById('input_FormSchool5').value
    document.getElementById('item1').innerHTML = document.getElementById('input_FormSchool6').value
    document.getElementById('item2').innerHTML = document.getElementById('input_FormSchool7').value
    document.getElementById('item3').innerHTML = document.getElementById('input_FormSchool8').value
    document.getElementById('item4').innerHTML =   document.getElementById('input_FormSchool9').value
    document.getElementById('item5').innerHTML = document.getElementById('input_FormSchool10').value 
    document.getElementById('item6').innerHTML = document.getElementById('input_FormSchool11').value
  
  }
  
  // ===== END EDUCATION CODE
  
  
  const changeContentBtn = document.getElementById('change_content_btn')
  changeContentBtn.addEventListener('click',showInput)
  
  function changeName(){
  
    if(document.getElementById('newInputName').value.length  > 10){
      alert('Name must contain 10 characters or less')
    } 
   
    
  }
  document.getElementById('save_newName_btn').addEventListener('click',saveNewName)
  function saveNewName(){
    document.getElementById('myName').innerHTML = document.getElementById('newInputName').value
    setTimeout(()=>{
      document.getElementById('newInputName').value = ''
      document.getElementById('newInputName').style.display ='none'
      document.getElementById('save_newName_btn').style.display ='none'
    },500)
  }
  
  function showInput(){
    document.getElementById('newInputName').style.display = 'block'
    document.getElementById('save_newName_btn').style.display = 'block'
    changeName()
  }
  
  //DELETE PHOTO === ADD PHOTO CODE
  const cart_delete = document.querySelector('.fa-trash')
  cart_delete.addEventListener('click',deleteProfilePhoto)
  
  function deleteProfilePhoto(){
    const image = document.getElementById('personal_img')
    const container_image = document.querySelector('.container_presentation_img')
      image.remove()
      container_image.style.height = '230px'
      container_image.style.width = '230px'
      container_image.style.borderRdius = '100%'
  
  }
  //CHANGE PROFILE PHOTO CODE 
  
  const change_photo = document.querySelector('.fa-exchange')
  change_photo.addEventListener('click',changeImageProfile)
  let image_tracker = 'f'
  
  
  function changeImageProfile(){
    let first_image = document.getElementById('personal_img')
   if(image_tracker == 'f'){
     first_image.src = '/images/1.jpg'
     image_tracker = 's'
   } else if(image_tracker == 's'){
     first_image.src = '/images/3.jpg'
     image_tracker = 'g'
   } else if(image_tracker == 'g'){
     first_image.src = '/images/4.jpg'
     image_tracker = 'h'
   } else if(image_tracker == 'h'){
     first_image.src = '/images/me.jpg'
     image_tracker = 'f'
   }
  }
  
  // END CHANGE PROFILE PHOTO CODE 
  
  //HOBBIES SECTION
  
  function showHobbiesSection(){
  
  document.querySelector('.hobbies_section').innerHTML = `
    <h3 id="header3_Professional_experience"> <i class="fa fa-suitcase"></i> Professional experience <i class="fa fa-pencil" id="show_editProfessionalExperience" aria-hidden="true">   Edit</i></h3>
    <p id="second_job"><i class="fa fa-calendar"> March 2019 - August 2019</i></p>
    <p id="position_second_job">Customer support agent</p>
    <p id="company_name">Vida xl, Cluj-Napoca</p>
    <p id="first_job"><i class="fa fa-calendar"> September 2015 - March 2019</i></p>
    <p id="position_first_job">Customer services agent</p>
    <p id="fJob_companyName">Contact Center Srl, Cluj-Napoca</p>
    <div id="container_p_experience">
    <form id="form_p_experience">
     <i class="fa fa-times" id="close_form_p_experience"></i>
     <input type="text" id="input1">
     <input type="text" id="input2">
     <input type="text" id="input3">
     <input type="text" id="input4">
     <input type="text" id="input5">
     <input type="text" id="input6">
    </form>
     <button id="save_form_p_experienceBtn">save</button>
    </div>
    <h3 id="objective_header"> <i class="fa fa-bullseye"></i> OBJECTIVE <i class="fa fa-pencil" id="show_editObjective" aria-hidden="true">   Edit</i></h3>
    <p id="objective_content">To obtain a position as a Junior Web Developer and to improve my skills.</p>
    <input type="text" id="objective_newContent">
    <button id="save_objective_newContent">save</button>
    <h3 id="skills_header"> <i class="fa fa-book"></i> SKILLS <i class="fa fa-pencil" id="show_editSkills" aria-hidden="true">   Edit</i></h3>
    <p id="skills_content"> <span class="html">HTML</span>, <span class="css">CSS</span>, <span class="js">JAVASCRIPT</span></p>
    <input type="text" id="skills_newContent">
    <button id="save_skills_newContent">save</button>
    <h3 id="languages_header"> <i class="fa fa-globe"></i> LANGUAGES <i class="fa fa-pencil" id="show_editLanguages" aria-hidden="true">   Edit</i></h3>
    <p id="languages_content">Fluent Italian, conversational English.</p>
    <input type="text" id="languages_newContent">
    <button id="save_languages_newContent">save</button>
    <h3 id="interests_header"> <i class="fa fa-map-marker"></i> INTERESTS <i class="fa fa-pencil" id="show_editInterests" aria-hidden="true">   Edit</i></h3>
    <p id="interests_content">Travel</p>
    <input type="text" id="travel_newContent">
    <button id="save_interests_newContent">save</button>
    <h3 id="hobbies_header"> <i class="fa fa-hourglass-start"></i> HOBBIES <i class="fa fa-pencil" id="show_editHobbies" aria-hidden="true">   Edit</i></h3>
    <div class="container_hobbies"> 
       <p id="hobbies_content">When i have some free time i like cooking , i like to go to gym , i like hiking and i like to go in the central park, buy some food and stay on a bench and breathe fresh air.</p>
       <textarea id="hobbies_newContent"></textarea>
       <button id="save_hobbies_newContent">save</button>
    </div>
    
  `
  }
  
  showHobbiesSection()
  
  document.getElementById('show_editProfessionalExperience').addEventListener('click',showEditFormExperience)
  function showEditFormExperience(){
    document.getElementById('container_p_experience').style.display = 'block'
    document.getElementById('input1').value = document.getElementById('second_job').textContent
    document.getElementById('input2').value = document.getElementById('position_second_job').textContent
    document.getElementById('input3').value = document.getElementById('company_name').textContent
    document.getElementById('input4').value = document.getElementById('first_job').textContent
    document.getElementById('input5').value = document.getElementById('position_first_job').textContent
    document.getElementById('input6').value = document.getElementById('fJob_companyName').textContent
  }
  
  document.getElementById('close_form_p_experience').addEventListener('click',closeFormEperience)
  function closeFormEperience(){
    document.getElementById('container_p_experience').style.display = 'none'
  }
  
  document.getElementById('save_form_p_experienceBtn').addEventListener('click',saveFormExperience)
  
  function saveFormExperience(){
    document.getElementById('second_job').textContent = document.getElementById('input1').value
    document.getElementById('position_second_job').textContent = document.getElementById('input2').value
    document.getElementById('company_name').textContent = document.getElementById('input3').value
    document.getElementById('first_job').textContent = document.getElementById('input4').value 
    document.getElementById('position_first_job').textContent = document.getElementById('input5').value
    document.getElementById('fJob_companyName').textContent = document.getElementById('input6').value
  }
  
  
  document.getElementById('show_editObjective').addEventListener('click',showObjectiveInput)
  function showObjectiveInput(){
  document.getElementById('objective_newContent').style.display = 'block'
  document.getElementById('save_objective_newContent').style.display = 'block'
  document.getElementById('objective_newContent').value = document.getElementById('objective_content').textContent
  }
  
  document.getElementById('save_objective_newContent').addEventListener('click',saveObjectiveNewContent)
  
  function saveObjectiveNewContent(){
  
    document.getElementById('objective_content').textContent = document.getElementById('objective_newContent').value 
    setTimeout(() => {
      document.getElementById('objective_newContent').style.display = 'none'
      document.getElementById('save_objective_newContent').style.display = 'none'
    }, 300);
  
  }
  
  
  document.getElementById('show_editSkills').addEventListener('click',showSkillsInput)
  
  function showSkillsInput(){
    document.getElementById('skills_newContent').style.display = 'block'
    document.getElementById('save_skills_newContent').style.display = 'block'
    document.getElementById('skills_newContent').value = document.getElementById('skills_content').textContent
  }
  
  document.getElementById('save_skills_newContent').addEventListener('click',saveSkillsNewContent)
  
  function saveSkillsNewContent(){
    
    document.getElementById('skills_content').textContent = document.getElementById('skills_newContent').value 
    setTimeout(() => {
      document.getElementById('skills_newContent').style.display = 'none'
      document.getElementById('save_skills_newContent').style.display = 'none'
    }, 300);
  
  }
  
  document.getElementById('show_editLanguages').addEventListener('click',showLanguagesInput)
  
  function showLanguagesInput(){
    document.getElementById('languages_newContent').style.display = 'block'
    document.getElementById('save_languages_newContent').style.display = 'block'
    document.getElementById('languages_newContent').value = document.getElementById('languages_content').textContent
  }
  
  document.getElementById('save_languages_newContent').addEventListener('click',saveLanguagesNewContent)
  
  function saveLanguagesNewContent(){
    
    document.getElementById('languages_content').textContent = document.getElementById('languages_newContent').value
    setTimeout(() => {
      document.getElementById('languages_newContent').style.display = 'none'
      document.getElementById('save_languages_newContent').style.display = 'none'
    }, 300); 
  
  }
  
  document.getElementById('show_editInterests').addEventListener('click',showInterestsInput)
  
  function showInterestsInput(){
    document.getElementById('travel_newContent').style.display = 'block'
    document.getElementById('save_interests_newContent').style.display = 'block'
    document.getElementById('travel_newContent').value = document.getElementById('interests_content').textContent
  }
  
  document.getElementById('save_interests_newContent').addEventListener('click',saveInterestsNewContent)
  
  function saveInterestsNewContent(){
    
    document.getElementById('interests_content').textContent = document.getElementById('travel_newContent').value
    setTimeout(() => {
      document.getElementById('travel_newContent').style.display = 'none'
      document.getElementById('save_interests_newContent').style.display = 'none'
    }, 300); 
  
  }
  
  document.getElementById('show_editHobbies').addEventListener('click',showHobbiesInput)
  
  function showHobbiesInput(){
    document.getElementById('hobbies_newContent').style.display = 'block'
    document.getElementById('save_hobbies_newContent').style.display = 'block'
    document.getElementById('hobbies_newContent').value = document.getElementById('hobbies_content').textContent
  }
  
  document.getElementById('save_hobbies_newContent').addEventListener('click',saveHobbiesNewContent)
  
  function saveHobbiesNewContent(){
    
    document.getElementById('hobbies_content').textContent = document.getElementById('hobbies_newContent').value 
    setTimeout(() => {
      document.getElementById('hobbies_newContent').style.display = 'none'
      document.getElementById('save_hobbies_newContent').style.display = 'none'
    }, 300);
  
  }
  
  // END HOBBIES SECTION
  
  function showIconsContact(){
   document.querySelector('.contact_icons').innerHTML = `
   <div class="container_contact_icons">
    <div class="box_1 box">
    <a href="https://www.facebook.com/mirel.bradley" target="_blank"><i class="fa fa-facebook-f" title="facebook"></i></a>
   </div>
  
   <div class="box_2 box">
    <a href="https://www.instagram.com/alldaybradley/" target="_blank"><i class="fa fa-instagram" title="instagram"></i></a>
   </div>
  
   <div class="box_3 box">
    <a href="https://www.linkedin.com/in/mirel-mandrut-294a74191/"target="_blank"><i class="fa fa-linkedin" title="linkedin"></i></a>
   </div>
  
   <div class="box_4 box">
    <a href="https://unsplash.com/@bradleymirel" target="_blank"><i class="fa fa-camera-retro" title="unsplash"></i></a>
  </div>
   </div>
  `
  }
  
  showIconsContact()
  
  
  //DARK MODE CODE
  document.querySelector('.night-day').addEventListener('click',darkMode)
  
  function darkMode(){
    document.getElementById('body').classList.toggle('dark-mode')
  
    if(document.getElementById('body').classList == 'dark-mode'){
      document.querySelector('.fa-moon-o').src = '/images/moon4.png'
      document.querySelector('.night-day').style.color = 'white'
      document.getElementById('paragraph_dark_mode').textContent = 'light mode'
  
    } else {
      document.querySelector('.fa-moon-o').src = '/images/sun.png'
      document.querySelector('.night-day').style.color = 'black'
      document.getElementById('paragraph_dark_mode').textContent = 'dark mode'
   
    }
    
  }
  // END DARK MODE CODE
  
  // ===== SCROLL BACK TO TOP BUTTON CODE
  
  const main = document.getElementById("body");
  
  const scrollTopBtn = document.createElement("button");
  
  scrollTopBtn.innerHTML = "top";
  
  scrollTopBtn.classList.add("scroll_back_to_top");
  
  main.appendChild(scrollTopBtn);
  
  window.onscroll = function () {
    scrollPage();
  };
  
  function scrollPage() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      document.querySelector('.dark_mode_container').style.display = 'none'
    } else {
      document.querySelector('.dark_mode_container').style.display = 'block'
    }
  }
  
  scrollTopBtn.addEventListener("click", scrollTop);
  
  function scrollTop() {
    document.body.scrollTop = 0;
  
    document.documentElement.scrollTop = 0;
  }
  // ===== END SCROLL BACK TO TOP BUTTON CODE