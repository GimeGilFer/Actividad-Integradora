// Navegación lateral y modal
const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function() {
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function() {
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

// Carrusel de testimonios o clientes
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const customerSlides = document.querySelectorAll('.customer-slide');
let customerIndex = 0;

function updateCustomerSlider() {
    customerSlides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - customerIndex) * 100}%)`;
    });
}

nextBtn.addEventListener('click', () => {
    customerIndex = (customerIndex + 1) % customerSlides.length;
    updateCustomerSlider();
});

prevBtn.addEventListener('click', () => {
    customerIndex = (customerIndex - 1 + customerSlides.length) % customerSlides.length;
    updateCustomerSlider();
});

// Inicializa el slider de clientes
updateCustomerSlider();

// Carrusel de habitaciones
const roomSlides = document.querySelectorAll(".slide");
let roomIndex = 0;

function showRoomSlide(index) {
    roomSlides.forEach(slide => slide.classList.remove("active"));
    roomSlides[index].classList.add("active");
}

document.querySelector(".prev").addEventListener("click", () => {
    roomIndex = (roomIndex === 0) ? roomSlides.length - 1 : roomIndex - 1;
    showRoomSlide(roomIndex);
});

document.querySelector(".next").addEventListener("click", () => {
    roomIndex = (roomIndex === roomSlides.length - 1) ? 0 : roomIndex + 1;
    showRoomSlide(roomIndex);
});

// Inicializa el carrusel de habitaciones mostrando el primer slide
showRoomSlide(roomIndex);
