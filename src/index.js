import { Sampler, Context, setContext } from "tone";
import C2 from '../resources/808 kit/808-kick.mp3'
import C3 from '../resources/808 kit/808-snare.mp3'
import C4 from '../resources/808 kit/808-ohat.mp3'
import C5 from '../resources/808 kit/808-chat.mp3'
import C6 from '../resources/808 kit/808-cymbal.mp3'
import C7 from '../resources/808 kit/808-shaker.mp3'
import C8 from '../resources/808 kit/808-triangle.mp3'
import C9 from '../resources/808 kit/808-clap.mp3'



// Tone Sampler
const sampler = new Sampler(
    { C2, C3, C4, C5, C6, C7, C8, C9 },
    {
        onload: () => {
            document.querySelector(".tone-kick").removeAttribute("disabled");
            document.querySelector(".tone-snare").removeAttribute("disabled");
            document.querySelector(".tone-chat").removeAttribute("disabled");
            document.querySelector(".tone-ohat").removeAttribute("disabled");
            document.querySelector(".tone-cymbal").removeAttribute("disabled");
            document.querySelector(".tone-shaker").removeAttribute("disabled");
            document.querySelector(".tone-triangle").removeAttribute("disabled");
            document.querySelector(".tone-clap").removeAttribute("disabled");
        }
    }
).toDestination();


// Tone Sampler Triggers - click
document.querySelector(".tone-kick").addEventListener("mousedown", () => {
    sampler.triggerAttack("C2");
});
document.querySelector(".tone-snare").addEventListener("mousedown", () => {
    sampler.triggerAttack("C3");
})
document.querySelector(".tone-ohat").addEventListener("mousedown", () => {
    sampler.triggerAttack("C4");
})
document.querySelector(".tone-chat").addEventListener("mousedown", () => {
    sampler.triggerAttack("C5");
})
document.querySelector(".tone-cymbal").addEventListener("mousedown", () => {
    sampler.triggerAttack("C6");
})
document.querySelector(".tone-shaker").addEventListener("mousedown", () => {
    sampler.triggerAttack("C7");
})
document.querySelector(".tone-triangle").addEventListener("mousedown", () => {
    sampler.triggerAttack("C8");
})
document.querySelector(".tone-clap").addEventListener("mousedown", () => {
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