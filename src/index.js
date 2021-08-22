import { Sampler } from "tone";
import C2 from '../resources/808 kit/808-kick.wav'
import C3 from '../resources/808 kit/808-snare.wav'
import C4 from '../resources/808 kit/808-cymbal.wav'
import C5 from '../resources/808 kit/808-ohat.wav'
import C6 from '../resources/808 kit/808-chat.wav'
import C7 from '../resources/808 kit/808-shaker.wav'
import C8 from '../resources/808 kit/808-triangle.wav'
import C9 from '../resources/808 kit/808-clap.wav'

// Tone Sampler
const sampler = new Sampler(
    { C2, C3, C4, C5, C6, C7, C8, C9 },
    {
        onload: () => {
            document.querySelector(".tone-kick").removeAttribute("disabled");
            document.querySelector(".tone-snare").removeAttribute("disabled");
            document.querySelector(".tone-cymbal").removeAttribute("disabled");
            document.querySelector(".tone-ohat").removeAttribute("disabled");
            document.querySelector(".tone-chat").removeAttribute("disabled");
            document.querySelector(".tone-shaker").removeAttribute("disabled");
            document.querySelector(".tone-triangle").removeAttribute("disabled");
            document.querySelector(".tone-clap").removeAttribute("disabled");
        }
    }
).toDestination();

// Tone Sampler Triggers - click
document.querySelector(".tone-kick").addEventListener("click", () => {
    sampler.triggerAttack("C2");
});

document.querySelector(".tone-snare").addEventListener("click", () => {
    sampler.triggerAttack("C3");
})

document.querySelector(".tone-cymbal").addEventListener("click", () => {
    sampler.triggerAttack("C4");
})

document.querySelector(".tone-ohat").addEventListener("click", () => {
    sampler.triggerAttack("C5");
})

document.querySelector(".tone-chat").addEventListener("click", () => {
    sampler.triggerAttack("C6");
})

document.querySelector(".tone-shaker").addEventListener("click", () => {
    sampler.triggerAttack("C7");
})

document.querySelector(".tone-triangle").addEventListener("click", () => {
    sampler.triggerAttack("C8");
})

document.querySelector(".tone-clap").addEventListener("click", () => {
    sampler.triggerAttack("C9");
})

// Tone Sampler Triggers - keydown
document.querySelector("body").addEventListener("keypress", (e) => {
    if (e.key === "a") {
        sampler.triggerAttack("C2");
    }
});

document.querySelector("body").addEventListener("keypress", (e) => {
    if (e.key === "s") {
        sampler.triggerAttack("C3");
    }
});
document.querySelector("body").addEventListener("keypress", (e) => {
    if (e.key === "d") {
        sampler.triggerAttack("C4");
    }
});
document.querySelector("body").addEventListener("keypress", (e) => {
    if (e.key === "f") {
        sampler.triggerAttack("C5");
    }
});
document.querySelector("body").addEventListener("keypress", (e) => {
    if (e.key === "q") {
        sampler.triggerAttack("C6");
    }
});
document.querySelector("body").addEventListener("keypress", (e) => {
    if (e.key === "w") {
        sampler.triggerAttack("C7");
    }
});
document.querySelector("body").addEventListener("keypress", (e) => {
    if (e.key === "e") {
        sampler.triggerAttack("C8");
    }
});
document.querySelector("body").addEventListener("keypress", (e) => {
    if (e.key === "r") {
        sampler.triggerAttack("C9");
    }
});