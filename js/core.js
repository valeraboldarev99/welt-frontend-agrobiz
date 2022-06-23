$(document).ready(function () {

// слaйдер на главной
$('.slider').slick({
  slidesToScroll:1,
  slidesToShow:1,
    // autoplay: true,
    appendArrows:'.slider-arrows',
    autoplaySpeed: 3000,
    pauseOnHover:true,
    arrows:true,
    dots:true,
    responsive: [
    
    {
     breakpoint: 767,
     settings: {
       arrows:false,
       dots:true
     }
   }
   ]
 });

// слaйдер на странице продукта
    $('.product__slider__small').slick({
        slidesToScroll:1,
        slidesToShow:8,
        // autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:true,
        arrows:false,
        draggable:false,
        dots:false,
        focusOnSelect: true,
        asNavFor: '.product__slider__big',
        responsive: [
        
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                arrows:false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 5,
                vertical : false,
                slidesToScroll: 1
            }
         },
    ]
    });


    $('.product__slider__big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        draggable:false,
        // autoplay: true,
        fade: true,
        asNavFor: '.product__slider__small'
    });

   // Mobile Sidebar
  var mobileSidebar = function()
  {
    function obj()
    {
      var self = this;
      self.animSpeed = 400;
      self.init = function()
      {
        self.events();
      },
      self.events = function()
      {
        $('.sidebar-open').click(function() {
          self.open();
        });
        $('.sidebar-close, .sidebar-overlay').click(function() {
          self.close();
        });
      },
      self.open = function()
      {
        $('.sidebar').addClass('sidebar_opened');
        $('.sidebar-overlay').fadeIn(self.animSpeed);
                      // pageScroll.hide(1);
                    },
                    self.close = function()
                    {
                      $('.sidebar').removeClass('sidebar_opened');
                      $('.sidebar-overlay').fadeOut(self.animSpeed);
                      // pageScroll.show(0);
                    }
                  }
                  return new obj();
                }();
                mobileSidebar.init();

  // Mobile menu
  $(document).on('click', '.ms-menu .trigger', function() {  
    var menu  = $(".ms-menu .trigger"),
    $this = $(this);

    $.each(menu,function(key,value){

     var condition = (
      $(this).hasClass("active") &&
      $(this).closest('li').hasClass("active") &&
      $(this).closest('li').children('ul').hasClass("active") &&
      $this.get(0) !== $(this).get(0)
      );

     if( condition ){
      $(this).toggleClass('active');
      $(this).closest('li').toggleClass('active');
      $(this).closest('li').children('ul').toggleClass('active');
      $(this).closest('li').children('ul').slideToggle(200);
    }
  });

    $(this).toggleClass('active');
    $(this).closest('li').toggleClass('active');
    $(this).closest('li').children('ul').toggleClass('active');
    $(this).closest('li').children('ul').slideToggle(200);
  });

});

//////////////////////////////////////////////////////////////////////
// Mobile Filter
//////////////////////////////////////////////////////////////////////
var mobileSidebar = (function() {
    var animSpeed = 200;

    function init() {
        setEvents();
    };

    function setEvents() {

        // Open sidebar
        $('.filter__open').on('click', function() {
            openSidebar();
        });

        // Close sidebar
        $('.mobile-close, .filter__overlay').on('click', function() {
            closeSidebar();
        });

    };

    function openSidebar() {
        $('.filter__container').addClass('is-opened');
        $('.filter__overlay').fadeIn(animSpeed);
    };

    function closeSidebar() {
        $('.filter__container').removeClass('is-opened');
        $('.filter__overlay').fadeOut(animSpeed);
    };

    init();

    return {
        open: openSidebar,
        close: closeSidebar
    };
})();

 $('[data-fancybox=""]').fancybox({
    focus: false
  });

 var show = true;
 var countbox = ".about";

 if( $(countbox).length )
 {
   $(window).on("scroll load resize", function(){

           if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

           var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
           var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

           var w_height = $(window).height();        // Высота окна браузера
           var d_height = $(document).height();      // Высота всего документа

           var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

           if(w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
             $(".spincrement").spincrement({
               thousandSeparator: "",
               duration: 8000
             });

             show = false;

           }
         });
 }

var show = true;
var countboxOne = ".lizing";

 if( $(countboxOne).length )
 {
   $(window).on("scroll load resize", function(){

           if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

           var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
           var e_top = $(countboxOne).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

           var w_height = $(window).height();        // Высота окна браузера
           var d_height = $(document).height();      // Высота всего документа

           var e_height = $(countboxOne).outerHeight(); // Полная высота блока со счетчиками

           if(w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
             $(".spincrement").spincrement({
               thousandSeparator: "",
               duration: 8000
             });

             show = false;

           }
         });
 }

