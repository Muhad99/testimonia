const data = [
    {
        id: 1,
        name: "James",
        job: "Web Developer",
        img: "images/pro.jpg",
        text: "i am extremely satisfied with the software services provied by this company adipisicing elitRerumcupiditate voluptatibus doloremque sintperspiciatisquas nobis ipsa cum inventore vitae dolores animi nostrum earum dolore est porro fugit id facilis",
    },
    {
        id: 2,
        name: "Samiat",
        job: "Web Developer",
        img: "images/samiat.png",
        text: "Lorem ipsum dolor sit ametconsectetur adipisicing elitRerumcupiditate voluptatibus doloremque sintperspiciatisquas nobis ipsa cum inventore vitae dolores animi nostrum earum dolore est porro fugit id facilis",
    },
    {
        id: 3,
        name: "Sofia",
        job: "Web Developer",
        img: "images/sophia.jpg",
        text: "Lorem ipsum dolor sit ametconsectetur adipisicing elitRerumcupiditate voluptatibus doloremque sintperspiciatisquas nobis ipsa cum inventore vitae dolores animi nostrum earum dolore est porro fugit id facilis",
    },
];


const img=document.querySelector("#pic");
const btnNext=document.querySelector("#btn-right");
const btnPrevious=document.querySelector("#btn-left");
const name=document.querySelector("#name");
const role=document.querySelector("#role");
const text=document.querySelector("#text");
let index = 0;
window.addEventListener("DOMContentLoaded", function () {
    const testimonial=data[0];
    loadTestimonial(testimonial);
});


function loadTestimonial(data){
    img.src = data.img;
    name.textContent = data.name;
    role.textContent = data.job;
    text.innerHTML = `<i class="fa fa-quote-left"></i> ${data.text}
    <i class="fa fa-quote-right"></i>`

}
btnNext.addEventListener("click", function (){
    index++;
    if (index > data.length - 1) {
        index = 0;
    }
    loadTestimonial(data[index]);
});

btnPrevious.addEventListener("click", function (){
    index--;
    if (index < 0) {
        index = data.length - 1;
    }
    loadTestimonial(data[index]);
});

function autoLoad() {
    index++;
    if (index > data.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = data.length - 1;
    }
    loadTestimonial(data[index]);
}

setInterval(autoLoad, 3000);