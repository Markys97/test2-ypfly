let burgerBtn= document.querySelector('.burger');
let menuBlock= document.querySelector('.menu');
let closeMenuBtn= document.querySelector('.menu__close-btn')
let menuLinks= document.querySelectorAll('.menu__link')
let textLinks=  document.querySelectorAll('.menu__link span')

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

menuLinks.forEach((link,index,links)=>{
    link.addEventListener('click',e=>{
        menuBlock.classList.remove('open-menu');
        if(link.classList.contains('menu__link--active')){
            return true
        }else{
            links.forEach(perLink=>{
                perLink.classList.remove('menu__link--active')
            })
            link.classList.add('menu__link--active')
        }
    })
})

window.addEventListener('resize',setCloseMenu)
setCloseMenu()

// change color menu cible logic

// let url= window.location.href;
// let locationSectionActive= url.slice(-9)




