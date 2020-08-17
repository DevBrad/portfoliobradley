function showFooter(){

    const today = new Date();
    
    const year = today.getFullYear();
    
    const footer = document.getElementById("footer");
    
    footer.innerHTML =
      "<span>Copyright &copy;" +
      " " +
      year +
      " " +
      "Mandrut Mirel Razvan" +
      "</span>";
    
    footer.classList.add("class_footer");
    }
    
    showFooter()