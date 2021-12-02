'use strict';

var body = $('body'),
    title = $('title'),
    logo = $('.logo a'),
    btn = $('#toggle-menu'),
    menu = $('.menu-mobile'),
    l = $("a[href^='#'], a[href^='/']"),
    a = $("header nav ul li label, .menu-mobile #nav li label, .footer-nav li"),
    t = $("header nav ul li label span, .menu-mobile #nav li label span, .footer-nav-link ul li span"),
    s = $("section[data-section]"),
    hs = $('.show-home'),
    ss = $('.show-services'),
    as = $('.show-about'),
    cs = $('.show-contact'),
    s1 = $('section#home'),
    s2 = $('section#services'),
    s3 = $('section#about'),
    s4 = $('section#contact')

// ======================= TITLE FUNCTION ============================
$(document).ready(function() {
  for (var i = 0; i <= a.length; i++) {
    if ($(t[i]).text() == 'Início') {
      $(a[i]).addClass('active')
      title.text('Datech' + ' - ' + $('label.active').first().text()).html()
    }
  }
});

// ======================= SECTIONS AND HOME LINK-SECTION ============================
s.fadeOut()

// ======================= WINDOW PRELOADER ============================
$(window).on('load change', function () {
  if ($(this)) {
    $('.loading span').fadeOut()
    $('.loading').delay(350).fadeOut('slow')
  }
});

if ($('html').hasClass('ui-loading')) {
  alert()
}

// ======================= SCROLL FUNCTION ============================
(function() {
  var lastScrollTop = 0;
  var action = "stopped";
  var timeout = 100;
  // Scroll end detector:
  $.fn.scrollEnd = function(callback, timeout) {    
      $(this).scroll(function(){
      // get current scroll top 
        var st = $(this).scrollTop();
        var $this = $(this);
        // fix for page loads
      if (lastScrollTop !=0 ) { 
          if (st < lastScrollTop){ // if it's scroll up
          action = "scrollUp";
        } else if (st > lastScrollTop){ // else if it's scroll down
          action = "scrollDown";
        }
      }
      // set the current scroll as last scroll top
      lastScrollTop = st;
      // check if scrollTimeout is set then clear it
        if ($this.data('scrollTimeout')) {
          clearTimeout($this.data('scrollTimeout'));
        }
        // wait until timeout done to overwrite scrolls output
        $this.data('scrollTimeout', setTimeout(callback,timeout));
    });
  };
  
  $('.main').scrollEnd(function(){
      if(action!="stopped"){
        //call the event listener attached to obj.
        $('.main').trigger(action); 
      }
  }, timeout);
}());

// ======================= MAIN SCROLL FUNCTIONS ============================
$('.main').scroll(function() {    
  var main = $('.main'),
      scroll = main.scrollTop(),
      goToTop = $('.go-to-top'),
      goToTopClick = $('.go-to-top a')
      
  // console.log(scroll)

  if (scroll >= 500) {
    $('.main').on('scrollDown',function() {
      goToTop.addClass('fade-down')
    });
    $('.main').on('scrollUp',function() {
      goToTop.removeClass('fade-down')  
    });
    $('.datech-about-content .img').addClass('anime')
  } else {$('.datech-about-content .img').removeClass('anime')}

  goToTopClick.on('click', function(event) {
    var target = $( $(this).attr('href') );

    if( target.length ) {
      main.animate({
        scrollTop: target.offset().top
      }, 0);
    }
  })

  // function goTo(element, speed){
  //   var href = element.attr('href');
  //   var target = $(href).offset().target;
  //   main.animate({scrollTop : target}, speed);
  // }
  // $(function(){
  //   goToTopClick.click(function(e){
  //     goTo($(this), 600);
  //   });
  // });
});

// ======================= NAVIGATION FUNCTIONS ============================
jQuery(function() {
  l.on('click', function() {
    event.preventDefault()
  })
  $('.home-btn').on('click', function() {
    hs.removeClass('active')
    ss.addClass('active')
    s1.fadeOut().removeClass('show')
    s2.fadeIn().addClass('show')
  })
  a.on('click', function() {
    a.removeClass('active')
    $(this).addClass('active')
    var t = 'Datech'
    var c = $('label.active, li.active').text()
    title.text(t + ' - ' + c).html()
    if (hs.hasClass('active')) {
      ss.removeClass('active')
      s2.fadeOut().removeClass('show')
      s1.fadeIn().addClass('show')
      btn.removeClass('active')
      menu.removeClass('show')
      $('main').animate({
        scrollTop: 0
      }, 0);
      if(this) {
        menu.animate({
          left: -300
        }, 400)
        $('.menu-move').removeClass('show')
        $('.menu-opacity').animate({
          left: '-100%'
        }, 400)
      }
    } else {
      s1.fadeOut().removeClass('show')
    }
    if (ss.hasClass('active')) {
      s2.fadeIn().addClass('show')
      btn.removeClass('active')
      menu.removeClass('show')
      $('main').animate({
        scrollTop: 0
      }, 0);
      if(this) {
        menu.animate({
          left: -300
        }, 400)
        $('.menu-move').removeClass('show')
        $('.menu-opacity').animate({
          left: '-100%'
        }, 400)
      }
    } else {
      s2.fadeOut().removeClass('show')
    }
    if (as.hasClass('active')) {
      ss.removeClass('active')
      s2.fadeOut().removeClass('show')
      s3.fadeIn().addClass('show')
      btn.removeClass('active')
      menu.removeClass('show')
      $('main').animate({
        scrollTop: 0
      }, 0);
      if(this) {
        menu.animate({
          left: -300
        }, 400)
        $('.menu-move').removeClass('show')
        $('.menu-opacity').animate({
          left: '-100%'
        }, 400)
      }
    } else {
      s3.fadeOut().removeClass('show')
    }
    if (cs.hasClass('active')) {
      ss.removeClass('active')
      s2.fadeOut().removeClass('show')
      s4.fadeIn().addClass('show')
      btn.removeClass('active')
      menu.removeClass('show')
      $('main').animate({
        scrollTop: 0
      }, 0);
      if(this) {
        menu.animate({
          left: -300
        }, 400)
        $('.menu-move').removeClass('show')
        $('.menu-opacity').animate({
          left: '-100%'
        }, 400)
      }
    } else {
      s4.fadeOut().removeClass('show')
    }
  })
  logo.on('click', function() {
    a.first().click()
  })
}());

