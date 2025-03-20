const items = document.querySelectorAll('#header-carousel .carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Show the current slide
function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active', 'fadeIn');
        if (i === index) {
            item.classList.add('active', 'fadeIn');
        }
    });
}

// Previous button click handler
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

// Next button click handler
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

// Auto-slide every 5 seconds
const autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}, 5000);

// Pause the auto-slide when the user clicks on navigation buttons
[prevBtn, nextBtn].forEach(button => {
    button.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".number");
    counters.forEach(counter => {
        let target = +counter.getAttribute("data-target");
        let count = 0;
        let speed = target / 100;
        
        const updateCounter = () => {
            if (count < target) {
                count += speed;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let paragraphs = document.querySelectorAll(".truncate-text");

    paragraphs.forEach(paragraph => {
        let words = paragraph.innerText.split(" ");
        if (words.length > 10) {
            paragraph.innerText = words.slice(0, 5).join(" ") + " ...";
        }
    });
});


