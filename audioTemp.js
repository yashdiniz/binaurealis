/*
    This file willl contain the code used to build a basic skeleton
    of the frequency beat generator.
    author: @yashdiniz;
    reference: MDN
*/

// choose AudioContext depending on its existence...
// legacy browsers have it in webkit
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const destination = audioContext.destination;

// each component will now have two oscillators,
// one playing the base frequency,
// and the other playing the offset frequency
const baseNode = audioContext.createOscillator();
baseNode.frequency.value = 120; // use a number input, in hertz
const beatNode = audioContext.createOscillator();
beatNode.frequency.value = 120 - 30;  // use a range slider (+-60Hz)

const lPanner = new StereoPannerNode(audioContext, {pan: -1});
baseNode.connect(lPanner);
const rPanner = new StereoPannerNode(audioContext, {pan: +1});
beatNode.connect(rPanner);

const gainNode = audioContext.createGain()
gainNode.gain.value = 0.6;  // use a volume slider for the entire component
lPanner.connect(gainNode);
rPanner.connect(gainNode);
gainNode.connect(destination);
