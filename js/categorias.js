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
    } }

const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};