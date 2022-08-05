function timeFormat(seconds)
{
	let hours = Math.floor(seconds / (60 * 60));
	seconds -= hours * (60 * 60);
	let minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	return hours + ":" + minutes + ":" + seconds;
}

console.log(timeFormat(5024));