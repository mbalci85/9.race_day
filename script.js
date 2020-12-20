//racenumber is more than 1000 for early registered adults, the rest receives less than 1000
let raceNumber;

//there are adult and young runners
// let runnerAge = 18;
let runnerAge = prompt('Enter your age:');

// this shows if the runner registers or not
// let earlyBird = false;
let earlyBird = prompt(
	'Enter registration status: for early reg enter true, for late reg enter false',
);

if (earlyBird == 'true' && runnerAge > 18) {
	raceNumber = Math.ceil(Math.random() * 1000 + 1000);
	alert(`You will run at 09:30 am and your race number is ${raceNumber}`);
} else if (earlyBird == 'false' && runnerAge > 18) {
	raceNumber = Math.ceil(Math.random() * 1000);
	alert(`You will run at 11:00 am and your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
	raceNumber = Math.ceil(Math.random() * 1000);
	alert(`You will run at 12:30 am and your race number is ${raceNumber}`);
} else if (runnerAge == 18) {
	alert(`See the registration desk....`);
}
