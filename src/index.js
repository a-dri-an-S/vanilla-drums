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
            document.querySelector(".kick").removeAttribute("disabled");
            document.querySelector(".snare").removeAttribute("disabled");
            document.querySelector(".cymbal").removeAttribute("disabled");
            document.querySelector(".ohat").removeAttribute("disabled");
            document.querySelector(".chat").removeAttribute("disabled");
            document.querySelector(".shaker").removeAttribute("disabled");
            document.querySelector(".triangle").removeAttribute("disabled");
            document.querySelector(".clap").removeAttribute("disabled");
        }
    }
).toDestination();

// Tone Drum Triggers - Button Click
document.querySelector(".kick").addEventListener("click", () => {
    sampler.triggerAttack("C2");
});


document.querySelector(".snare").addEventListener("click", () => {
    sampler.triggerAttack("C3");
})

document.querySelector(".cymbal").addEventListener("click", () => {
    sampler.triggerAttack("C4");
})

document.querySelector(".ohat").addEventListener("click", () => {
    sampler.triggerAttack("C5");
})

document.querySelector(".chat").addEventListener("click", () => {
    sampler.triggerAttack("C6");
})

document.querySelector(".shaker").addEventListener("click", () => {
    sampler.triggerAttack("C7");
})

document.querySelector(".triangle").addEventListener("click", () => {
    sampler.triggerAttack("C8");
})

document.querySelector(".clap").addEventListener("click", () => {
    sampler.triggerAttack("C9");
})
