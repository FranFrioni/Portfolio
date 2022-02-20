$(document).ready(function(e) {   
    const faders = document.querySelectorAll('.slideleft');
    const moreFaders = document.querySelectorAll('.slideright');

    const appearOptions = {
        rootMargin: "0px 0px -200px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnSCroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnSCroll.unobserve(entry.target);
            }
        });
    }, appearOptions);


    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    moreFaders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

 });