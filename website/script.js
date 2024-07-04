document.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    let scrollTop = document.documentElement.scrollTop;
    parallaxElements.forEach(element => {
        let speed = element.getAttribute('data-speed');
        element.style.backgroundPositionY = -(scrollTop * speed) + 'px';
    });
});
