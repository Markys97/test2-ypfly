let burgerBtn= document.querySelector('.burger');
let menuBlock= document.querySelector('.menu');
let closeMenuBtn= document.querySelector('.menu__close-btn')
let menuLinks= document.querySelectorAll('.menu__link')
let textLinks=  document.querySelectorAll('.menu__link span')
let closeModalButton=  document.querySelector('.modal-form__close');
let modalBlock=  document.querySelector('.modal-form');
let openModalButtons=document.querySelectorAll('.openModalButton')
let wrapperSection= document.querySelector('.wrapper-section')
let header= document.querySelector('.header')
 
// open menu on mobile screen
burgerBtn.addEventListener('click',e=>{
    menuBlock.classList.add('open-menu');
})

// close menu on mobile screen
closeMenuBtn.addEventListener('click',e=>{
    menuBlock.classList.remove('open-menu');
})

// close menu function
const setCloseMenu=()=>{
    if(window.screen.width>668 || window.screen.width >1024){
        if(menuBlock.classList.contains('open-menu')){
            menuBlock.classList.remove('open-menu');
        }
    }
}

// set active menu link
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

// close mobile menu  when resizing screen on desktop
window.addEventListener('resize',setCloseMenu)
setCloseMenu()

// handler modal form

closeModalButton.addEventListener('click',e=>{
    modalBlock.classList.remove('open-modal')
    wrapperSection.classList.remove('sombre')
    header.classList.remove('sombre')

   
})
openModalButtons.forEach(openModalButton=>{
    openModalButton.addEventListener('click',e=>{
        modalBlock.classList.add('open-modal')
        wrapperSection.classList.add('sombre')
        header.classList.add('sombre')

       
    })
    
})

