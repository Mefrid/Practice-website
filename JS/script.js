var Scroll1 = document.getElementById("Scroll-1");
var Scroll2 = document.getElementById("Scroll-2");
var Scroll3 = document.getElementById("Scroll-3");
var Scroll4 = document.getElementById("Scroll-4");
var Scroll5 = document.getElementById("Scroll-5");
var Scroll6 = document.getElementById("Scroll-6");
var Scroll7 = document.getElementById("Scroll-7");
var Scroll8 = document.getElementById("Scroll-8");
var Scroll9 = document.getElementById("Scroll-9");
var Pictures = document.getElementsByClassName('pic');
var Prev = document.getElementById('prev');
var Next = document.getElementById('next');
var CarouselIndex = 1;
function setPictures() {
    console.log(Pictures.length);
    for(let i = 0; i < Pictures.length; ++i) {
        let pic = document.getElementById(`pic${i+1}`);
        pic.style.backgroundImage = `url(../Assets/Pic-${i+1}.PNG)`;
        pic.style.backgroundSize = 'cover';
    }
}
Next.addEventListener('click', () => {
    document.getElementById(`carousel-item-${CarouselIndex}`).classList.remove('visible-slide');
    CarouselIndex++;
    if(CarouselIndex > 3) CarouselIndex = 1;
    document.getElementById(`carousel-item-${CarouselIndex}`).classList.add('visible-slide');
});
Prev.addEventListener('click', () => {
    document.getElementById(`carousel-item-${CarouselIndex}`).classList.remove('visible-slide');
    CarouselIndex--;
    if(CarouselIndex < 1) CarouselIndex = 3;
    document.getElementById(`carousel-item-${CarouselIndex}`).classList.add('visible-slide');
});

setPictures();

Scroll1.addEventListener('click', ()=> {
    let WhatCan = document.getElementById("WhatCan");
    WhatCan.scrollIntoView({behavior: "smooth"});
})
Scroll2.addEventListener('click', ()=> {
    let Expand = document.getElementById("Expand");
    Expand.scrollIntoView({behavior: "smooth"});
})
Scroll3.addEventListener('click', ()=> {
    let OurP = document.getElementById("Our-Process");
    OurP.scrollIntoView({behavior: "smooth"});
})
Scroll4.addEventListener('click', ()=> {
    let Do1 = document.getElementById("Do-Section1");
    Do1.scrollIntoView({behavior: "smooth"});
})
Scroll5.addEventListener('click', ()=> {
    let Do2 = document.getElementById("Do-Section2");
    Do2.scrollIntoView({behavior: "smooth"});
})
Scroll6.addEventListener('click', ()=> {
    let Do3 = document.getElementById("Do-Section3");
    Do3.scrollIntoView({behavior: "smooth"});
})
Scroll7.addEventListener('click', ()=> {
    let Portfolio = document.getElementById("Portfolio");
    Portfolio.scrollIntoView({behavior: "smooth"});
})
Scroll8.addEventListener('click', ()=> {
    let OurTeam = document.getElementById("OurTeam");
    OurTeam.scrollIntoView({behavior: "smooth"});
})
Scroll9.addEventListener('click', ()=> {
    let People = document.getElementById("People");
    People.scrollIntoView({behavior: "smooth"});
})