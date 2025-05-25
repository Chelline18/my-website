const revealOnScroll = (selector) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
};

const elementsToReveal = [
    '.hh1',
    '.hh21',
    '.hh22',
    '.hh3',
    '.abt',
    '.about-img img',
    '.service',
    '.know',
    '#news',
    '.ac',
    '.fig'
];

window.addEventListener('scroll', () => {
    elementsToReveal.forEach(selector => revealOnScroll(selector));
});
