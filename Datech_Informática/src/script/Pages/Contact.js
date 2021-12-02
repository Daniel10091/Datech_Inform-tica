jQuery(function() {
  var inputName = $('.contact-input.name input'),
      inputNameValid = $('.contact-input.name'),
      inputMail = $('.contact-input.mail input'),
      inputMailValid = $('.contact-input.mail'),
      contactInputName = $('.contact-input.name input'),
      contactInputPhone = $('.contact-input.phone input'),
      contactInputMail = $('.contact-input.mail input'),
      contactInputMessage = $('.contact-textarea textarea'),
      bontactBtn = $('.contact-btn button')

  inputName.each(function() {
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
        if (elem.val() != '') {
          inputNameValid.addClass('valid')
        } else {
          inputNameValid.removeClass('valid')
        }
      }
    })
  });
  inputMail.each(function() {
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
        if (elem.val() != '') {
          inputMailValid.addClass('valid')
        } else {
          inputMailValid.removeClass('valid')
        }
      }
    })
  });
  bontactBtn.click(function() {
    if (contactInputName.val() != '') {
      if (contactInputPhone.val() != '') {
        if (contactInputMail.val() != '') {
          if (contactInputMessage.val() != '') {
            alert('Obrigado por entrar em contato conosco. Reponderemos em breve.')
          }
        }
      }
    }
  })
}())