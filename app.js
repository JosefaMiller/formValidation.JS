document.querySelector('.send').addEventListener('click', function (event) {
  event.preventDefault();
  var numberCard = document.getElementById('numberCard').value;
  var cvc = document.getElementById('#cvc').value;
  var amount = document.getElementById('Amount').value;
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var city = document.getElementById('city').value;
  var postalCode = document.getElementById('postalCode').value;
  var message = document.getElementById('inputMessage').value;

  var isValid = true;


  if (!/^\d+$/.test(numberCard)) {
      isValid = false;
      document.getElementById('numberCard').classList.add('is-invalid');
      alert('Por favor ingrese un número de tarjeta válido.');
  } else {
      document.getElementById('numberCard').classList.remove('is-invalid');
  }

  
  if (!/^\d{4}$/.test(cvc)) {
      isValid = false;
      document.getElementById('#cvc').classList.add('is-invalid');
      alert('Por favor ingrese número CVC válido.');
  } else {
      document.getElementById('#cvc').classList.remove('is-invalid');
  }

 
  if (isNaN(amount)) {
      isValid = false;
      document.getElementById('Amount').classList.add('is-invalid');
      alert('Por favor ingrese una cantidad válida.');
  } else {
      document.getElementById('Amount').classList.remove('is-invalid');
  }


  if (!/^\d{6,8}$/.test(postalCode)) {
      isValid = false;
      document.getElementById('postalCode').classList.add('is-invalid');
      alert('Por favor ingrese un código postal válido.');
  } else {
      document.getElementById('postalCode').classList.remove('is-invalid');
  }

 
  if (firstName.trim() === '') {
      isValid = false;
      document.getElementById('firstName').classList.add('is-invalid');
      alert('Por favor ingrese su nombre.');
  } else {
      document.getElementById('firstName').classList.remove('is-invalid');
  }

 
  if (lastName.trim() === '') {
      isValid = false;
      document.getElementById('lastName').classList.add('is-invalid');
      alert('Por favor ingrese su apellido.');
  } else {
      document.getElementById('lastName').classList.remove('is-invalid');
  }

 
  if (city.trim() === '') {
      isValid = false;
      document.getElementById('city').classList.add('is-invalid');
      alert('Por favor ingrese su ciudad.');
  } else {
      document.getElementById('city').classList.remove('is-invalid');
  }

 
  if (message.length > 100) {
      isValid = false;
      document.getElementById('inputMessage').classList.add('is-invalid');
      alert('El mensaje no debe exceder los 100 caracteres.');
  } else {
      document.getElementById('inputMessage').classList.remove('is-invalid');
  }

  if (isValid) {
      

      alert('Formulario enviado con éxito!');
  }
});
