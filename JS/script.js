/*==================== toggle icon navbar ====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
/*==================== scroll sections active link ====================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
     };
  });
  
/*==================== sticky navbar ====================*/
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
  });

  ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
  ScrollReveal().reveal('.home-img, .services-conteiner, .portfolio-box, .contact form', {origin:'bottom'});
  ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
  ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});

/*==================== typed js ====================*/
const type = new Typed('.multiple-text',{
   strings: ['Frontend Developer', 'Frontend Developer', 'Frontend Developer'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
})

/*==================== send email ====================*/

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  emailjs.init({
    publicKey:"KmVc0mC27wMfFee5Q",
  });

  emailjs.sendForm( "service_38btk7i", "template_qrhsn5g", form)
  .then((response) => alert("Mensagem enviada com sucesso!"))
  .catch((error) => {
    console.log(error)
     alert("Erro ao enviar a mensagem!")
  });
  
  console.log("passei aqui")
})

/*==================== mask cel ====================*/
function formatar(mascara, documento) {
let i = documento.value.length;
let saida = '#';
let texto = mascara.substring(i);
while (texto.substring(0, 1) != saida && texto.length ) {
  documento.value += texto.substring(0, 1);
  i++;
  texto = mascara.substring(i);
}
}
/*==================== end ====================*/