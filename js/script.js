/*SLIDE DE IMAGENS*/
let slidePosition = 1;
SlideShow(slidePosition);
// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}
//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}
function SlideShow(n) {
  let i;
  let slides = document.getElementsByClassName("Containers");
  let circles = document.getElementsByClassName("dots");
  if (n > slides.length) { slidePosition = 1 }
  if (n < 1) { slidePosition = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}


//LocalStorage
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;

  let data = {
    email
  }

  let convertData = JSON.stringify(data);
  localStorage.setItem('lead', convertData)
  let conteudo = document.getElementById('form');
  let sucesso = `<p> Obrigado! Visite nosso site no link embaixo!</p>`
  alert('Sucesso!')
  conteudo.innerHTML = sucesso


})