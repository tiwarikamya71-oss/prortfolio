document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});




document.querySelector('.btn-box').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#about').scrollIntoView({
    behavior: 'smooth'
  });
});



document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); 

  alert("Form submitted successfully ✅");

  this.reset(); 
});


document.querySelectorAll('.project-list a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});