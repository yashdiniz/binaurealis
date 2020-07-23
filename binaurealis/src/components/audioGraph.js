/*
    This file willl contain the code used to build a basic skeleton
    of the frequency beat generator.
    author: @yashdiniz;
    reference: MDN
*/

// choose AudioContext depending on its existence...
// legacy browsers have it in webkit
// these have to be singleton!
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const destination = audioContext.destination;

class AudioGraph {
    constructor() {
        // each component will now have two oscillators,
        // one playing the base frequency,
        // and the other playing the offset frequency
        const baseNode = audioContext.createOscillator();
        const beatNode = audioContext.createOscillator();
        this.baseNode = baseNode;
        this.beatNode = beatNode;

        const lPanner = new StereoPannerNode(audioContext, {pan: -1});
        baseNode.connect(lPanner);
        const rPanner = new StereoPannerNode(audioContext, {pan: +1});
        beatNode.connect(rPanner);
        const gainNode = audioContext.createGain();  
        this.gainNode = gainNode;  

        lPanner.connect(gainNode);
        rPanner.connect(gainNode);
        gainNode.connect(destination);
        
        audioContext.suspend(); // prevent the context from starting
        baseNode.start();       // until a user action triggers it.
        beatNode.start();
    }
    updateOscillators(frequency, offset) {
        try {        
            frequency = parseInt(frequency); offset = parseInt(offset);
            if(frequency < 20) frequency = 20;
            else if(frequency > 20000) frequency = 20000;
            if(Math.abs(offset) > 60) offset = Math.sign(offset) * 60;
            this.baseNode.frequency.value = frequency; // use a number input, in hertz
            this.beatNode.frequency.value = frequency + offset;  // use a range slider (+-60Hz)
        } catch(e) {
            audioContext.suspend();
            throw e;
        }
        return {frequency, offset};
    }    
    changeGain(gain) {
        gain = parseFloat(gain);
        if(gain < 0 || gain > 1) gain = 0.5;
        return this.gainNode.gain.value = gain;  // use a volume slider for the entire component
    }
}

export {
   audioContext, AudioGraph
};