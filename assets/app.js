function movement() {
	const secondHand = document.querySelector('.second-moving');
	const minuteHand = document.querySelector('.minute-moving');
	const hourHand = document.querySelector('.hour-moving');

	const now = new Date();
	const second = now.getSeconds();
	const secondDegrees = second / 60 * 360 + 90;
	const minute = now.getMinutes();
	const minuteDegrees = minute / 60 * 360 + 90;
	const hour = now.getHours();
	const hourDegrees = hour % 12 / 12 * 360 + 90;

	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(movement, 1000);
