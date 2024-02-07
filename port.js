
const sr = ScrollReveal ({
    distance : '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.hero-text',{delay:100,origin:'bottom'});
sr.reveal('.profile-pic img',{delay:300,origin:'right'});
sr.reveal('.hero-text p',{delay:100,origin:'left'});
sr.reveal('.hero-text h2',{delay:100,origin:'right'});
sr.reveal('.hero-text h3',{delay:100,origin:'bottom'});
sr.reveal('.main-hero',{delay:100,origin:'bottom'});
sr.reveal('.main-hero-aside',{delay:100,origin:'bottom'});
sr.reveal('.skills-content',{delay:100,origin:'bottom'});
sr.reveal('.container p, h1',{delay:100,origin:'bottom'});
sr.reveal('.worklist',{delay:100,origin:'bottom'});
sr.reveal('.btn-more',{delay:100,origin:'bottom'});
sr.reveal('.btn',{delay:100,origin:'bottom'});
sr.reveal('.top-text h1,p',{delay:100,origin:'bottom'});





// more projects
const button = document.querySelector('.btn-serve');

const content = document.querySelector('.show-div');
const icon = document.getElementById('close');

button.addEventListener('click', function() {
    content.style.display = 'block';
});

icon.addEventListener('click', function() {
    content.style.display = 'none';
});

// end of more projects


 



