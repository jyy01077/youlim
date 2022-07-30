'use strict';

const svgDraw = function(el, cor, sp) {
    const path = document.querySelector(el);
    let speed = sp;
    let offset = speed;
    let color = cor;

    set();

    function set() {
        path.style.stroke = color;
        path.style.strokeWidth = 3;
        path.style.strokeDasharray = path.getTotalLength() + ',' + path.getTotalLength();
        path.style.strokeDashoffset = path.getTotalLength();


        window.requestAnimationFrame(draw.bind(this))
    }

    function draw() {
        if(speed < path.getTotalLength()) {
            path.style.strokeDashoffset = path.getTotalLength() - speed;

            window.requestAnimationFrame(draw.bind(this));
            speed = speed + offset;
        }else if(speed > path.getTotalLength()) {
            path.style.fill = color
        }
    }
}
svgDraw('#ggang_svg path', '#261201', 50);



var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 300,
    slideMargin = 30,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');


    slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin +'px';
    
    function moveSlide(num) {
        slides.style.left = -num * 330 + 'px';
        currentIdx = num;
    }

    nextBtn.addEventListener('click', function() {
        if(currentIdx < slideCount -4) {
            moveSlide(currentIdx + 1);
        }else {
            moveSlide(0);
        }

    });


    prevBtn.addEventListener('click', function() {
        if(currentIdx > 0) {
            moveSlide(currentIdx - 1);
        }else {
            moveSlide(slideCount - 4);
        }

    });



    var banner_slides = $('.banner-slides'),
        positions = [0, -1600, -3200, -4800],
        currentposition = 0;

        $('.btn-next').click(function() {
            
        })