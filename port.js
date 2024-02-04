
const sr = ScrollReveal ({
    distance : '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.nav-menu',{delay:100,origin:'left'});
sr.reveal('.show',{delay:100,origin:'left'});
sr.reveal('.hero-text',{delay:100,origin:'bottom'});
sr.reveal('.hero-text p',{delay:100,origin:'left'});
sr.reveal('.hero-text h2',{delay:100,origin:'right'});
sr.reveal('.hero-text h3',{delay:100,origin:'bottom'});
sr.reveal('.img',{delay:100,origin:'bottom'});
sr.reveal('.bottom-text',{delay:100,origin:'bottom'});
sr.reveal('.bottom-text,h2,span',{delay:100,origin:'bottom'});
sr.reveal('.main-hero',{delay:100,origin:'bottom'});
sr.reveal('.card',{delay:100,origin:'bottom'});
sr.reveal('.work',{delay:100,origin:'bottom'});
sr.reveal('.main-hero-aside',{delay:100,origin:'bottom'});
sr.reveal('.skills-content',{delay:100,origin:'bottom'});
sr.reveal('.container p, h1',{delay:100,origin:'bottom'});
sr.reveal('.worklist',{delay:100,origin:'bottom'});
sr.reveal('.btn-more',{delay:100,origin:'bottom'});
sr.reveal('.btn',{delay:100,origin:'bottom'});
sr.reveal('.top-text h1,p',{delay:100,origin:'bottom'});
sr.reveal('.footer-contact-me',{delay:100,origin:'bottom'});
sr.reveal('.contact-body',{delay:100,origin:'bottom'});
sr.reveal('.form-fill-out',{delay:100,origin:'bottom'});
sr.reveal('.show-top-arrow',{delay:100,origin:'left'});
sr.reveal('.owner-details p',{delay:100,origin:'right'});



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

const submit = document.querySelector('.button-send')
const fName = document.getElementById('fname');
const email = document.getElementById('email');
const sub = document.getElementById('subject');
const message = document.getElementById('message');
const show = document.querySelector('.warn')

submit.addEventListener('click', () =>{
    if(fName.innerText === ''){
        show.innerHTML = 'This Field is Required!';
        fName.style.borderBlockColor = 'red';
    }
})


fName.addEventListener('input',() =>{
        show.innerHTML = '';
        fName.style.borderBlockColor = 'lightGray';
})
 

const wait = document.getElementById('wait');

wait.addEventListener('click', () => {
 alert('The page is undergoing some changes.Soon it will be functional.Thank you.');
})
