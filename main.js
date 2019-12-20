const navSlide = () => {
    const burger= document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // Animate links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
    });
}

 navSlide();


//  Animation 
$('.jumbotron-text').fadeIn(2000);

$('.welcome-text').fadeIn(3000);

$('.welcome-massage-tech').fadeIn(4000);

$('.services').slideDown(3000);

$('.testimonials').fadeIn(3000);

$('.blog').fadeIn(3000);



// Button alert for coupon code selection
$('.btn').click(function() {
    $('.information-text').hide('slow', function() {
        alert('Congrats you claim your $20 discount!');
    });
    $('.information-text').show('slow');
});
