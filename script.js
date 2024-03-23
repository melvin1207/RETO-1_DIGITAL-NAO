function openNav(){
  document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
  document.getElementById("mobile-menu").style.width = "0%";
}

(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()