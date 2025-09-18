const sectionCard = document.querySelector(".js-section-cards");

const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const img4 = document.querySelector(".img4")

function Animacao(elem, xPosicao) {
    gsap.to(elem, {
        x: xPosicao,
        duration: 2,
        opacity: 1,
        ease: Elastic.easeOut,
        scrollTrigger: {
            trigger: sectionCard,
            start: 'top center',
            end: 'bottom center',
            markers: true,
            scrub: true
        }
    })
}

Animacao(img1, -420);
Animacao(img2, -125);
Animacao(img3, 125);
Animacao(img4, 420);