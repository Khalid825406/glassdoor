

document.addEventListener("DOMContentLoaded", function () {
    let sliderContainer = document.querySelector(".slider1");
    let slidesToShow = 6;
    let currentIndexx = 0;
    let images = [];

    // Create images dynamically
    for (let i = 1; i <= 18; i++) {
        let aTag = document.createElement('a');
        aTag.href = "#";
        aTag.classList.add('slide');

        let img = document.createElement('img');
        img.src = `./new-images/clients/${i}.png`;
        img.alt = `Image ${i}`;

        images.push(img.src);

        img.addEventListener("click", function (e) {
            e.preventDefault();
            openLightbox(i - 1);
        });

        aTag.appendChild(img);
        sliderContainer.appendChild(aTag);
    }

    const slides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].offsetWidth + 10;
    const maxIndex = slides.length - slidesToShow;

    function moveSlider(direction) {
        currentIndexx += direction;
        if (currentIndexx < 0) currentIndexx = maxIndex;
        else if (currentIndexx > maxIndex) currentIndexx = 0;
        updateSlider();
    }

    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndexx * slideWidth}px)`;
    }

    function autoSlide() {
        moveSlider(1);
    }

    let autoSlideInterval = setInterval(autoSlide, 3000);

    document.querySelector(".prev").addEventListener("click", function () {
        moveSlider(-1);
        resetAutoSlide();
    });

    document.querySelector(".next").addEventListener("click", function () {
        moveSlider(1);
        resetAutoSlide();
    });

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 3000);
    }

    /* LIGHTBOX FUNCTIONALITY */
    let lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    let lightboxImg = document.createElement('img');
    lightbox.appendChild(lightboxImg);

    let closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('lightbox-close');
    lightbox.appendChild(closeButton);

    let prevButton = document.createElement('button');
    prevButton.innerHTML = '&#10094;';
    prevButton.classList.add('lightbox-prev');
    lightbox.appendChild(prevButton);

    let nextButton = document.createElement('button');
    nextButton.innerHTML = '&#10095;';
    nextButton.classList.add('lightbox-next');
    lightbox.appendChild(nextButton);

    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
    }

    function updateLightbox() {
        lightboxImg.src = images[currentIndex];
    }

    closeButton.addEventListener("click", function () {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg && e.target !== prevButton && e.target !== nextButton) {
            lightbox.classList.remove('active');
        }
    });

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    });
});