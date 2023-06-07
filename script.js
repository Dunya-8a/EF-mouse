let cursorVisible = true;

function hideCursor() {
	if (cursorVisible) {
		document.body.style.cursor = "none";
		cursorVisible = false;
	} else {
		document.body.style.cursor = `url('poop-icon.png'), auto`;
		cursorVisible = true;
	}
	setTimeout(hideCursor, Math.random() * (4000 - 2000) + 2000);
}

function jumpCursor() {
	const x = Math.floor(Math.random() * window.innerWidth);
	const y = Math.floor(Math.random() * window.innerHeight);
	const mouseMoveEvent = new MouseEvent("mousemove", {
		clientX: x,
		clientY: y,
	});
	document.dispatchEvent(mouseMoveEvent);
}

function jumpButton() {
	const button = document.getElementById("jumpingButton");
	const x = Math.floor(
		Math.random() * (window.innerWidth - button.offsetWidth)
	);
	const y = Math.floor(
		Math.random() * (window.innerHeight - button.offsetHeight)
	);
	button.style.left = x + "px";
	button.style.top = y + "px";
}

document
	.getElementById("jumpingButton")
	.addEventListener("mouseover", jumpButton);

hideCursor();
setInterval(jumpCursor, 2000); // Jump cursor every 2 seconds
