let events = ['click', 'dblclick', 'mousedown', 'mouseup', 'contextmenu'];
let soundInterval3;
events.forEach((event) => {
    window.addEventListener(event, SILLYSOUNDSACTIVATOR);
});

function SILLYSOUNDSACTIVATOR() {
	let soundInterval;
	let soundInterval2;
	let fella = document.getElementById('fella')
    document.getElementById('squirrel').play();
	document.getElementById('tunes').play();
	fella.classList.add("RABBEAR");
	fella.addEventListener('animationstart', () => {
    // Play the sound at the beginning of the animation
    document.getElementById('boing').play();
    // Set an interval to play the sound every 1500 milliseconds
    soundInterval = setInterval(() => {
        document.getElementById('boing').play();
    }, 750);
	// Second Interval
	    soundInterval2 = setInterval(() => {
        document.getElementById('boing2').play();
    }, 750);
});
let laughing = document.getElementById("squirrel");
laughing.volume = 0.2;
let boinging = document.getElementById("boing");
boinging.volume = 0.8;
let boingingmore = document.getElementById("boing2");
boingingmore.volume = 0.8;
let goodassfuckingmusic = document.getElementById("boing2");
goodassfuckingmusic.volume = 1.1;
    // Remove event listeners after first interaction
    events.forEach((event) => {
        window.removeEventListener(event, SILLYSOUNDSACTIVATOR);
    });
}

