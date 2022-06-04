let burgerBtn= document.querySelector('.burger');
let menuBlock= document.querySelector('.menu');
let closeMenuBtn= document.querySelector('.menu__close-btn')
let menuLinks= document.querySelectorAll('.menu__link')

burgerBtn.addEventListener('click',e=>{
    menuBlock.classList.add('open-menu');
})
closeMenuBtn.addEventListener('click',e=>{
    menuBlock.classList.remove('open-menu');
})

const setCloseMenu=()=>{
    if(window.screen.width>668 || window.screen.width >1024){
        if(menuBlock.classList.contains('open-menu')){
            menuBlock.classList.remove('open-menu');
        }
    }
}

menuLinks.forEach(link=>{
    link.addEventListener('click',e=>{
        menuBlock.classList.remove('open-menu');
    })
})

window.addEventListener('resize',setCloseMenu)
setCloseMenu()