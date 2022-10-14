function log(message) {
    console.log(message);
}

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2,
                margin: 32,
            },
            // breakpoint from 480 up
            601: {
                items: 3,
                margin: 32,
            },
            // breakpoint from 768 up
            1001: {
                items: 3,
                margin: 48,
            },
        },
    });
});

//Video

const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video-picture');
const videoewrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoewrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPicture.classList.add('hidden');
        videoBtn.classList.add('none');
        videoewrapper.classList.remove('video-overlay');
        video.play();
    } else {
        video.pause();
        videoBtn.classList.remove('none');
        videoewrapper.classList.add('video-overlay');
    }
});

//MobileNavOpen

const openNavbtn = document.querySelector('#openMobileNav');
const closeNavbtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavbtn.onclick = function () {
    mobileNav.classList.remove('none');
    document.body.classList.add('no-scroll');
};

closeNavbtn.onclick = function () {
    mobileNav.classList.add('none');
    document.body.classList.remove('no-scroll');
};
