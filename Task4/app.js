const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });
});



const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Toggle the display of the answer
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
