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
    title.tabIndex="0";

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
          title: "1. Introduccion",
        },
        {
          src: "https://www.youtube.com/embed/CdfMG_Qy00E",
          title: "2. Conceptos basicos",
        },
        {
          src: "https://www.youtube.com/embed/F-cDjBkSRT4",
          title: "3. Etiquetas",
        },
        {
          src: "https://www.youtube.com/embed/Wjgv2GJUe2I",
          title: "4. Estructura del cuerpo",
        },
        {
          src: "https://www.youtube.com/embed/23U19omettA",
          title: "5. Etiqueta fig y figCapture",
        },
        {
          src: "https://www.youtube.com/embed/F-cDjBkSRT4",
          title: "6. Modelo Caja Contenedor",
        },
      ];
    }
  
    if (value == "Curso Completo De JavaScript") {
       videos = [
        {
          src: "https://www.youtube.com/embed/m2o-eeqwgkQ",
          title: "1. Introduccion a js",
        },
        {
          src: "https://www.youtube.com/embed/HwJC6vo2q5w",
          title: "2. Concejos Iniciales",
        },
        {
          src: "https://www.youtube.com/embed/wwkKXhOAgqo",
          title: "3.Unir Html y js",
        },
        {
          src: "https://www.youtube.com/embed/uhqrupAZchU",
          title: "4. Rutas Absolutas",
        },
        {
          src: "https://www.youtube.com/embed/Iwiwl2ySwx8",
          title: "5. Variables y constantes",
        },
        {
          src: "https://www.youtube.com/embed/Iwiwl2ySwx8",
          title: "6. Datos Primitivos",
        }
      ];
    }

    if (value == "Curso De Marketing Digital") {
      videos = [
       {
         src: "https://www.youtube.com/embed/ZSkZs_OtkkQ",
         title: "1. Que es Marketing",
       },
       {
         src: "https://www.youtube.com/embed/dWzjtGet1fg",
         title: "2. Que es la publicidad",
       },
       {
        src: "https://www.youtube.com/embed/RPndJZgp0Jk",
        title: "3. Tipos de Marketing",
      },
     ];
   }

   if (value == "Curso De Docker") {
    videos = [
     {
       src: "https://www.youtube.com/embed/5z2kYFG3OfY",
       title: "1. Presentación",
     },
     {
       src: "https://www.youtube.com/embed/N9vesm4bGHE",
       title: "2. Entorno de Desarrollo",
     },
     {
      src: "https://www.youtube.com/embed/EU6kjP31EO8",
      title: "Docker y DevOps",
    },
   ];
 }

 if (value == "Curso De Node js") {
  videos = [
   {
     src: "https://www.youtube.com/embed/e8n_9N-ZyFE",
     title: "1. Que es Node js",
   },
   {
     src: "https://www.youtube.com/embed/_2VHVIJCtGk",
     title: "2. Global Vs Window",
   }
 ];
}

    if (value == "Curso De Photoshop Avanzado") {
      videos = [
       {
         src: "https://www.youtube.com/embed/BsHUVgl1Zhc",
         title: "1. Abrir Imagenes en Photoshop",
       },
       {
         src: "https://www.youtube.com/embed/c2xY62gM6I0",
         title: "2. El espacio de trabajo",
       },
       {
        src: "https://www.youtube.com/embed/yOKMkrC7n78",
        title: "3. Las Capas en Photoshop",
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


