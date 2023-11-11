const cont = document.getElementById("container");

// 1
/*function isPerfectNumber(n) {
  let d = 2;
  while (n % d != 0) d += 1;
  return n === d;
}
console.log(isPerfectNumber(4));

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
*/

// 2
/*function func(num, min, max) {
  if (num < min) return Math.trunc(min ** 2);
  else if (num > max) return Math.trunc(max ** 2);
  else if (num < max - (max - min) / 2) return Math.trunc(num ** 2);
  else return Math.trunc(num);
}
console.log(func(3, 1, 10)); // 9
console.log(func(15, 1, 10)); // 100
console.log(func(5, 1, 10)); // 25
console.log(func(8.5, 1, 10)); // 8*/

// 3
/*function isPerfectNumber(value) {
  if (value <= 0) return;
  let sum = 0;
  for (let i = 1; i < value; i++) if (value % i === 0 && i != value) sum += i;
  return sum === value;
}

const isPerfectNumber = num => {
    const a = [];
    for(let i = 1; i > num; i++) {
        if(num % i === 0) {
            a.push(i);
        }
    }
    return a.reduce((a, b) => a + b, 0) === num;	
}

console.log(isPerfectNumber(6)); // true
console.log(isPerfectNumber(28)); // true
console.log(isPerfectNumber(12)); // false
console.log(isPerfectNumber(16)); // false
*/

// 4
/*function getNumberDigit(number, digitPosition) {     !!!!!!!!!!
  const numberStrLength = number.toString().lenght;
  if (digitPosition > numberStrLength - 1 || digitPosition < 0) return;
  else return number.toString()[digitPosition];
}

function getNumberDigit(number, digitPosition) {
  if (digitPosition < 0) {
    return undefined;
  }

  let remainder = Math.abs(number);
  let count = 0;

  while (remainder >= 1) {
    if (count === digitPosition) {
      return remainder % 10;
    }

    remainder = Math.floor(remainder / 10);
    count++;
  }

  return undefined;
}

console.log(getNumberDigit(123, 0)); // 1
console.log(getNumberDigit(123, 1)); // 2
console.log(getNumberDigit(123, 2)); // 3
console.log(getNumberDigit(1, 2)); // undefined*/

// 2.1
/*const car = {
  name: "Hendai Solaris",
  type: "sedan",
  maxSpeed: "320",
  color: "red",
};
const showObject = (object) => {
  return `<article>
    <div>
      <h2>${object.name}</h2>
      <span>${object.type}</span>
    </div>
    <div>
      <span>Maximum speed:</span>
      <span>${object.maxSpeed}</span>
    </div>
    <div>
      <span>Color:</span>
      <span>${object.color}</span>  
      </div>
  </article>`;
};

cont.insertAdjacentHTML("beforeend", showObject(car));*/

// 2.2
/*const sentence = "Hello, how are you?";
const countWords = (str) => {
  const newStr = str.split(" ");
  let k = 0;
  for (let i = 0; i < newStr.length; i++) k++;
  return k;
};

const countWords = str => str.split(' ').length

console.log(countWords(sentence)); // 4*/

// 2.3
/*const fullName = "John Doe";

const getInitials = (str) => {
  const newStr = str.split("");
  let init = "";
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === " ") continue;
    else if (newStr[i] === newStr[i].toUpperCase()) init += `${newStr[i]}. `;
  }
  return init.trim();
};

const getInitials = name => name.split(' ').map((el) => `${el[0].toUpperCase()}.`).join('');

const initials = getInitials(fullName);
console.log(initials); // "J. D."*/

// 2.4
/*
const generateGoogleString = (numb) => {
  if (numb <= 0) return "Google";
  let strO = "";
  for (let i = 0; i < numb; i++) strO += "o";
  return `G${strO}gle`;
};

const generateGoogleString = (times = 0) => `G${'o'.repeat(Math.max(2, times))}gle`

console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
// Google*/

// 2.5
/*const str = "Hello, Привет!";
const countVowels = (str) => {
  const words = "aeiouyаеёиоуыэюя";
  let count = 0;
  for (let i = 0; i < str.length; i++)
    if (words.includes(str[i].toLowerCase())) count++;
  return count;
};
console.log(countVowels(str)); // 4*/

// 3.1
/*const sumNumbers = (...cout) => cout.reduce((acc, i) => (acc += i));

const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1); // 15

const result2 = sumNumbers(10, 20, 30);
console.log(result2); // 60*/

// 3.2
/*const findMaxValue = (arr) => (arr.length ? Math.max(...arr) : undefined);

const numbers1 = [1, 2, 3, 4, 5];
const max1 = findMaxValue(numbers1);
console.log(max1); // 5

const numbers2 = [10, 20, 5, 30, 15];
const max2 = findMaxValue(numbers2);
console.log(max2); // 30

const emptyArray = [];
const maxEmpty = findMaxValue(emptyArray);
console.log(maxEmpty); // undefined*/

// 3.3
/*const calculateAverage = (arr) => {
  if (!arr.length) return 0;
  const newArr = arr.reduce((acc, i) => (acc += i));
  return newArr / arr.length;
};

const calculateAverage = (nums) =>
  nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;

const numbers1 = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers1)); // 3

const numbers2 = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers2)); // 30

const emptyArray = [];
console.log(calculateAverage(emptyArray)); // 0*/

// 3.4
/*const isPalindrome = (str) =>
  str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
  
console.log(isPalindrome("level")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false*/

// 3.5
/*const removeDuplicates = (arr) => [...new Set(arr)];
const numbers1 = [1, 2, 3, 3, 4, 5, 5];
console.log(removeDuplicates(numbers1)); // [1, 2, 3, 4, 5]

const numbers2 = [10, 20, 30, 30, 40, 40, 50];
console.log(removeDuplicates(numbers2)); // [10, 20, 30, 40, 50]

const emptyArray = [];
console.log(removeDuplicates(emptyArray)); // []*/

// 3.6
/*function createCounter(value) {
  const inc = () => value++;
  const dec = () => value--;
  const get = () => value;
  return { inc, dec, get };
}
const { inc, dec, get } = createCounter(5);
console.log(get());
inc();
inc();
inc();
dec();
console.log(get());*/

// 4.1
/*const birthDate = new Date("1990-05-20");
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
const age = calculateAge(birthDate);

console.log(age);*/

// 4.2
/*const date1 = new Date("2027-06-01");
const date2 = new Date("2027-06-10");
function getDateDifference(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffInMilliseconds = Math.abs(date2 - date1);
  const diffInDays = Math.round(diffInMilliseconds / oneDay);

  return diffInDays;
}
const difference = getDateDifference(date1, date2);
console.log(difference); // 9*/

// 4.3
/*const targetDate = new Date("2027-12-31T23:59:59");
function getTimeUntilDate(date) {
  const now = new Date();
  const timeDifference = date.getTime() - now.getTime();

  if (timeDifference < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return {
    days: days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60
  };
}
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);*/

// 4.4
/*const date1 = new Date("2027-07-10"); // Суббота
const date2 = new Date("2027-07-12"); // Понедельник

const isWeekends = date => 
	[6, 7].indexOf(date.getDay()) !== -1

console.log(isWeekend(date1)); // true
console.log(isWeekend(date2)); // false*/

// 4.5
/*const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true*/

// 4.6
/*function getLastDayOfMonth(year, month) {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
}

// июнь 2027
console.log(getLastDayOfMonth(2027, 5)); // 30

// февраль 2027
console.log(getLastDayOfMonth(2027, 1)); // 28

// январь 2027
console.log(getLastDayOfMonth(2027, 0)); // 31*/
