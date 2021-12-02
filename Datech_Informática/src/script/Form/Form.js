// ======================= CONTACT FORM ============================
$("#newsletterForm").submit(function(event) {
  // event.preventDefault();
  $.ajax({
    url: 'https://api.staticforms.xyz/submit',
    type: "POST",
    dataType: 'json',
    data: $("#newsletterForm").serialize(),
    success: function(result) {
      console.log(JSON.parse(result))
    },
    error: function(xhr, resp, text) {
      console.log(xhr, resp, text)
    }
  })
});