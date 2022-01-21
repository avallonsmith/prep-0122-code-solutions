function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('Sum:', sum);

function convertHoursToMinutes(hours) {
  return 60 / 1 * (hours);
}

var minutes = convertHoursToMinutes(2);
console.log('Minutes:', minutes);

function getGreeting(name) {
  return ('Hello' + ' ' + name);
}

var greeting = getGreeting('World!');
console.log('Greeting:', greeting);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var sumAddAndMultiply = addAndMultiplyBy5(10, 5);
console.log('Sum of "AddAndMultiply":', sumAddAndMultiply);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var sumMultiplyAndDivide = multiplyAndDivideBy5(35, 10);
console.log('Sum Of "MultiplyAndDivide":', sumMultiplyAndDivide);

function subtractTwoNumbers(x, y) {
  return (x - y);
}

var sumsubtractTwoNumbers = subtractTwoNumbers(22, 7);
console.log('Sum Of "SubtractTwoNumbers":', sumsubtractTwoNumbers);

function getCircleCircumference(radius) {
  return (2 * 3.14 * radius);
}

var sumgetCircleCircumference = getCircleCircumference(5);
console.log('Sum Of "CircleCircumference":', sumgetCircleCircumference);

function getFullName(firstName, lastName) {
  return (firstName + ' ' + lastName);
}

var sumgetFullName = getFullName('Avallon', 'Smith');
console.log('Sum Of "FullName":', sumgetFullName);

function cube(number) {
  return (number ** 3);
}

var sumcube = cube(5);
console.log('Sum Of "Cube":', sumcube);
