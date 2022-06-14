let burgerBtn= document.querySelector('.header__burger');
let menuBlock= document.querySelector('.menu');
let closeMenuBtn= document.querySelector('.menu__close-btn')
let menuLinks= document.querySelectorAll('.menu__link')
let textLinks=  document.querySelectorAll('.menu__link span')
let closeModalButton=  document.querySelector('.modal-form__close');
let modalBlock=  document.querySelector('.modal-form');
let openModalButtons=document.querySelectorAll('.openModalButton')
let wrapperSection= document.querySelector('.wrapper-section')
let header= document.querySelector('.header')
let phoneNumberText= document.querySelector('.tel__link')
let btnFixed= document.querySelector('.button-fix')
let buttonPresentation=document.querySelector('.presentation__btn')
let bodyElt= document.querySelector('body');
let logo= document.querySelector('.logo');
let containerCible =document.querySelector('.cible__container')

// open menu on mobile screen
burgerBtn.addEventListener('click',function(e){

    e.stopImmediatePropagation()
    menuBlock.classList.add('open-menu');
    bodyElt.classList.add('body');
    logo.classList.add('hide')
    phoneNumberText.classList.add('hide')
    logo.ariaDisabled=true
    this.classList.add('hide')

  
})

function closeMenu(){
    menuBlock.classList.remove('open-menu');
    bodyElt.classList.remove('body');
    logo.classList.remove('hide')
    phoneNumberText.classList.remove('hide')
    logo.ariaDisabled=false
    burgerBtn.classList.remove('hide')
   
}


// close menu on mobile screen
closeMenuBtn.addEventListener('click',function(e){
    closeMenu()

  
})


// close menu function
const setCloseMenu=()=>{
    if(window.screen.width>668 || window.screen.width >1024){
        if(menuBlock.classList.contains('open-menu')){
            closeMenu()
        }
    }
}

// set active menu link
menuLinks.forEach((link,index,links)=>{
    link.addEventListener('click',e=>{
        closeMenu()
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
    e.stopImmediatePropagation()
    modalBlock.classList.remove('open-modal')
    header.style.zIndex=10000
    // textLinks.forEach(text=> text.classList.remove('sombre-text'))
    // phoneNumberText.classList.remove('sombre-text')
    // btnFixed.style.opacity=1
    // buttonPresentation.style.zIndex=100
    
    bodyElt.classList.remove('body')
    
   
})
openModalButtons.forEach(openModalButton=>{
   
    openModalButton.addEventListener('click',function(e){
        e.stopImmediatePropagation()
        modalBlock.classList.add('open-modal')
        header.style.zIndex=1
        // wrapperSection.classList.add('sombre')
        // textLinks.forEach(text=> text.classList.add('sombre-text'))
        // phoneNumberText.classList.add('sombre-text')
        // btnFixed.style.opacity=0.2
        // buttonPresentation.style.zIndex=-100
        bodyElt.classList.add('body');
       
        console.log(this)
    })
    
})

window.addEventListener('click',(e)=>{
    
    e.stopImmediatePropagation()
    let allNodeInModal= [...modalBlock.getElementsByTagName("*")]
    let inBurgerAllNodes=[...burgerBtn.childNodes]
    let allNodeInMenu=[...menuBlock.getElementsByTagName("*")]
   
   
 

    if(modalBlock.classList.contains('open-modal')){
        if(! allNodeInModal.includes(e.target) && ! inBurgerAllNodes.includes(e.target)){
                modalBlock.classList.remove('open-modal')
                bodyElt.classList.remove('body');
                header.style.zIndex=10000
        }
    }

    if(menuBlock.classList.contains('open-menu')){
      if(e.target !== menuBlock && !allNodeInMenu.includes(e.target)){
         closeMenu()
      }else{
        console.log('dedans')
        header.style.zIndex=10000
      }
    }


    

})
// handler input name
let nameInput= document.querySelector('input[name=name]');
let initValueInputName;

nameInput.addEventListener('mouseenter',e=>{
    initValueInputName=e.target.placeholder
    e.target.placeholder=''
})
nameInput.addEventListener('mouseleave',e=>{
    e.target.placeholder=initValueInputName
})

// handler click on cible item

let cibleItems= document.querySelectorAll('.item-cible');

cibleItems.forEach((cibleItem,index,list)=>{
    cibleItem.addEventListener('click',function(e){
     if(window.screen.width <667){
        let cibleContainer=this.querySelector('.item-cible__container')
        list.forEach(el=>{
            let elContainer= el.querySelector('.item-cible__container')
            if(elContainer.classList.contains('hover-effect') && cibleContainer != elContainer){
                elContainer.classList.toggle('hover-effect')
            }
        })
        cibleContainer.classList.toggle('hover-effect')
     }
       
       
    })
})