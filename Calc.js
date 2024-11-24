const display = document.getElementById('display');
const perc = document.getElementById('perc');
const brack = document.getElementById('brack');
const menu = document.getElementById('dropdownBtn');
const menuList = document.getElementById('_row');
const row0 = document.getElementById('row0');

menu.onclick = function () {
	menu.classList.toggle('change');
	if (menuList.classList.contains('show')) {
		menuList.classList.remove('show');
	} else {
		menuList.classList.add('show');
	}

	if (document.getElementById('_row1').classList.contains('show')) {
		document.getElementById('_row1').classList.remove('show');
		menuList.classList.remove('show');
	}
};

document.addEventListener('keydown', (event) => {
	if (event.key === 'm') {
		menu.classList.toggle('change');
		if (menuList.classList.contains('show')) {
			menuList.classList.remove('show');
		} else {
			menuList.classList.add('show');
		}
		if (document.getElementById('_row1').classList.contains('show')) {
			document.getElementById('_row1').classList.remove('show');
			menuList.classList.remove('show');
		}
	}
});

function appendToDisplay(value) {
	display.value += value;

	if (display.scrollWidth > display.clientWidth) {
		display.scrollLeft = display.scrollWidth;
	}
}

document.getElementById('pi').onclick = function () {
	if (display.value == '' || display.value == ' ') {
		display.value = Math.PI * 1;
		if (display.value.includes('.')) {
			display.value = Number(display.value).toFixed(5);
		}
	} else {
		display.value = Math.PI * display.value;
		if (display.value.includes('.')) {
			display.value = Number(display.value).toFixed(5);
		}
	}
};

document.getElementById('xpowy').onclick = function () {
	let n;
	while (isNaN(n)) {
		n = window.prompt('Type in the value of y:');
	}

	display.value = Math.pow(display.value, n);

	if (display.value.includes('.')) {
		display.value = display.value.toFixed(5);
	}
};

document.getElementById('inv').onclick = function () {
	document.getElementById('_row1').classList.toggle('show');
	menuList.classList.toggle('show');
};

document.getElementById('inv.inv').onclick = function () {
	document.getElementById('_row1').classList.toggle('show');
	menuList.classList.toggle('show');
};

document.getElementById('sin').onclick = function () {
	display.value = Math.sin(display.value);

	if (display.value.includes('.')) {
		display.value = Number(display.value).toFixed(5);
	}
};

document.getElementById('sin.inv').onclick = function () {
	display.value = Math.asin(display.value);

	if (display.value.includes('.')) {
		display.value = Number(display.value).toFixed(5);
	}
};

document.getElementById('cos').onclick = function () {
	display.value = Math.cos(display.value);

	if (display.value.includes('.')) {
		display.value = Number(display.value).toFixed(5);
	}
};

document.getElementById('cos.inv').onclick = function () {
	display.value = Math.acos(display.value);

	if (display.value.includes('.')) {
		display.value = Number(display.value).toFixed(5);
	}
};

document.getElementById('tan').onclick = function () {
	display.value = Math.tan(display.value);

	if (display.value.includes('.')) {
		display.value = Number(display.value).toFixed(5);
	}
};

document.getElementById('tan.inv').onclick = function () {
	display.value = Math.atan(display.value);

	if (display.value.includes('.')) {
		display.value = Number(display.value).toFixed(5);
	}
};

function fact() {
	let n = parseFloat(display.value);
	if (isNaN(n)) {
		display.value = 'Error';
	}

	function factorial(n) {
		if (n === 0 || n === 1) {
			return 1;
		} else {
			return n * factorial(n - 1);
		}
	}

	display.value = factorial(n);
}

document.getElementById('factorial').onclick = () => fact();

document.getElementById('e').onclick = function () {
	if (display.value == '' || display.value == ' ') {
		display.value = Math.E * 1;
		if (display.value.includes('.')) {
			display.value = Number(display.value).toFixed(5);
		}
	} else {
		display.value = Math.E * display.value;
		if (display.value.includes('.')) {
			display.value = Number(display.value).toFixed(5);
		}
	}
};

document.getElementById('ln').onclick = function () {
	display.value = Math.log(display.value);

	if (display.value.includes('.')) {
		display.value = Number(display.value).toFixed(5);
	}
};

document.getElementById('ln.inv').onclick = function () {
	let n = window.prompt('Type in the value of x:');
	while (isNaN(n)) {
		n = window.prompt('Type in the value of x:');
	}

	display.value = Math.pow(Math.E, n);

	if (display.value.includes('.')) {
		display.value = Number(display.value).toFixed(5);
	}
};

