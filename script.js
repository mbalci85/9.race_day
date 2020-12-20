//racenumber is more than 1000 for early registered adults, the rest receives less than 1000
let raceNumber;

// this shows if the runner registers or not
let earlyBird = false;

//there are adult and young runners
let runnerAge = 18;

if (earlyBird && runnerAge > 18) {
	raceNumber = Math.ceil(Math.random() * 1000 + 1000);
	console.log(
		`You will run at 09:30 am and your race number is ${raceNumber}`,
	);
} else if (!earlyBird && runnerAge > 18) {
	raceNumber = Math.ceil(Math.random() * 1000);
	console.log(
		`You will run at 11:00 am and your race number is ${raceNumber}`,
	);
} else if (runnerAge < 18) {
	raceNumber = Math.ceil(Math.random() * 1000);
	console.log(
		`You will run at 12:30 am and your race number is ${raceNumber}`,
	);
} else if (runnerAge == 18) {
	console.log(`See the registration desk....`);
}
