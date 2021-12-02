var login = $('.login')

loginContent = `
    <div class="login-content">
      <div class="login-title">
        <h1>Bem vindo(a)</h1>
      </div>
      <div class="login-form">
        <div id="login-input">
          <span>Por favor, digite o seu nome:</span>
          <div class="input">
            <input type="text" required>
            <span>Nome</span>
          </div>
        </div>
        <div id="login-btn">
          <div id="login-alert">
            <span>
              <ion-icon name="alert-circle-outline"></ion-icon>
              <b></b>
            </span>
          </div>
          <button id="closeLogin" class="open-login">Entrar
            <ion-icon name="enter-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
`
login.html(loginContent)

var body = $('body'),
    login = $('.login'),
    loginButton = $('#login-btn button'),
    loginVal = $('#login-input .input input'),
    inputName = $('#people-name')

$(function() {
  if (localStorage.getItem('loginAction') == 'close-login') {
    body.addClass("close-login")
    
    $('section#home').fadeIn()
    window.onload=function() {
      $('section#home').addClass('show')
      var windowsize = $(window).width()
      if (windowsize >= 1051) {
        $('#navHome').click()
      } else {
        $('#mobHome').click()
      }
    }
  }
  if (localStorage.getItem('name') != '') {
    inputName.html('Olá' + ' ' + localStorage.getItem('name') + '!')
  }
  // if (localStorage.getItem('name') == '') {
  //   inputName.html('Olá a todos!')
  // }

  loginVal.each(function() {
    var elem = $(this);

    // Save current value of element
    elem.data('oldVal', elem.val());

    // Look for changes in the value
    elem.bind("propertychange change click keyup input paste", function(event) {
      // If value has changed...
      if (elem.data('oldVal') != elem.val()) {
        // Updated stored value
        elem.data('oldVal', elem.val());
        // action
        // $('#login-name').html(elem.val())
        if (elem.val() != '') {
          loginButton.css('cursor', 'pointer')
        } else {
          loginButton.css('cursor', 'no-drop')
        }
      }
    })
  });

  loginButton.click(function() {
    val = loginVal.val()

    if (val != '') {
      loginButton.css('cursor', 'pointer')
      localStorage.setItem('name', val)
      inputName.html('Olá' + ' ' + localStorage.getItem('name') + '!')
      body.addClass('close-login')
      localStorage.setItem('loginAction', 'close-login');
      $('section#home').fadeIn().addClass('show')
    } 
    else if (val == '') {
      loginVal.focus()
      login.addClass('alert')
      $('#login-alert span b').html('Por favor, preencha o campo acima.')
    }
  });
  
  loginVal.keypress(function (e) {
    if (e.which === 32) {
      login.addClass('alert')
      $('#login-alert span b').html('Digite apenas o primeiro nome.')
      return false;
    }
  });
  $(document).keypress(function (e) {
    if (e.which === 13) {
      loginButton.click()
    }
  });
  loginVal.blur(function() {
    login.removeClass('alert')
  })
}());