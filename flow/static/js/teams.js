/* CODE FOR CARD */
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const hamburgerMenu = document.querySelector("#hamburger-menu");
            hamburgerMenu.classList.add('hide-transition');
            setTimeout(() => {
                hamburgerMenu.classList.add('hidden');
            }, 500);

            setTimeout(() => {
                const crossInput = document.querySelector('input#button');
                crossInput.checked = true;
                hamburgerMenu.classList.remove('hidden');
                hamburgerMenu.classList.remove('hide-transition');
            }, 1000);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', mouseOver);
        card.addEventListener('mouseleave', mouseLeave);
        card.addEventListener('mousemove', mouseMove);
    });
});

function mouseOver(event) {
    const cardContent = event.currentTarget.querySelector('.card-content');
    cardContent.classList.add('hover');
}

function mouseLeave(event) {
    const cardContent = event.currentTarget.querySelector('.card-content');
    cardContent.classList.remove('hover');
    cardContent.style.transform = "";
}

function mouseMove(event) {
    const cardContent = event.currentTarget.querySelector('.card-content');
    const cardWidth = event.currentTarget.offsetWidth;
    const cardHeight = event.currentTarget.offsetHeight;
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;

    const rotationY = (offsetX - cardWidth / 2) / 30;
    const rotationX = (cardHeight / 2 - offsetY) / 35;

    if (offsetX > (cardWidth / 2)) {
        cardContent.style.transform = `translate3d(0px, 0px, 30px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    } else if (offsetX < (cardWidth / 2)) {
        cardContent.style.transform = `translate3d(0px, 0px, 30px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }
}
/* CODE FOR CARD */