// ======================= SHOW MENU ============================
jQuery(function(){
  btn.on('click', function() {
    $(this).toggleClass('active')
    menu.toggleClass('show')
    if (btn.hasClass('active')) {
      $(this).attr('title', 'Close menu')
      menu.animate({
        left: 0
      }, 400)
      $('.menu-move').addClass('show')
      $('.menu-opacity').animate({
        left: 0
      }, 400)
    } else {
      $(this).attr('title', 'Show menu')
      menu.animate({
        left: -300
      }, 400)
      $('.menu-move').removeClass('show')
      $('.menu-opacity').animate({
        left: '-100%'
      }, 400)
    }
  })
  $('.menu-opacity').click(function() {
    btn.removeClass('active')
    menu.removeClass('show')
    menu.animate({
      left: -300
    }, 400)
    $('.menu-move').removeClass('show')
    $('.menu-opacity').animate({
      left: '-100%'
    }, 400)
  })
}());

// ======================= KEYBOARD FUNCTIONS ============================
jQuery(function() {
  var navbarInputHm = $('.navbar-input-home'),
      navbarInputSv = $('.navbar-input-services'),
      navbarInputAb = $('.navbar-input-about'),
      navbarInputCt = $('.navbar-input-contact'),
      xTriggered = 0

  $("body").keyup(function(event) {
    xTriggered++
    var msg = "Handler for .keyup() called " + xTriggered + " time(s)."
    // $.print( msg, "html" )
    // $.print( event )
    console.log( msg, "html" )
    console.log( event )
  }).keydown(function(event) {
    if (event.ctrlKey && event.which == 97) {
      hs.click()
      if (body.hasClass('navbar-computer')) {
        navbarInputHm.click()
      }
    } if (event.ctrlKey && event.which == 98) {
      ss.click()
      if (body.hasClass('navbar-computer')) {
        navbarInputSv.click()
      }
    } if (event.ctrlKey && event.which == 99) {
      as.click()
      if (body.hasClass('navbar-computer')) {
        navbarInputAb.click()
      }
    } if (event.ctrlKey && event.which == 100) {
      cs.click()
      if (body.hasClass('navbar-computer')) {
        navbarInputCt.click()
      }
    } if (event.ctrlKey && event.which == 77) {
      btn.click()
    }
  })
}());

// ======================= LIST ANIMATION ============================
var active = $('header nav ul li'),
    animate = $('header nav ul .slider .path')

animate.fadeOut()
active.on('click', function() {
  animate.fadeIn()
  animate.fadeOut()
});

// ======================= WINDOW SIZW FUNCTIONS ============================
$(document).ready(function() {
  var $window = $(window),
      navbar = $('.nav-bar nav'),
      footerLinkHm = $('.footer-nav li.show-home'),
      footerLinkSv = $('.footer-nav li.show-services'),
      footerLinkAb = $('.footer-nav li.show-about'),
      footerLinkCt = $('.footer-nav li.show-contact')

  function checkWidth() {
    var windowsize = $window.width()
    if (windowsize >= 1051) {
      body.addClass('navbar-computer')
      navbar.addClass('window-size-min')
      $('.home-btn').click(function() {
        $('#navServices').click()
      })
      logo.on('click', function() {
        $('#navHome').click()
      })
      footerLinkHm.on('click', function() {
        $('#navHome').click()
      })
      footerLinkSv.on('click', function() {
        $('#navServices').click()
      })
      footerLinkAb.on('click', function() {
        $('#navAbout').click()
      })
      footerLinkCt.on('click', function() {
        $('#navContact').click()
      })
      if (s1.hasClass('show')) {
        $('#navHome').click()
      }
      if (s2.hasClass('show')) {
        $('#navServices').click()
      }
      if (s3.hasClass('show')) {
        $('#navAbout').click()
      }
      if (s4.hasClass('show')) {
        $('#navContact').click()
      }
      btn.removeClass('active')
      menu.removeClass('show')
      menu.animate({
        left: -300
      }, 400)
      $('.menu-move').removeClass('show')
      $('.menu-opacity').animate({
        left: '-100%'
      }, 400)
    } else if (windowsize < 1051) {
      logo.on('click', function() {
        $('#mobHome').click()
      })
      footerLinkHm.on('click', function() {
        $('#mobHome').click()
      })
      footerLinkSv.on('click', function() {
        $('#mobServices').click()
      })
      footerLinkAb.on('click', function() {
        $('#mobAbout').click()
      })
      footerLinkCt.on('click', function() {
        $('#mobContact').click()
      })
      if (s1.hasClass('show')) {
        $('#mobHome').click()
      }
      if (s2.hasClass('show')) {
        $('#mobServices').click()
      }
      if (s3.hasClass('show')) {
        $('#mobAbout').click()
      }
      if (s4.hasClass('show')) {
        $('#mobContact').click()
      }
    } else {
      body.removeClass('navbar-computer')
      navbar.removeClass('window-size-min')
      $('.home-btn').click(function() {
        $('#mobServices').click()
      })
    }
  }
  $(window).resize(checkWidth)
  checkWidth();
});