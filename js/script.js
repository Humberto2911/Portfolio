/*Slider Imagenes Habilidades */

let imgArray = [
    './multimedia/4.png',
    './multimedia/5.png',
    './multimedia/6.png',
    './multimedia/9.png',
    './multimedia/10.png',
    './multimedia/11.png'
];

let img = document.getElementById('slide');
let i = 0;

const slideShow = () => {
    img.src = imgArray[i];
    i = (i < imgArray.length - 1) ? i+1 : 0;
}

const interval = () => {
    setInterval(slideShow,2000);
}


/*Formulario Contacto */

var form = document.getElementById("contactform");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
          status.classList.add('success');
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


    /*Page scroll */

   
    window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
      header.classList.toggle("sticky" , window.scrollY > 0);
  })
 