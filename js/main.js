window.onload = () => {
    let burger = document.querySelector ('.burger')
    let menu = document.querySelector ('.nav')
    burger.addEventListener ('click', function () {
        burger.classList.toggle ('active')
        menu.classList.toggle ('active')
        document.body.classList.toggle('lock')
    })

    let plusbtn = document.querySelector ('.right__item-plus')
    let plus =  document.querySelector ('.plus-content')
    plusbtn.addEventListener ('click', function (e) {
        if (e.target.classList.contains ('right__item-plus') || e.target == plus) {
            plusbtn.classList.toggle('off')
        }
    })

    let progressBar = document.querySelector ('.item__progress-bar');
    let progress = document.querySelectorAll ( '[data-bar]')
    progress.forEach(progres => {
        if (progres.dataset.bar <=2) {
            progres.style.backgroundColor = 'green'
        }
    });
    
    let vote = document.querySelector ('.vote-counter');
    let counter = 657;
    vote.textContent = counter + ' ' + 'голосов';

    const swiper = new Swiper ('.swiper', {
        slidesPerView: 3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    
        breakpoints: {
            991: {
              slidesPerView: 3,
              spaceBetween: 32
            },
            730: {
                slidesPerView: 2,
                spaceBetween: 32
            },
    
            320: {
                slidesPerView: 1.25,
                spaceBetween: 10
            }
        }
          
    })
}









