function showHeader(){
    document.getElementById('header').innerHTML = `
    <div class="container_logo">
      <p class="logo-content">MB</p>
    </div>
    <nav>
      <ul>
        <li class="item_1"><a id="item_home" href="#">Home</a></li>
        <li class="item_2"><a href="/Pages/about.html">About</a></li>
        <li class="item_3"><a href="/Pages/projects.html">Projects</a></li>
        <li class="item_4"><a href="/Pages/contact.html">Contact</a></li>
      </ul>
    </nav>
     <button class="email_me_btn">
      <a href="mailto:mirelmandrut94@yahoo.com">Email me <i class="fa fa-envelope"></i></a>
     </button>
     <p id="phone_number"> <i class="fa fa-phone"></i> +40720679509</p>
    `
  }
  showHeader()