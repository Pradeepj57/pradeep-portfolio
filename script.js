

const navlinks = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('nav');



if(menuIcon) {
    menuIcon.addEventListener('click',()=>{
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}


const activepage=() => {
    navlinks.forEach(link =>{
        link.classList.remove('active');
    });

    if(menuIcon) {
        menuIcon.classList.remove('bx-x');
    }
    navbar.classList.remove('active');
}

navlinks.forEach((link, idx) =>{
    link.addEventListener('click', (e) => {
        e.preventDefault();
        activepage();
        link.classList.add('active');
        sections[idx].scrollIntoView({ behavior: 'smooth' });
    });
});


logolink.addEventListener('click', (e) =>{
    e.preventDefault();
    activepage();
    navlinks[0].classList.add('active');
    sections[0].scrollIntoView({ behavior: 'smooth' });
});

const resumeBtn = document.querySelectorAll('.resume-btn');

resumeBtn.forEach((btn, idx) =>{
    btn.addEventListener('click', () => {  
        const resumeDetail = document.querySelectorAll('.resume-detail');
       
        resumeBtn.forEach(btn =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetail.forEach(detail =>{
            detail.classList.remove('active');
        });
        resumeDetail[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index=0;
const activePortfolio=()=>{
    const imgslide = document.querySelectorAll('.portfolio-car .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    // imgslide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    
        imgslide.forEach(slide => {
            slide.style.transform= `translateX(calc( ${index * -100}% - ${index * 2}rem))`;
        });
        portfolioDetails.forEach(detail =>{
            detail.classList.remove('active');
        });
        portfolioDetails[index].classList.add('active');
        
        // Update button disabled state
        if(arrowLeft) {
            if(index === 0) {
                arrowLeft.classList.add('disabled');
            } else {
                arrowLeft.classList.remove('disabled');
            }
        }
        if(arrowRight) {
            if(index === 2) {
                arrowRight.classList.add('disabled');
            } else {
                arrowRight.classList.remove('disabled');
            }
        }
}

if(arrowRight) {
    arrowRight.addEventListener('click', () =>{
        if(index < 2){
            index++;
            activePortfolio();
        }
    });
}

if(arrowLeft) {
    arrowLeft.addEventListener('click', () =>{
        if(index > 0){
            index--;
            activePortfolio();
        }
    });
}

// WhatsApp prefilled message (sets anchor href)
const message = "Thank you for reaching out me.\nI appreciate your interest and would be happy to discuss further.\nPlease let me know the details.";
const phone = "919842496888";
const encodedMessage = encodeURIComponent(message);
const whatsappLink = document.getElementById("whatsappLink");
if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${phone}?text=${encodedMessage}`;
}

