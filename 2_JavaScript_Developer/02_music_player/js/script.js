const audioPlayer = document.querySelector("#audioPlayer");
const musicName = document.querySelector("#musicName");
const musicAuthor = document.querySelector("#musicAuthor");
const musicImage = document.querySelector("#musicImage");
const playPauseBtn = document.querySelector("#playPauseBtn");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector("#progressBar");

import songs from "./songs.js";

const svgButtonPlay = `
    <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
      d="M21.941 14.244L14.119 10.236C12.686 9.50176 11 10.5696 11 12.2115V19.7885C11 21.4304 12.686 22.4982 14.119 21.764L21.941 17.756C23.353 17.0325 23.353 14.9675 21.941 14.244Z"
      fill="#E5E7EB"
    />
    </svg>
`;
const svgButtonPause = `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 256 256"><path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path></svg>
`;

let index = 0;

prevButton.onclick = () => prevNextMusic("prev");
nextButton.onclick = () => prevNextMusic();

playPauseBtn.onclick = () => playPause();
playPauseBtn.innerHTML = svgButtonPlay;

const playPause = () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML = svgButtonPause;
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = svgButtonPlay;
  }
};

const formatZero = (n) => (n < 10 ? "0" + n : n);

audioPlayer.ontimeupdate = () => updateTime();
audioPlayer.addEventListener("ended", () => {
  prevNextMusic();
});

const updateTime = () => {
  const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
  const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
  currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds);

  const durationFormatted = isNaN(audioPlayer.duration)
    ? 0
    : audioPlayer.duration;
  const durationMinutes = Math.floor(durationFormatted / 60);
  const durationSeconds = Math.floor(durationFormatted % 60);
  duration.textContent = durationMinutes + ":" + formatZero(durationSeconds);

  const progressWidth = durationFormatted
    ? (audioPlayer.currentTime / durationFormatted) * 100
    : 0;

  progressBar.value = progressWidth;
};

progressBar.onclick = (e) => {
  const newTime = (e.offsetX / progressBar.offsetWidth) * audioPlayer.duration;
  audioPlayer.currentTime = newTime;
};

const prevNextMusic = (type = "next") => {
  if ((type == "next" && index + 1 === songs.length) || type === "init") {
    index = 0;
  } else if (type == "prev" && index === 0) {
    index = songs.length;
  } else {
    index = type === "prev" && index ? index - 1 : index + 1;
  }

  const currentSong = songs[index];

  audioPlayer.src = currentSong.url;
  musicName.innerHTML = currentSong.title;
  musicAuthor.innerHTML = currentSong.author;
  musicImage.src = currentSong.image;
  musicImage.alt = currentSong.alt;

  if (type !== "init") playPause();

  updateTime();
};

prevNextMusic("init");
