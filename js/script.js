window.onload = sticky;
 
 function sticky(){
    const header=document.querySelector("header");
    console.log(header);
    
    window.addEventListener("scroll", function (){
        header.classList.toggle("sticky", window.scrollY > 0);
    });

}