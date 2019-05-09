function ScrollAppear() {
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /2;

    if (introPosition  < screenPosition) {
        introText.classList.add('intro-appear');
    }
}


window.addEventListener('scroll',ScrollAppear);