const loginButton = document.getElementById('closeLogin')
const closeLogin = 'close-login'
// const loginAction = 'close-login'

var login = document.querySelector('.login')
// var loginButton = document.querySelector('#login-btn button')

const loginClosed = localStorage.getItem('loginClosed')
// const loginOpCs = localStorage.getItem('loginAction')

const getCurrentLogin = () => document.body.classList.contains(closeLogin) ? 'close' : 'open'
// const getCurrentIcon = () => loginButton.classList.contains(loginAction) ? 'open-login' : 'close-login'

if (loginClosed) {
  document.body.classList[loginClosed === 'open-login' ? 'add' : 'remove'](darkTheme)
  // loginButton.classList[loginOpCs === 'open-menu' ? 'add' : 'remove'](loginAction)
}

loginButton.addEventListener('click', () => {
  const loginVal = document.querySelector('#login-input .input input')
  localStorage.setItem('name', loginVal.value)

  document.body.classList.toggle(closeLogin)
  // loginButton.classList.toggle(loginAction)

  localStorage.setItem('loginClosed', getCurrentLogin())
  // localStorage.setItem('loginAction', getCurrentIcon())
})

$(document).ready(function() {
  var inputName = $('#people-name')
  inputName.html('Olá' + ' ' + localStorage.getItem('name') + '!')
});