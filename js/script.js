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
    for (let element of cursos) {
        element.addEventListener("click", () => {
            sessionStorage.clear();
            location.href="curso.html";
            sessionStorage.setItem("titulo",element.querySelector("h3").textContent);
        });
      }
      
    }
     