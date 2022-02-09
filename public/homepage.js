$(window).scroll(function(){
    if ($ (window).scrollTop()){
        $('nav').addClass('sticky')
    } else {
        $('nav').removeClass('sticky')
    }

})


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function categoryFunction() {
    document.getElementById("myCategory").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.category-dropBtn')) {
      const dropDowns = document.getElementsByClassName("category-content");
    //   const i;
      for (i = 0; i < dropDowns.length; i++) {
        const openDropdown = dropDowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const container = document.querySelector('.search');
  const btn = document.querySelector('button');
  const input = document.querySelector('input');
  
  btn.addEventListener('click',()=>{
      container.classList.toggle('active')
      input.focus(active)
  
  })
// document.getElementById("menu-btn").addEventListener('click', showCard);

// function showCard(){


//     var x = document.getElementById("pop-up")
//     if(x.style.display === 'none'){
//         x.style.display ='block', x.style.transitionDelay = '1s';
//     }else{
//         x.style.display = 'none'
//     }
//     console.log(x)
// }


// function ham() {
//     var x = document.getElementById("nav-icons");
//     if(x.style.display === "block"){
//         x.style.display = "none";$(window).scroll(function(){
    
//     }) else {
//         x.style.display = "block"
//     }

// function ham() {
//     var x = document.getElementById("nav-icons");
//     if (x.style.display === "block") {
//     x.style.display = "none";
//     } else {
//     x.style.display = "block";
//     }
//      }
      

// const header = document.querySelector("header")
// window.addEventListener("scroll", () => {
//     window.scrollY
// })
// // console.log(header)


// const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector(".nav-icons");
// hamburger.addEventListener("click", mobileMenu);
// function mobileMenu(){
//     hamburger.classList.toggle("active");
//     nav.classList.toggle("active")
// }
// const navLink = document.querySelectorAll(".nav-icon");
// navLink.forEach(n => n.addEventListener("click", closeMenu));
// function closeMenu() {
//     hamburger.classList.remove("active");
//     nav.classList.remove("active")
// }

