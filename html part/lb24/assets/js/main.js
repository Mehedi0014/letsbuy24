
$(document).ready(function(){

// Owl Carousel for banner =====================================================================
$('#owl_carousel_for_banner').owlCarousel({
  loop:true,
  // autoplay:true,
  dots: false,
  items:1,
  margin:2,
  nav:true,
  navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
});



// Home page Deal of the day ============================================================================
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false,

        dots: false,
        thumbs: false,


        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: 3,


            dots: false,
            thumbs: false,


            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });






// Owl Carousel - Home Page - Four Product =====================================================================
$('.owl_carousel_four_products').owlCarousel({
    loop:true,
    autoplay: false,
    margin:0,
    nav:false,
    dots: false,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        768:{
          items:3
        },
        991:{
            items:4
        }
    }
})

 $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
 $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');





// Owl Carousel for all type off product =========================================================
// $('.owl_carousel_for_all_product').owlCarousel({
//     loop:true,
//     margin:2,
//     dots:false,
//     responsiveClass:true,
//     nav:true,
//     navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
//     responsive:{
//         0:{
//             items:1
//         },
//         575:{
//             items:2
//         },
//         768:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// });



//Make dropdown menu hover effect - Home page =====================================================================
$('.dropdown').hover(
  function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
  }, 
  function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
  }
);

$('.dropdown-menu').hover(
  function() {
    $(this).stop(true, true);
  },
  function() {
    $(this).stop(true, true).delay(50).fadeOut();
  }
);




// Deals Of The Day Slidr =====================================================================

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   try {
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("demo");
//     var captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
//   }
//   catch(e){
//       //alert(e);
//   }
// }


// deal of the day sidebar slider =====================================================================


  // $('.vertical-center-3').slick({
  //   dots: false,
  //   vertical: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   nextArrow: '<i class="fas fa-angle-down"></i>',
  //   prevArrow: '<i class="fas fa-angle-up"></i>',
  // });


// Make a accordion in sidebar ==============================================================
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
};

















// Single page quentity increase and decrease =================================================


  $("#plus").on('click', function() {
    if ($('#number').val() > 0) {
       $("#number").val(parseInt($('#number').val(), 10)+1);
    }else{
      $("#number").val(parseInt(1));
    }
  });

  $("#minus").on('click', function() {
     if ($('#number').val() > 1) {
      $("#number").val(parseInt($('#number').val(), 10)-1)  
     }else{
      $("#number").val(parseInt(1));
     }
  });






  // Single page Carousel ===========================================================

  $('#owl_carousel_single_product_page').owlCarousel({
    thumbs: true,
    thumbsPrerendered: true,
    thumbImage: true,
    //thumbContainerClass: 'owl-thumbs',
    //thumbItemClass: 'owl-thumb-item'

    items: 1,
    //autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
  });







  /*Tab Part Statr here =======================================================================*/
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })


























}); //close document.ready ==============================================================


