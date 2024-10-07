document.getElementById('mobile-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const formData = {
    name: document.getElementById('name').value,
    number: document.getElementById('number').value,
    email: document.getElementById('email').value,
    model: document.getElementById('select').value,
    message: document.getElementById('message').value
  };

  // Send data to the backend via POST
  fetch('https://your-backend-server.com/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('SuccessFully submitting form');
    });
});
function Burger() {
  const navham = document.getElementById('nav-ham');

  if (navham.style.display === 'flex') {
    navham.style.display = 'none'
  } else {
    navham.style.display = 'flex'
  }
}