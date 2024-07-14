// script.js

function countdown() {
  const countdownElement = document.getElementById('countdown');
  const targetDate = new Date('July 14, 2025 00:00:00').getTime();

  const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
          clearInterval(interval);
          countdownElement.innerHTML = "The event has started!";
          return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `
          <span class="days">${days} days</span> 
          <span class="hours">${hours} hours</span> 
          <span class="minutes">${minutes} minutes</span> 
          <span class="seconds">${seconds} secs</span>
      `;
  }, 1000);
}

countdown();


document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('showing');
    });
});

function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
}
  
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