document.getElementById('log').onclick = function () {
	let n = window.prompt('What base?');
	while (isNaN(n)) {
		n = window.prompt('What base?');
	}
	display.value = Math.log(display.value) / Math.log(n);

	if (display.value.includes('.')) {
		display.value = Number(display.value).toFixed(5);
	}
};

document.getElementById('log.inv').onclick = function () {
	let n = window.prompt('To what power?');
	while (isNaN(n)) {
		n = window.prompt('To what power?');
	}

	display.value = Math.pow(10, n);

	if (display.value.includes('.')) {
		display.value = Number(display.value).toFixed(5);
	}
};

function clearDisplay() {
	display.value = '';
}

function calculate() {
	try {
		if (display.value.includes('(') || display.value.includes(')')) {
			let listCharacters = display.value.split('');

			if (
				(!listCharacters.includes('(') && !listCharacters.includes(')')) ||
				(listCharacters.includes('(') &&
					listCharacters[listCharacters.length - 1] == ')')
			) {
				let test = [...listCharacters];
				let test3 = test.map((char, index) => {
					if (
						char === '(' &&
						(!isNaN(test[index - 1]) || test[index - 1] == ')')
					) {
						return ' ' + char;
					} else {
						return char;
					}
				});
				let test2 = test3.map((element) => element.replace(' ', '*'));
				// console.log(test2.join(''));
				display.value = eval(test2.join(''));
				return;
			}
		}

		display.value = eval(display.value);

		if (isNaN(display.value)) {
			display.value = 'Error';
		} else if (display.value.includes('.')) {
			display.value = Number(display.value).toFixed(5);
		} else if (display.value.includes('Infinity')) {
			display.value = 'Error';
		}
	} catch (error) {
		console.log(error);
		display.value = 'Error';
	}
}

document.addEventListener('keydown', (event) => {
	event.preventDefault();
	if (event.key === 's') {
		sqrt();
	} else if (
		event.key === '+' ||
		event.key === '-' ||
		event.key === '*' ||
		event.key === '/' ||
		event.key === '.' ||
		event.key === '(' ||
		event.key === ')'
	) {
		appendToDisplay(event.key);
	} else if (event.key === 'Backspace') {
		deleteLast();
	} else if (event.key === 'c' || event.key === 'Escape') {
		clearDisplay();
	} else if (event.key === '=' || event.key === 'Enter') {
		calculate();
	} else if (event.key === 'e') {
		toExponential();
	} else if (event.key === '%') {
		percent();
	} else if (event.key == '!') {
		fact();
	} else if (event.key == '^') {
		let n;
		while (isNaN(n)) {
			n = window.prompt('Type in the value of y:');
		}

		display.value = Math.pow(display.value, n);

		if (display.value.includes('.')) {
			display.value = display.value.toFixed(5);
		}
	} else if (isNaN(event.key)) {
		return;
	} else {
		appendToDisplay(event.key);
	}
});

function toExponential() {
	if (display.value.includes('e')) {
		display.value = Number(display.value);
	} else {
		display.value = eval(display.value).toExponential(4);
	}
}

function sqrt() {
	let n = window.prompt('Type in the value of x:');
	while (isNaN(n)) {
		n = window.prompt('Type in the value of x:');
	}

	display.value = Math.pow(display.value, 1 / n);

	if (display.value.includes('.')) {
		display.value = Number(display.value).toFixed(5);
	}
}

function deleteLast() {
	display.value = display.value.slice(0, -1);
}

function percent() {
	display.value = eval(display.value) / 100;
}

document.addEventListener('keydown', (event) => {
	if (event.key === 'A' && event.shiftKey === true) {
		display.value = `(${display.value})`;
	}
});

brack.addEventListener('click', () => {
	let listCharacters = display.value.split('');

	if (
		(!listCharacters.includes('(') && !listCharacters.includes(')')) ||
		(listCharacters.includes('(') &&
			listCharacters[listCharacters.length - 1] == ')')
	) {
		listCharacters = [...listCharacters, '('];
		display.value = listCharacters.join('');
		return;
	}

	if (listCharacters[listCharacters.length - 1] !== ')') {
		if (!isNaN(listCharacters[listCharacters.length - 1])) {
			listCharacters = [...listCharacters, ')'];
			display.value = listCharacters.join('');
		} else {
			listCharacters = [...listCharacters, '('];
			display.value = listCharacters.join('');
		}

		return;
	}
	// for(let character of listCharacters) {
	//     display.value += character;}
	// console.log(listCharacters);
});

brack.addEventListener('dblclick', (event) => {
	display.value = `(${display.value})`;
});
