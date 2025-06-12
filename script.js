let hamburger = document.querySelector(".hamnav");
let closebtn = document.querySelector(".closebtn");
let menu = document.querySelector(".mobilemenu");


hamburger.addEventListener('click', () => {

    menu.classList.add('active');

    hamburger.style.display = "none";
    closebtn.style.display = "block";
    
   
  


});

closebtn.addEventListener("click", ()=>{
    menu.classList.remove("active");

    closebtn.style.display = "none";
    hamburger.style.display = "block";
})


