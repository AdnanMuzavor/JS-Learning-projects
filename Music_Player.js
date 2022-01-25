const music = document.querySelector("audio"); //audio will be get through audio tag
const play = document.getElementById("play"); //instance of play button

const img = document.querySelector("img"); // instance of img through img tag
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
  {
    name: "music1",
    title: "Jab Tak..", //0
    artist: "Armaan Malik",
  },
  {
    name: "music2",
    title: "Main Rahoon", //1
    artist: "Armaan Malik",
  },
  {
    name: "music3",
    title: "O Sathi", //2
    artist: "Atif Aslam",
  },
];

let isplaying = false;

//play
const playmusic = () => {
  console.log("play clicked");
  music.play();
  isplaying = true;
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
  //when play button is clicked , on music which is instance of our audio , on this music a method called .play() will run
  //.play can be used only for audio instances
  img.classList.add("anime");
  //anime class will also be added and all props given to an9me class specifically animations will get applied.
};

//pause
const pausemusic = () => {
  console.log("pause clicked");
  music.pause();
  isplaying = false;
  play.classList.replace("fa-pause", "fa-play");
  //when play button is clicked , on music which is instance of our audio , on this music a method called .play() will run
  //.play can be used only for audio instances
  img.classList.remove("anime");
  //anime class will also be added and all props given to an9me class specifically animations will get applied.
};

play.addEventListener("click", () => {
  // if (isplaying == false) {
  //   playfn();
  // } else {
  //   pausemusic();
  // }
  isplaying ? pausemusic() : playmusic();
});

//Changing music data
const loadSong = (songs) => {
  title.textContent = songs.title; //instance got through id
  artist.textContent = songs.artist; //instance got through id
  music.src =songs.name + ".mp3"; //instance got through tag
  img.src = songs.name + ".jpg";
};

//loadSong(songs[2]); //here what we have passed is songs object
songIndex = 0;
const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playmusic();
};
const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playmusic();
};

let progress = document.getElementById("progress");
let current_time = document.getElementById("current_time");
const durationplayer = document.getElementById("duration");
//progress js work
music.addEventListener("timeupdate", (event) => {
  //console.log(event);
  //in event in src section you see that there is currentTime named prperty and duration named property
  const { currentTime, duration } = event.srcElement; //to fetch values from srcElement part displayed in console which has currentTime and duration variable in it
  console.log(currentTime);
  console.log(duration);
  let progess = document.querySelector(".progress");
  let progress_time = (currentTime / duration) * 100;

  progress.style.width = `${progress_time}%`;

  //music duration update
  let Dminutes = Math.floor(duration / 60);

  let Dseconds = Math.floor(duration % 60);

  if (duration) {
    durationplayer.textContent = `${Dminutes}:${Dseconds}`;
  }

  //music currenttime update
  let Cminutes = Math.floor(currentTime / 60);

  let Cseconds = Math.floor(currentTime % 60);
  if (Cseconds < 10) {
    Cseconds = `0${Cseconds}`;
  }
  if (currentTime) {
    current_time.textContent = `${Cminutes}:${Cseconds}`;
  }
});

//To take the song and progress bar at place we want
//We simply need to update the sound value since our width value of progress bar is directly dependent on it

const progress_div = document.getElementById("progress_div");
progress_div.addEventListener("click", (event) => {
  console.log(event);
  const { duration } = music;
  let move_progress =
    (event.offsetX / event.srcElement.clientWidth) * duration;
  console.log("duration: " + duration);

  console.log("progress: " + move_progress);

  music.currentTime = move_progress;
});

//if one swong over next song starts
music.addEventListener("ended", nextSong);
next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);