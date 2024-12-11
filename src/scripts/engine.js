const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio('./src/tunes/a.wav');

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`.key[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)
}

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (event) => {
    if(mapedKeys.includes(event.key)){
        playTune(event.key)
    }
});

volumeSlider.addEventListener("input", (handleVolume) => {
    audio.volume = handleVolume.target.value;
});

keysCheck.addEventListener("input", () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
})