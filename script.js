document.querySelector(".v-back").addEventListener("click",()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.querySelector('body').addEventListener('mousemove', (evt) => {
    var change;
    var posX = evt.clientX;
    var posY = evt.clientY;
    var left = change * 20;
    var posX = posX * 2;
    posY = posY * 2;
    document.querySelector('.sec4-images1').style.marginTop = `${posY / 53}px`;
    document.querySelector('.sec4-images2').style.marginLeft = `${posY / 23}px`;
    document.querySelector('.sec4-images3').style.marginLeft = `${posX / 23}px`;
    document.querySelector('.sec4-images4').style.marginBottom= `${posX / 43}px`;
    document.querySelector('.sec4-images5').style.marginBottom = `${posY / 20}px`;
    document.querySelector('.sec4-images6').style.marginLeft = `${posY / 23}px`;
});

