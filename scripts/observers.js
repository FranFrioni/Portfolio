$(document).ready(function(e) {   
    const faders = document.querySelectorAll('.slideleft');
    const moreFaders = document.querySelectorAll('.slideright');
    const titles = document.querySelectorAll('.titles');
    const arrows = document.querySelectorAll('.arrow');

    const appearOptions = {
        rootMargin: "0px 0px -550px 0px"
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

    const appearOptionsTitles = {};

    const appearOnScrollTitles = new IntersectionObserver(function(entries, appearOnSCroll) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScrollTitles.unobserve(entry.target);
            }
        });
    }, appearOptionsTitles);

    const appearOptionsArrows = {
        rootMargin: "-350px 0px 0px 0px"
    };

    const appearOnScrollArrows = new IntersectionObserver(function(entries, appearOnSCroll) {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.remove('visible');
            } else {
                entry.target.classList.add('visible');
            }
        });
    }, appearOptionsArrows);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    moreFaders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    titles.forEach(fader => {
        appearOnScrollTitles.observe(fader);
    });

    arrows.forEach(fader => {
        appearOnScrollArrows.observe(fader);
    });

 });