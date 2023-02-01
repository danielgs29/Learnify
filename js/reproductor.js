
window.onload=playlist; 

function playlist(){

var value = localStorage.getItem("variable");
console.log(value)

let listVideo = document.querySelectorAll(".video-list .vid");
let mainVideo=document.querySelector(".main-video video");
let title = document.querySelector(".main-video .video .title");

listVideo.forEach(video=>{
    video.onclick=()=>{
        listVideo.forEach(vid => vid.classList.remove("active"));
        video.classList.add("active");
        if(video.classList.contains("active")){
            let src=video.children[0].getAttribute("src");
            mainVideo.src=src;
            let text = video.children[1].innerHTML;
            title.textContent=text;
            console.log(text);
        };
    }
});

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
}