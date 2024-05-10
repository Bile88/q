// Get the form element
const form = document.getElementById('contact-form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const formData = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
    messageDetails: form.elements['message-details'].value
  };

  // Send the form data to the server (you can use AJAX or fetch API)
  sendFormData(formData);

  // Reset the form fields
  form.reset();
});

// Function to send the form data to the server
function sendFormData(formData) {
  // Replace this with your server-side code to handle the form data
  console.log('Form data:', formData);
  // You can use AJAX or fetch API to send the data to the server
}