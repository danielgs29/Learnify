window.onload = sticky;
var value = sessionStorage.getItem("titulo");
console.log(value);


//cargo el header y su funcion, llamo a la funcion cargar videos
function sticky(){
    const header = document.querySelector("header");
    console.log(header);
  
    window.addEventListener("scroll", function () {
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
  
    menu.onclick = () => {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("open");
    };
  
    window.onscroll = () => {
      menu.classList.remove("bx-x");
      navbar.classList.remove("open");
    };

//pongo el titulo del curso
    let title=document.getElementById("title");
    title.textContent=value;

    cargarVideos();
}

function cargarVideos() {
    let videos;
    let container = document.querySelector(".video-list");
    let mainVideo = document.querySelector(".main-video iframe");
    let title=document.querySelector(".title")
    if (value == "Curso Completo De HTML y CSS") {
       videos = [
        {
          src: "https://www.youtube.com/embed/QC9_8nRNNHA",
          title: "1 Introduccion",
        },
        {
          src: "https://www.youtube.com/embed/CdfMG_Qy00E",
          title: "2 Conceptos basicos",
        },
        {
          src: "https://www.youtube.com/embed/F-cDjBkSRT4",
          title: "3 Etiquetas",
        },
        {
          src: "https://www.youtube.com/embed/Wjgv2GJUe2I",
          title: "4 Estructura del cuerpo",
        },
        {
          src: "https://www.youtube.com/embed/23U19omettA",
          title: "5 Etiqueta fig y figCapture",
        },
        {
          src: "https://www.youtube.com/embed/F-cDjBkSRT4",
          title: "6 Modelo Caja Contenedor",
        },
      ];
    }
  
    if (value == "Curso Completo De JavaScript") {
       videos = [
        {
          src: "https://www.youtube.com/embed/m2o-eeqwgkQ",
          title: "1 Introduccion a js",
        },
        {
          src: "https://www.youtube.com/embed/HwJC6vo2q5w",
          title: "2 Concejos Iniciales",
        },
      ];
    }
    mainVideo.src=videos[0].src
    title.textContent=videos[0].title
    let contador=0;
    //por cada video creo un apartado en la lista de reproduccion
    videos.forEach((video) => {
      let div = document.createElement("div");
      div.className = "vid";
      if(contador==0)div.classList.add("active");
      contador++
      let iframe = document.createElement("iframe");
      iframe.src = video.src;
      iframe.frameBorder=0;
      let title = document.createElement("h3");
      title.textContent = video.title;
      div.appendChild(iframe);
      div.appendChild(title);
      container.append(div);
    });

    playlist();
  }

function playlist() {

  let listVideo = document.querySelectorAll(".video-list .vid");
  let mainVideo = document.querySelector(".main-video iframe");
  let title = document.querySelector(".main-video .video .title");
  

  listVideo.forEach((video) => {
    video.onclick = () => {
      listVideo.forEach((vid) => vid.classList.remove("active"));
      video.classList.add("active");
      if (video.classList.contains("active")) {
        let src = video.children[0].getAttribute("src");
        console.log(src)
        mainVideo.src = src;
        let text = video.children[1].innerHTML;
        title.textContent = text;
        console.log(text);
      }
    };
  });

}


