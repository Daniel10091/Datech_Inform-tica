now = new Date

if (now.getHours () >= 0 && now.getHours () < 5) {
  function mail() {
    window.open('mailto:datech.informatica100@gmail.com?subject=Olá,%20Bom dia!')
  }
} else if (now.getHours () >= 5 && now.getHours () < 12) {
  function mail() {
    window.open('mailto:datech.informatica100@gmail.com?subject=Olá,%20Bom dia!')
  }
} else if (now.getHours () >= 12 && now.getHours () < 18) {
  function mail() {
    window.open('mailto:datech.informatica100@gmail.com?subject=Olá,%20Boa tarde!')
  }
} else {
  function mail() {
    window.open('mailto:datech.informatica100@gmail.com?subject=Olá,%20Boa noite!')
  }
}

function telegram() {
  windowObjectReferenced = window.open(
    'https://www.linkedin.com/in/daniel-carvalho-0a5652215',
    'Telegram',
    'left=100, top=100, width=500, height=500'
  )
}

function instagram() {
  windowObjectReferenced = window.open(
    'https://www.instagram.com/carvadaniar/',
    'Instagram',
    'left=100, top=100, width=500, height=500'
  )
}

function facebook() {
  windowObjectReferenced = window.open(
    'https://www.facebook.com/profile.php?id=100011478833235',
    'Datech Informática - Facebook',
    'left=100, top=100, width=500, height=500'
  )
}

function twitter() {
  windowObjectReferenced = window.open(
    'https://twitter.com/danield27975177',
    'Datech Informática - Twitter',
    'left=100, top=100, width=500, height=500'
  )
}

function phone() {
  window.open('tel:+55-61-98653-5935')
}

function map() {
  windowObjectReferenced = window.open(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315.525796859162!2d-47.674961740771806!3d-15.613133373333577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a6d82ea4cff01%3A0xe1efc88c2be85f26!2sDATECH%20INFORM%C3%81TICA!5e1!3m2!1spt-BR!2sbr!4v1638374909642!5m2!1spt-BR!2sbr',
    '_blank'
  )
}