var btnMenu = $('#toggle-menu'),
    menu = $('.menu-mobile')

$(document).ready(function() {
  if ( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    body.remove('computer').addClass('mobile')
    $('footer').addClass('mobile')

    $(document).on("pagecreate","#pageone",function(){
      $("#pageone").on("swiperight",function(){
        btn.addClass('active')
        menu.addClass('show')
        menu.animate({
          left: 0
        }, 400)
        $('.menu-move').addClass('show')
        $('.menu-opacity').animate({
          left: 0
        }, 400)
      })
      $("#pageone, .menu-mobile").on("swipeleft",function(){
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
    })
  } else {
    body.addClass('computer').removeClass('mobile')
    $('footer').removeClass('mobile')
  }
}())