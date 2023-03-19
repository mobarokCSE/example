//Animation on Scroll initializing
AOS.init();




// =================== preloader js  ================== //

// window.addEventListener('load', function () {
//     var preloader = document.querySelector('.preloader');
//     preloader.style.transition = 'opacity 5s ease';
//     preloader.style.opacity = '0';
//     setTimeout(function () {
//         preloader.style.display = 'none';
//     }, 5000);
// });

// =================== preloader js end ================== //






// =================== header js start here ===================


// Add class 'menu-item-has-children' to parent li elements of '.submenu'
var submenuList = document.querySelectorAll("ul>li>.submenu");
submenuList.forEach(function (submenu) {
    var parentLi = submenu.parentElement;
    if (parentLi) {
        parentLi.classList.add("menu-item-has-children");
    }
});

// Fix dropdown menu overflow problem
var menuList = document.querySelectorAll("ul");
menuList.forEach(function (menu) {
    var parentLi = menu.parentElement;
    if (parentLi) {
        parentLi.addEventListener("mouseover", function () {
            var menuPos = menu.getBoundingClientRect();
            if (menuPos.left + menu.offsetWidth > window.innerWidth) {
                menu.style.left = -menu.offsetWidth + "px";
            }
        });
    }
});



// Toggle menu on click

var menuLinks = document.querySelectorAll(".menu li a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.stopPropagation(); // prevent the event from bubbling up to parent elements
        var element = link.parentElement;
        if (parseInt(window.innerWidth) < 1200) {
            if (element.classList.contains("open")) {
                element.classList.remove("open");
                element.querySelector("ul").style.display = "none";
            } else {
                element.classList.add("open");
                element.querySelector("ul").style.display = "block";
            }
        }
    });
});


// Close the sub-menu if the user clicks outside of it
// document.addEventListener("click", function (e) {
//     var submenu = document.querySelector(".menu .submenu");
//     if (submenu && !submenu.contains(e.target)) {
//         submenu.querySelectorAll("li").forEach(function (li) {
//             li.classList.remove("open");
//             li.querySelector("ul").style.display = "none";
//         });
//     }
// });





// Toggle header bar on click
var headerBar = document.querySelector(".header-bar");
headerBar.addEventListener("click", function () {
    headerBar.classList.toggle("active");
    var menu = document.querySelector(".menu");
    if (menu) {
        menu.classList.toggle("active");
    }
});




//Header
var fixedTop = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        fixedTop.classList.add("header-fixed", "fadeInUp");
    } else {
        fixedTop.classList.remove("header-fixed", "fadeInUp");
    }
});


// =================== header js end here =================== //



// =================== custom trk slider js here =================== //

// component slider here
const Swiper1 = new Swiper('.course__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },

    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-1",
        clickable: true
    },
});

// home 4 course slider
const Swiper4 = new Swiper('.course__slider--style4', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        }
    },

    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-2",
        clickable: true
    },
});

// home 1 testimonial  slider here

var swiperAuthor = new Swiper(".testimonial__author", {
    spaceBetween: 1,
    slidesPerView: 4,
    freeMode: true,
    clickable: true,
    spaceBetween: 10,
    breakpoints: {

        768: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    },
});


const Swiper2 = new Swiper('.testimonial__slider', {
    grabCursor: true,
    effect: "fade",
    loop: true,
    slidesPerView: 1,
    speed: 500,
    thumbs: {
        swiper: swiperAuthor,
    },
    autoplay: true,
});



const studentreview = new Swiper('.studentreview__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
    },
    // autoplay: {
    //     delay: 1,
    //     disableOnInteraction: true,
    // },
    speed: 3000,
});


// home 1 partner  slider here
const Swiper3 = new Swiper('.partner__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
});


// home 2 course category slider
// component slider here
const Swiper5 = new Swiper('.categories__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-1",
        clickable: true
    },
});

// testimonial
const Swiper7 = new Swiper('.testimonial__slider2', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 2,
            spaceBetween: 25,
        }
    },
    speed: 3000,
    pagination: {
        el: ".slider__pagination-3",
        clickable: true
    },
});



// home 3 slider
// team slider 
const swiper11 = new Swiper('.team__slider1', {
    slidesPerView: 2,
    grabCursor: true,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        // 1200: {
        //     slidesPerView: 5,
        //     spaceBetween: 25,
        // },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 5000,
});
const swiper12 = new Swiper('.team__slider2', {
    slidesPerView: 2,
    grabCursor: true,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        // 1200: {
        //     slidesPerView: 5,
        //     spaceBetween: 25,
        // },
    },
    autoplay: {
        delay: 1,
        reverseDirection: true,
        disableOnInteraction: true,
    },
    speed: 5000,
});



var testimonialStoryteller = new Swiper(".testimonial__author3", {
    spaceBetween: 24,
    // slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    clickable: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    },
});

// testimonial
const testimonialSlider3 = new Swiper('.testimonial__slider3', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    speed: 3000,
    thumbs: {
        swiper: testimonialStoryteller,
    },
});







// blog
const BlogSlider = new Swiper('.blog__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 3000,
});


// =================== custom trk slider end here =================== //




// =================== scroll js start here =================== //

// Show/hide button on scroll
window.addEventListener('scroll', function () {
    var scrollToTop = document.querySelector('.scrollToTop');
    if (window.pageYOffset > 300) {
        scrollToTop.style.bottom = '7%';
        scrollToTop.style.opacity = '1';
        scrollToTop.style.transition = 'all .5s ease';
    } else {
        scrollToTop.style.bottom = '-30%';
        scrollToTop.style.opacity = '0';
        scrollToTop.style.transition = 'all .5s ease';
    }
});

// Click event to scroll to top
document.querySelector('.scrollToTop').addEventListener('click', function (e) {
    e.preventDefault();
    var scrollDuration = 100; // Set scroll duration in milliseconds
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    var scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
});
// //Click event to scroll to top
// document.querySelector(".scrollToTop").addEventListener("click", function () {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// =================== scroll js end here =================== //





// =================== form validation start here =================== //

// Fetch all the forms we want to apply custom Bootstrap validation styles to
// const forms = document.querySelectorAll('.needs-validation');

// // Loop over them and prevent submission
// Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//             event.preventDefault();
//             event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//     });
// });

// =================== form validation end here =================== //


// =================== count start here =================== //
new PureCounter();
// =================== count end here =================== //