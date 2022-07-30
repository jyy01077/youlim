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
    // p = document.querySelectorAll('.visible'),
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

    // for(let i = 0; i < slide.length; i++) {
    //     slide[i].addEventListener('mouseover', function() {
    //         p[i].classList.remove('s');
    //     });
    // }

    // for(let i = 0; i < slide.length; i++) {
    //     slide[i].addEventListener('mouseout', function() {
    //         p[i].classList.add('s');
    //     });
    // }
    // slide[3].addEventListener('mouseover', function() {
    //     p[3].classList.remove('s');
    // });

var banner_slides = $('.banner-slides'),
        positions = [0, -1600, -3200],
        currentposition = 0;

    $('.btn-next').click(function() {
        if(currentposition < positions.length-1) {
            currentposition++;
        } else {
            currentposition = 0;
        }
        banner_slides.animate({left:positions[currentposition]},500);
    });

    $('.btn-prev').click(function() {
        if(currentposition > 0) {
            currentposition--;
        } else {
            currentposition = positions.length-1;
        }
        banner_slides.animate({left:positions[currentposition]},500);
});

let fltmxm =document.querySelectorAll('.slides li'),
    p = document.querySelectorAll('.visible');

        for(let i = 0; i < fltmxm.length; i++) {
            fltmxm[i].addEventListener('mouseover', function() {
            p[i].classList.remove('s');
        });
    }

    for(let i = 0; i < fltmxm.length; i++) {
        fltmxm[i].addEventListener('mouseout', function() {
            p[i].classList.add('s');
        });
    };


let scrollTop = document.getElementsByClassName('scrollTop');

    document.addEventListener('scroll', () => {
      if (scrollY > window.innerHeight / 3) {
        scrollTop[0].classList.add('visible');
      } else {
        scrollTop[0].classList.remove('visible');
      }
    });
    
    scrollTop[0].addEventListener('click', () => {
      let posY = parseInt(scrollY);
    
      let timeout = setInterval(() => {
        window.scroll(scrollX, posY -= 5);
    
        if (posY <= 0) {
          clearInterval(timeout);
        }
      }, 5);
    });

