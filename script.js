// global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const holdTimeIncrement = 200; //how much clue hold time is increased/decreased each time
const pauseTimeIncrement = 50; //how much clue pause time is increased/decreased each time

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var pattern = Array.from(Array(8)).map(() => Math.floor(Math.random() * 5 + 1));
var progress = 0;
var guessCounter = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var speedCounter = 0; //tracks current speed

// var timerIncrement = 5000; //timer for each clue
// var timer;

function increaseSpeed() {
  clueHoldTime -= holdTimeIncrement;
  cluePauseTime -= pauseTimeIncrement;
  if (clueHoldTime <= 0 || cluePauseTime <= 0) {
    clueHoldTime += holdTimeIncrement;
    cluePauseTime += pauseTimeIncrement;
    alert("Cannot increase speed. Maximum speed reached.");
  } else {
    showSpeed(speedCounter, speedCounter + 1);
    speedCounter++;
  }
}

function decreaseSpeed() {
  clueHoldTime += holdTimeIncrement;
  cluePauseTime += pauseTimeIncrement;
  if (clueHoldTime >= 2000 || cluePauseTime >= 533) {
    clueHoldTime -= holdTimeIncrement;
    cluePauseTime -= pauseTimeIncrement;
    alert("Cannot decrease speed. Minimum speed reached.");
  } else {
    showSpeed(speedCounter, speedCounter - 1);
    speedCounter--;
  }
}

function resetSpeed() {
  clueHoldTime = 1000;
  cluePauseTime = 333;
  showSpeed(speedCounter, 0);
  speedCounter = 0;
}

function showSpeed(curr, updated) {
  document.getElementById("speed" + curr).classList.add("hidden");
  document.getElementById("speed" + updated).classList.remove("hidden");
}

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

//resets the btn to its original color
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  // var maxTime = (progress+1) * timerIncrement; //max time for each clue sequence
  // document.getElementById("timer").innerHTML = (maxTime % (1000 * 60)) / 1000 + " seconds";
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  // timer = setInterval(time, 1000);
  // function time() {
  //   if (maxTime === 0) {
  //     clearInterval(timer);
  //     loseGame();
  //   } else {
  //     maxTime -= 1000;
  //     document.getElementById("timer").innerHTML = (maxTime % (1000 * 60)) / 1000 + " seconds";
  //   }
  // }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] === btn) {
    if (guessCounter === progress) {
      if (progress === pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    loseGame();
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Yay! You're a winner!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 540.2
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
