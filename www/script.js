const toggleMenuBtn = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');

toggleMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Tambahan event listener untuk menyembunyikan menu saat salah satu item di-klik
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Get the modal and the button that opens it
const modal = document.getElementById('myModal');
const openModalButton = document.getElementById('open-modal');

// Get the element to close the modal
const closeModalButton = document.getElementById('close-modal');

// When the user clicks the button, open the modal
openModalButton.addEventListener('click', function () {
    modal.style.display = 'block';
});

// When the user clicks the close button, close the modal
closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Add an event listener for form submission
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get values from form fields (you can include validation here)
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here, you can include your form data validation logic if needed

    // Assuming validation is successful, redirect to index.html
    window.location.href = 'index.html';
});
