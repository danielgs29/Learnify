window.onload = sticky;
 
 function sticky(){
    const header=document.querySelector("header");
    console.log(header);
    
    window.addEventListener("scroll", function (){
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    let menu =  document.querySelector('#menu-icon');
    let navbar =  document.querySelector('.navbar');
    
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };
    
    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    } 

    let cursos=document.querySelectorAll(".row");
    cursos[0].onclick=()=>{
        location.href="curso.html";
        localStorage.setItem("varia",0);
    }

}