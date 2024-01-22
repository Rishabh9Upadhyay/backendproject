const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const slidebar = document.querySelectorAll(".sidebar span");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

let arr = Array.from(slidebar);

// arr.forEach(element => {
//     element.addEventListener("click",()=>{
//         element.classList.add("active")
//     })
// });
arr.forEach((Element) => {
    Element.addEventListener('click', () => {
        Element.classList.add("active")
    })
})

const theme = document.querySelector(".theme-toggler")
// theme.addEventListener('click',()=>{
//     if(document.body.style.background=='white'){
//         document.body.style.background='black'

//     }else{
//         document.body.style.background='white'

//     }
// })
theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    theme.querySelector('span:nth-child(1)').classList.toggle('active');
    theme.querySelector('span:nth-child(2)').classList.toggle('active');
})