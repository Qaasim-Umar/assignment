let menu = document.querySelector('#bars');
let navb =document.querySelector('.nav-links') ;

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navb.classList.toggle('active');
}