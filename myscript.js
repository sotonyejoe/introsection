var sideNav = document.querySelector(".bugger");
var closeBtn = document.querySelector(".close-menu");
var modal = document.querySelector(".modal");


sideNav.addEventListener('click', () =>{
    modal.style.right= "0";
})
closeBtn.addEventListener('click', () =>{
    modal.style.right = "-260px";
})
