$(document).ready(function() {
  $(document).load('./About.js',function() {
    var list = $('.operation-list ul li'),
    monday = $('#monday'),
    tuesday = $('#tuesday'),
    wednesday = $('#wednesday'),
    thursday = $('#thursday'),
    friday = $('#friday'),
    sunday = $('#sunday'),
    saturday = $('#saturday'),
    mondayDiv = $('#monday div'),
    tuesdayDiv = $('#tuesday div'),
    wednesdayDiv = $('#wednesday div'),
    thursdayDiv = $('#thursday div'),
    fridayDiv = $('#friday div'),
    sundayDiv = $('#sunday div'),
    saturdayDiv = $('#saturday div')
    
    now = new Date

    if (now.getDay () === 1) {
      monday.addClass('today')
      if (now.getHours () >= 7 && now.getHours () < 8) {
        mondayDiv.html(`<p>Hoje:<span> <b>Abrirá em breve. Aberto das 08h às 18h</b></span></p>`)
      } else if (now.getHours () >= 8 && now.getHours () < 17) {
        mondayDiv.html(`<p>Hoje:<span> <b>Aberto agora. Fecha às 18h</b></span></p>`)
      } else if (now.getHours () >= 17 && now.getHours () < 18) {
        mondayDiv.html(`<p>Hoje:<span> <b>Fechará em breve, ás 18h</b></span></p>`)
      } else {
        mondayDiv.html(`<p>Hoje:<span> <b>Fechado Agora. Aberto das 08h às 18h</b></span></p>`)
      }
    } else if (now.getDay () === 2) {
      tuesday.addClass('today')
      if (now.getHours () >= 7 && now.getHours () < 8) {
        tuesdayDiv.html(`<p>Hoje:<span> <b>Abrirá em breve. Aberto das 08h às 18h</b></span></p>`)
      } else if (now.getHours () >= 8 && now.getHours () < 17) {
        tuesdayDiv.html(`<p>Hoje:<span> <b>Aberto agora. Fecha às 18h</b></span></p>`)
      } else if (now.getHours () >= 17 && now.getHours () < 18) {
        tuesdayDiv.html(`<p>Hoje:<span> <b>Fechará em breve, ás 18h</b></span></p>`)
      } else {
        tuesdayDiv.html(`<p>Hoje:<span> <b>Fechado Agora. Aberto das 08h às 18h</b></span></p>`)
      }
    } else if (now.getDay () === 3) {
      wednesday.addClass('today')
      if (now.getHours () >= 7 && now.getHours () < 8) {
        wednesdayDiv.html(`<p>Hoje:<span> <b>Abrirá em breve. Aberto das 08h às 18h</b></span></p>`)
      } else if (now.getHours () >= 8 && now.getHours () < 17) {
        wednesdayDiv.html(`<p>Hoje:<span> <b>Aberto agora. Fecha às 18h</b></span></p>`)
      } else if (now.getHours () >= 17 && now.getHours () < 18) {
        wednesdayDiv.html(`<p>Hoje:<span> <b>Fechará em breve, ás 18h</b></span></p>`)
      } else {
        wednesdayDiv.html(`<p>Hoje:<span> <b>Fechado Agora. Aberto das 08h às 18h</b></span></p>`)
      }
    } else if (now.getDay () === 4) {
      thursday.addClass('today')
      if (now.getHours () >= 7 && now.getHours () < 8) {
        thursdayDiv.html(`<p>Hoje:<span> <b>Abrirá em breve. Aberto das 08h às 18h</b></span></p>`)
      } else if (now.getHours () >= 8 && now.getHours () < 17) {
        thursdayDiv.html(`<p>Hoje:<span> <b>Aberto agora. Fecha às 18h</b></span></p>`)
      } else if (now.getHours () >= 17 && now.getHours () < 18) {
        thursdayDiv.html(`<p>Hoje:<span> <b>Fechará em breve, ás 18h</b></span></p>`)
      } else {
        thursdayDiv.html(`<p>Hoje:<span> <b>Fechado Agora. Aberto das 08h às 18h</b></span></p>`)
      }
    } else if (now.getDay () === 5) {
      friday.addClass('today')
      if (now.getHours () >= 7 && now.getHours () < 8) {
        fridayDiv.html(`<p>Hoje:<span> <b>Abrirá em breve. Aberto das 08h às 18h</b></span></p>`)
      } else if (now.getHours () >= 8 && now.getHours () < 17) {
        fridayDiv.html(`<p>Hoje:<span> <b>Aberto agora. Fecha às 18h</b></span></p>`)
      } else if (now.getHours () >= 17 && now.getHours () < 18) {
        fridayDiv.html(`<p>Hoje:<span> <b>Fechará em breve, ás 18h</b></span></p>`)
      } else {
        fridayDiv.html(`<p>Hoje:<span> <b>Fechado Agora. Aberto das 08h às 18h</b></span></p>`)
      }
    } else if (now.getDay () === 6) {
      sunday.addClass('today')
      if (now.getHours () >= 7 && now.getHours () < 8) {
        sundayDiv.html(`<p>Hoje:<span> <b>Abrirá em breve. Aberto das 08h às 16h</b></span></p>`)
      } else if (now.getHours () >= 8 && now.getHours () < 15) {
        sundayDiv.html(`<p>Hoje:<span> <b>Aberto agora. Fecha às 16h</b></span></p>`)
      } else if (now.getHours () >= 15 && now.getHours () < 16) {
        sundayDiv.html(`<p>Hoje:<span> <b>Fechará em breve, ás 16h</b></span></p>`)
      } else {
        sundayDiv.html(`<p>Hoje:<span> <b>Fechado Agora. Aberto das 08h às 16h</b></span></p>`)
      }
    } else if (now.getDay () === 7) {
      saturday.addClass('today')
      if (now.getHours () >= 8 && now.getHours () < 18) {
        saturdayDiv.html(`<p>Hoje:<span> <b>Está fechado. Aberto de Segunda à Sábado.</b></span></p>`)
      } else {
        saturdayDiv.html(`<p>Hoje:<span> <b>Não abrimemos neste dia.</b></span></p>`)
      }
    } else {
      list.removeClass('today')
    }
  })
}())

// function ShowOverlay(divID) { 
//   var divObject = $(divID);
//   var divOverlay = $('.about-conten h1');
//   divObject.mouseover(function(e){
//     var x = e.pageX; 
//     var y = e.pageY;
//     var i = 1;
//     divOverlay.css('left', ++i + x + "px")
//     divOverlay.css('top', ++i + y + "px")
//   }) 
// }
// ShowOverlay(".about-content");