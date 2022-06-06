// Переворот экрана
if ($(window).width()<1000) {
    window.addEventListener("orientationchange", function() {
        if (window.matchMedia("(orientation: landscape)").matches) {
           location.reload();
        }
    }, false);
}
$(document).ready(function(){
    let menuLinks= $('.menu__link')
   
    const changeColorHeader=(destination)=>{
        if(destination=== 2){
            $('.menu__link').addClass('menu__link--blue')
            $('.tel__link').addClass('tel__link--blue')
            $('.logo__img path').css({
                fill:'#53CBF9'
            })
            $('.burger__row').addClass('burger__row--blue')

          }else{
            $('.menu__link').removeClass('menu__link--blue')
            $('.tel__link').removeClass('tel__link--blue')
            $('.logo__img path').css({
                fill:'#fff'
            })
            $('.burger__row').removeClass('burger__row--blue')
          }
    }

    const handlerButtonFixForDesktop=(sectionPosition)=>{
        if(sectionPosition=== 2){
                  
            $('.button-fix ').css({
                background:'#53CBF9',
            })
            $('.button-fix__text ').css({
                color:'#fff',
            })
        }else{
            $('.button-fix ').css({
                background:'#fff'
            })
            $('.button-fix__text ').css({
                
                color:'#53CBF9'
            })
            switch(sectionPosition){
                case 1:
                    $('.button-fix__text ').css({
                
                        color:'#53CBF9'
                    })
                 break;
             case 2:
                $('.button-fix__text ').css({
                
                    color:'#53CBF9'
                })
                 break
             case 3:
                $('.button-fix__text ').css({
                
                    color:'#FFA16E',
                })
                 break
             case 4:
                $('.button-fix__text ').css({
                
                    color:'#CD96EE',
                })
                 break
             case 5:
                $('.button-fix__text ').css({
                
                    color:'#F8DD97',
                })
                 break
             case 6:
                $('.button-fix__text ').css({
                
                    color:'#F0B3A5',
                })
                 break
             case 7:
                $('.button-fix__text ').css({
                
                    color:'#5AD2DADE',
                })
                 break
              default:
                  return true
                
     
            }
        }
    }
    const handlerButtonFixForMobile=(sectionPosition)=>{
       switch(sectionPosition){
           case 1:
            $('.button-fix__img circle').css({
                fill:'#fff'
            })
            $('.button-fix__img path').css({
                fill:'#53CBF9'
            })
            break;
        case 2:
            $('.button-fix__img circle').css({
                fill:'#53CBF9'
            })
            $('.button-fix__img path').css({
                fill:'#fff'
            })
            break
        case 3:
            $('.button-fix__img circle').css({
                fill:'#fff'
            })
            $('.button-fix__img path').css({
                fill:'#FFBD80'
            })
            break
        case 4:
            $('.button-fix__img circle').css({
                fill:'#fff'
            })
            $('.button-fix__img path').css({
                fill:'#C9B0F2'
            })
            break
        case 5:
            $('.button-fix__img circle').css({
                fill:'#fff'
            })
            $('.button-fix__img path').css({
                fill:'#F8DD97'
            })
            break
        case 6:
            $('.button-fix__img circle').css({
                fill:'#fff'
            })
            $('.button-fix__img path').css({
                fill:'#F0B3A5'
            })
            break
        case 7:
            $('.button-fix__img circle').css({
                fill:'#fff'
            })
            $('.button-fix__img path').css({
                fill:'#74E8E8'
            })
            break
         default:
             return true
           

       }
    }
    const setActiveLink=(position)=>{
       
        menuLinks.each((index,link)=>{
         menuLinks.each((index,link)=>{
             if($(link).hasClass('menu__link--active')){
                 $(link).removeClass('menu__link--active');
            }
            if(position === $(link).data('position')){
                $(link).addClass('menu__link--active')
            }
            if($(link).data('position')===3){
                if(position===4 || position===5){
                    $(link).addClass('menu__link--active')
                }
            }
            if($(link).data('position')===6){
                if( position===7){
                    $(link).addClass('menu__link--active')
                }
            }
           
         })
       
        })
    }
    const handlerWordFixed=(position)=>{
        let bigWord=$('.big-word')
        if(position===1){
            bigWord.css({
                zIndex:100,
            })
        }else{
            bigWord.css({
                zIndex:10,
            })
        }
       
        switch(position){
            case 1:
                bigWord.text('marketing')
                bigWord.css({
                    left:'86px'
                })
                break
            case 2:
                bigWord.text('')
                break
            case 3:
                bigWord.text('expert')
                bigWord.css({
                    left:'33px'
                })
                break
            case 4:
                bigWord.text('expert')
                bigWord.css({
                    left:'33px'
                })
                break
            case 5:
                bigWord.text('expert')
                bigWord.css({
                    left:'33px'
                })
                break
            case 6:
                bigWord.text('working')
                bigWord.css({
                    left:'33px'
                })
                break
            case 7:
                bigWord.text('case')
                bigWord.css({
                    left:'33px'
                })
                break
            default:
                return true
                break

            
        }
    }

   
    setTimeout(
      function() 
      {
        $('input[name="HIDDEN_TEXT"]').val('upfly');
      }, 3000);
      // Сбор параметров секций
    var contentParams = [], sectionParams = [];
    $('.section').each(function(index, el) {
        $(el).attr('data-lenght', ++index);
        // Параметры секции
        sectionParams.push($(el).data('params').split(';'));
        // Параметры контента на фоне
        contentParams.push($(el).data('text')).par;
    });
       
      // Открытие модальных блоков
      if(window.location.hash.includes('#')){
        var click = window.location.hash;
        $(click).addClass('active');
        // $.fn.fullpage.setAllowScrolling(false);

      }
    $('.modal_block_click').click(function(event) {
        event.preventDefault();
        var click = $(this);
        if ($('.modal_block').hasClass('active')) {
            $('.left_slide.active').children('.wrapper_modal').animate({'margin-left':'-100%'}, 500, function() {
                $(this).parent().css('background', 'rgba(0,0,0,0)');
                var active = $(this);
                setTimeout(function fadeOut_block() {
                    $(active).attr('style', '');
                    $(active).parents('.modal_block').attr('style', '').removeClass('active');
                    $.fn.fullpage.setAllowScrolling(true);
                }, 500);
            });
             $('.right_slide.active').children('.wrapper_modal').animate({'margin-right':'-100%'}, 500, function() {
                $(this).parent().css('background', 'rgba(0,0,0,0)');
                var active = $(this);
                setTimeout(function fadeOut_block() {
                    $(active).attr('style', '');
                    $(active).parents('.modal_block').attr('style', '').removeClass('active');
                    $.fn.fullpage.setAllowScrolling(true);
                }, 500);
            });
        }
        $($(click).attr('href')).addClass('active');
        $.fn.fullpage.setAllowScrolling(false);
    });
    // Закрытие модальных блоков
    $('.modal_block .close').click(function(event) {
        event.preventDefault();
       $(this).parents('.left_slide.active').children('.wrapper_modal').animate({'margin-left':'-100%'}, 500, function() {
            $(this).parent().css('background', 'rgba(0,0,0,0)');
            var active = $(this);
            setTimeout(function fadeOut_block() {
                $(active).attr('style', '');
                $(active).parents('.modal_block').attr('style', '').removeClass('active');
                $.fn.fullpage.setAllowScrolling(true);
            }, 500);
        });
         $(this).parents('.right_slide.active').children('.wrapper_modal').animate({'margin-right':'-100%'}, 500, function() {
            $(this).parent().css('background', 'rgba(0,0,0,0)');
            var active = $(this);
            setTimeout(function fadeOut_block() {
                $(active).attr('style', '');
                $(active).parents('.modal_block').attr('style', '').removeClass('active');
                $.fn.fullpage.setAllowScrolling(true);
            }, 500);
        });
    });
    $(document).mouseup(function (e){
        if (!$(".modal_block.active .wrapper_modal").is(e.target) && $(".modal_block.active .wrapper_modal").has(e.target).length === 0) {
            $('.left_slide.active .wrapper_modal').animate({'margin-left':'-100%'}, 500, function() {
                $(this).parent().css('background', 'rgba(0,0,0,0)');
                var active = $(this);
                setTimeout(function fadeOut_block() {
                    $(active).attr('style', '');
                    $(active).parents('.modal_block').attr('style', '').removeClass('active');
                    $.fn.fullpage.setAllowScrolling(true);
                }, 500);
            });
            $('.right_slide.active .wrapper_modal').animate({'margin-right':'-100%'}, 500, function() {
                $(this).parent().css('background', 'rgba(0,0,0,0)');
                var active = $(this);
                setTimeout(function fadeOut_block() {
                    $(active).attr('style', '');
                    $(active).parents('.modal_block').attr('style', '').removeClass('active');
                    $.fn.fullpage.setAllowScrolling(true);
                }, 500);
            });
        }
    });
    // фокус input
    $('.input').focusin(function(event) {
        $(this).prev().addClass('focus');
    });
    $('.input').focusout(function(event) {
        $(this).prev().removeClass('focus');
    });
    // Изменение textarea
    $(document).on('input', '.right_slide textarea', function(event) {
        $('.scroll_block').animate({
            scrollTop: $(".scroll_block .text").offset().top
        }, 0);
        var min_line_height = 40;
        if ($(window).width()) {
            min_line_height = 26;    
        }
        $('#comment_div').html($(this).val());
        var obj_height = $('#comment_div')[0].offsetHeight+12;
        if ($(window).width()) {
            obj_height = $('#comment_div')[0].offsetHeight+6; 
        }
        if (event.keyCode == 13) obj_height += min_line_height;
        else if (obj_height < min_line_height) obj_height = min_line_height;
        $(this).css('height', obj_height + 'px');
    });
    // Процесс перелистывания секций
    
    var sectionSettings = {
        // Скроллинг
      
        scrollingSpeed: 800,
        fitToSectionDelay: 500,
        touchSensitivity: 15,
        lookAnchors:true,
        scrollBar: false,
      
       
        //Дизай
        paddingTop:'100',
        scrollHorizontally: true,
        normalScrollElements: '.modal_block',
        paddingBottom:'100',
        controlArrows: false,
        verticalCentered: true,
        
        responsiveWidth: 0,
        onLeave: function(origin, destination, direction){
          
           // handler button fix for desktop only
           handlerButtonFixForDesktop(destination)
           handlerButtonFixForMobile(destination)
           setActiveLink(destination)
           // handler big word fisced on page
        //    handlerWordFixed(destination)
            // Затухание
            $('.section[data-lenght="'+destination+'"]').animate({opacity:1}, 800);
            $('.section[data-lenght="'+origin+'"]').animate({opacity:0}, 300);
            // Изменение фона кнопки
            $('.right_slide form .btn').css({
                background: sectionParams[destination-1][0],
                transition: "all 1s ease-out",
            });
           // Изменение color header
          
           changeColorHeader(destination)
           
            // Изменение цвета фона
            $('.background').css({
                "box-shadow": "inset "+sectionParams[destination-1][2]+" "+sectionParams[destination-1][3]+" 300px "+sectionParams[destination-1][4]+""+sectionParams[destination-1][1],
                background: sectionParams[destination-1][0],
                transition: "all 1s ease-out",
            });
            $('.background .active').fadeOut('500', function() {
                $('.background div').toggleClass('active');
            });
            $('.background div:not(.active)').html(contentParams[destination-1]).fadeIn('500');
        },
    }

    
    if ($(window).width() < 1024) {
        
        sectionSettings = {
            // Скроллинг
            scrollingSpeed: 800,
          
            fitToSectionDelay: 500,
            touchSensitivity: 15,
            //Дизайн
            paddingTop:'90px',
            scrollHorizontally: true,
            normalScrollElements: '.modal_block',
            paddingBottom:'80px',
            controlArrows: false,
            verticalCentered: true,
            responsiveWidth: 0,
            onLeave: function(origin, destination, direction){
               // handle button fixed on screen
               handlerButtonFixForDesktop(destination)
               handlerButtonFixForMobile(destination)
               setActiveLink(destination)
                // handler menu
                changeColorHeader(destination)
                // Затухание
                $('#section_'+destination).animate({opacity:1}, 800);
                $('#section_'+origin).animate({opacity:0}, 300);
                // Изменение фона кнопки
                $('.right_slide form .btn').css({
                    background: sectionParams[destination-1][0],
                    transition: "all 1s ease-out",
                });
                // Изменение цвета фона
                $('.background').css({
                    "box-shadow": "inset "+sectionParams[destination-1][2]+" "+sectionParams[destination-1][3]+" 300px "+sectionParams[destination-1][4]+""+sectionParams[destination-1][1],
                    background: sectionParams[destination-1][0],
                    transition: "all 1s ease-out",
                });
                $('.background .active').fadeOut('500', function() {
                    $('.background div').toggleClass('active');
                });
                $('.background div:not(.active)').html(contentParams[destination-1]).fadeIn('500');
            },
        }

       
    }
    // if ($(window).width() < 668) {
    //     sectionSettings = {
    //         // Скроллинг
    //         scrollingSpeed: 800,
    //         fitToSectionDelay: 500,
    //         touchSensitivity: 15,
    //         //Дизайн
    //         paddingTop:'90px',
    //         scrollHorizontally: true,
    //         normalScrollElements: '.modal_block',
    //         paddingBottom:'80px',
    //         controlArrows: false,
    //         verticalCentered: true,
    //         responsiveWidth: 0,
    //         onLeave: function(origin, destination, direction){
    //             // Затухание
    //             $('.section[data-lenght="'+destination+'"]').animate({opacity:1}, 800);
    //             $('.section[data-lenght="'+origin+'"]').animate({opacity:0}, 300);
    //             // Изменение фона кнопки
    //             $('.right_slide form .btn').css({
    //                 background: sectionParams[destination-1][0],
    //                 transition: "all 1s ease-out",
    //             });
    //             // Изменение цвета фона
    //             $('.background').css({
    //                 "box-shadow": "inset "+sectionParams[destination-1][2]+" "+sectionParams[destination-1][3]+" 300px "+sectionParams[destination-1][4]+""+sectionParams[destination-1][1],
    //                 background: sectionParams[destination-1][0],
    //                 transition: "all 1s ease-out",
    //             });
    //             $('.background .active').fadeOut('500', function() {
    //                 $('.background div').toggleClass('active');
    //             });
    //             $('.background div:not(.active)').html(contentParams[destination-1]).fadeIn('500');
    //         },
    //     }
    // }
    if ($(window).width() < 668) {

      
        sectionSettings = {
            
            // Скроллинг
          
            scrollingSpeed: 800,
            fitToSectionDelay: 500,
            touchSensitivity: 15,
            fitToSection:false,
            autoScrolling:false,
            //Дизайн
            // paddingTop:'0px',
            scrollHorizontally: true,
            normalScrollElements: '.modal_block',
            paddingBottom:'0px',
            controlArrows: false,
            bigSectionsDestination:'top',
            verticalCentered: false,
            scrollOverflow:false,
            responsiveWidth: 0,
            onLeave: function(origin, destination, direction){
                if(destination=== 2){
                  
                    $('.button-fix ').css({
                        background:'none',
                    })
                   
                    
                    
                   
                }
                changeColorHeader(destination)
                  // handle button fixed on screen
               handlerButtonFixForDesktop(destination)
               handlerButtonFixForMobile(destination)
                 setActiveLink(destination)
                // Затухание
                $('.section').addClass('fp-auto-height');
                $('#section_7').removeClass('fp-auto-height');
                // Изменение фона кнопки
                $('.right_slide form .btn').css({
                    background: sectionParams[destination-1][0],
                    transition: "all 1s ease-out",
                });
                // Изменение самолетика
                 $('footer .send i').css({
                    color: sectionParams[destination-1][0],
                    transition: "all 1s ease-out",
                });
                // Скрытие шапки
                if (origin < destination) {
                    $('header').animate({top:'-500px'}, 800);
                    $('.container-fluid').animate({'padding-top':'95px'}, 0);
                }else{
                    $('header').animate({top:'0'}, 0);
                    $('.container-fluid').animate({'padding-top':'95px'}, 0);
                }
                // Изменение цвета фона
                $('.background').css({
                    "box-shadow": "inset "+sectionParams[destination-1][2]+" "+sectionParams[destination-1][3]+" 300px "+sectionParams[destination-1][4]+""+sectionParams[destination-1][1],
                    background: sectionParams[destination-1][0],
                    transition: "all 1s ease-out",
                });
                $('header').css({
                    background: sectionParams[destination-1][1],
                    transition: "all 1s ease-out",
                });
                $('.background .active').fadeOut('500', function() {
                    $('.background div').toggleClass('active');
                });
                $('.background div:not(.active)').html(contentParams[destination-1]).fadeIn('500');

              
                
            },
        }
    }
   
    $('#sections').fullpage(sectionSettings);
});