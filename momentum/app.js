const title = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
    title.style.color = 'blue';
}

function handleMouseEntera() {
    title.innerText = 'mouse is here!';
}

function handleMouseLeave() {
    title.innerText = 'mouse is gone!';
}

title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEntera);
title.addEventListener('mouseleave', handleMouseLeave);
