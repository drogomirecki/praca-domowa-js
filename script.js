//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------

//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych
console.log('');
console.log('Zadanie 1a');
const aBool = true;
const bNum = 100;
const cString = 'Hello';
console.log(`${aBool} - to typ danych ${typeof aBool}`);
console.log(`${bNum} - to typ danych ${typeof bNum}`);
console.log(`${cString} - to typ danych ${typeof cString}`);
console.log('Wartość logiczna ' + aBool + ' to typ danych: ' + typeof aBool);
console.log('Wartość liczbowa ' + bNum + ' to typ danych: ' + typeof bNum);
console.log('Wartość słowa ' + cString + ' to typ danych: ' + typeof cString);

//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
// 2 + "2"
// 2 + 2
// 2 * "2"
// 2 * 2
// 1 == true
// 0 == false
// 0 == null
// null == undefined
console.log('');
console.log('Zadanie 1b');

let sumNumString = 2 + '2';
console.log('2 + "2" = ' + sumNumString);
console.log(
	"Wynikiem tego dodawania jest typ 'string'. Wynika to z tego, że podczas dodawania typu number do typu string zachodzi niejawna konwersja typu number na typ string."
);
console.log('');
let sumNumNumber = 2 + 2;
console.log('2 + 2 = ' + sumNumNumber);
console.log(
	"Wynikiem tego dodawania jest typ 'number'. Wynika to z tego, że podczas dodawania typu number do typu number nie zachodzi konwersja typów."
);
console.log('');
let mulNumString = 2 * '2';
console.log('2 * "2" = ' + mulNumString);
console.log(
	"Wynikiem tego mnożenia jest typ 'number'. Wynika to z tego, że podczas mnożenia typu number z typem string zachodzi konwersja na typ number."
);
console.log('');
let mulNumNumber = 2 * 2;
console.log('2 * 2 = ' + mulNumNumber);
console.log(
	"Wynikiem tego mnożenia jest typ 'number'. Wynika to z tego, że podczas mnożenia typu number z typem number nie zachodzi konwersja typów."
);
console.log('');
let boolTrue = 1 == true;
console.log('1 == true = ' + boolTrue);
console.log(
	"Wynikiem tego działania logicznego jest typ 'boolean'. Wynika to z tego, że warunek logiczny 'true' jest konwertownay na 1 i w tym przypadku 1 == 1 i to jest true."
);
console.log('');
let boolFalse = 0 == false;
console.log('0 == false = ' + boolFalse);
console.log(
	"Wynikiem tego działania logicznego jest typ 'boolean'. W tym przypadku JS konwertuje 'false' na 0 i porównuje go z 0 i wynikiem porównania 0 == 0 będzie true"
);
console.log('');
let boolNull = 0 == null;
console.log('0 == null = ' + boolNull);
console.log(
	"Wynikiem tego działania logicznego jest typ 'boolean'. W tym przypadku JS nie konwertuje 'null' na 0 bo 'null' jest typem danych 'object' i porównuje go z 0 i wynikiem porównania 0 == null będzie false"
);
console.log('');
let boolNullUndefined = null == undefined;
console.log('null == undefined = ' + boolNullUndefined);
console.log(
	"Wynikiem tego działania logicznego jest typ 'boolean' wartość 'true'. W JS 'null' i 'undefined' są dwoma specjalnymi wartościami, uważanymi za równoważne w luźnym porównaniu =="
);

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="
console.log("Czym różnią się następujące zapisy: '=', '==', '===' ");
console.log('Pojedynczy = jest to operator przypisania wartości do zmiennej.');
console.log(
	'Podwójny == sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie bez względu na ich typ.'
);
console.log(
	'Potrójny === sprawdza czy wartość po lewej stronie jest równa wartości po prawej stronie biorąc pod uwagę ich typ'
);

//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli
console.log('');
console.log('Zadanie 1c');
console.log(
	'W języku JS typy referencyjne różnią się od typów prostych tym, że przechowują nie wartości bezpośrednio, ale referencje do obiektów, które zawierają te wartości. Typy referencyjne są dynamicznie alokowane na stercie, a ich wartości mogą być zmieniane przez referencje do obiektów.'
);
console.log(
	'Przykłady typów prostych to: liczby całkowite (number), tekst (string), wartości logiczne (boolean), null i undefined.'
);
console.log(
	'Przykłady typów referencyjnych to: tablice (array), obiekty (object), funkcje (function), a także wiele wbudowanych typów, takich jak np. Date, Math, RegExp i innych.'
);

//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:
// let val = 0 (przekonwertuj na typ Boolean)
// let num = "2137" (przekonwertuj na typ Number)
// let str = 007 (przekonwertuj na String)
// let und = undefined (przekonwertuj na Boolean)
console.log('');
console.log('Zadanie 1d');
let val = 0;
console.log(
	"Konwersja typu 'number' na 'boolean' za pomocą funkcji globalnej Boolean():"
);
console.log(Boolean(val));
let num = '2137';
console.log(
	"Konwersja typu 'string' na 'number' za pomocą funkcji globalnej Number():"
);
console.log(Number(num));
let str = 007;
console.log(
	"Konwersja typu 'number' na 'string' za pomocą funkcji globalnej String():"
);
console.log(String(str));
let und = undefined;
console.log(
	"Konwersja typu 'undefined' na 'boolean' za pomocą funkcji globalnej Boolean():"
);
console.log(Boolean(und));
console.log(
	"Funkcja Boolean() zwraca false dla wartości fałszywych, a true dla wartości prawdziwych. Wartość 'undefined' jest uważana za wartość fałszywą w języku JS."
);

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli
console.log('');
console.log('Zadanie 1e');
let myArray = new Array();
myArray.push('element1');
myArray.push('element2');
myArray.push('element3');
console.log(myArray);

//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli
console.log('');
console.log('Zadanie 1f');
let myObject = new Object();
myObject.name = 'Piotr';
myObject.age = 43;
myObject.email = 'myemail@gmail.com';
console.log(myObject);

//g)* opisz krótko czym dokładnie jest typ NaN
console.log('');
console.log('Zadanie 1g');
console.log(
	'NaN(Not a Number) - jest to wartość typu number, która nie reprezentuje żadnej liczby. NaN zawsze zwraca false, nawet jeżeli porównamy ją do siebie. Wartość NaN jest najczęściej wyświetlana jako wynik niepoprawnego działania matematycznego.'
);

//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko
console.log('');
console.log('Zadanie 1h');
console.log(
	'Typ danych symbol to prymitywny typ danych, który zawsze zawiera unikalną wartość. Nie wiemy ile ona wynosi, wiemy jedynie to, że jest unikalna, niepowtarzalna. Aby wygenerować taką wartość, posłużymy się funkcją Symbol(). Podczas generowania symbolu możemy podać dodatkową opcjonalną wartość, która będzie opisem danego symbolu. Opis ten nie zmienia wartości, a najczęściej używany jest do celów debugowania. Symbole przydają się w sytuacjach gdzie chcemy dodawać do obiektów dodatkowe funkcjonalności, a równocześnie nie chcemy się martwić o to, że przypadkowo w takim obiekcie coś nadpiszemy.'
);
//użycie typu symbol
const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1 === value2);
// tworzenie typu symbol
const mySymbolX = Symbol();
console.log(`${typeof mySymbolX}`);
console.log(mySymbolX); // Symbol
const mySymbolY = Symbol('id');
console.log(mySymbolY); // Symbol z wartością

//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------

//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb
console.log('');
console.log('Zadanie 2a');
function sumOfThree(a, b, c) {
	return a + b + c;
}
console.log(sumOfThree);
console.log(sumOfThree(2, 3, 4));
console.log(`Wynik dodawania 2+3+4 wynosi: ${sumOfThree(2, 3, 4)}`);
//b) napisz funkcję która przyjmie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik
console.log('');
console.log('Zadanie 2b');
function triangleArea(height, base) {
	return (height * base) / 2;
}
console.log(triangleArea);
console.log(triangleArea(6, 6));
console.log(
	`Pole trójkąta o wys 6 i podstawie 6 wynosi: ${triangleArea(6, 6)}`
);
//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację
console.log('');
console.log('Zadanie 2c');
const sinceWhen18 = (age) =>
	age <= 18
		? `Nie minęło jeszcze 18 lat od Twoich urodzin`
		: `To już ${age - 18} lat od Twojej osiemnastki!`;
console.log(sinceWhen18(10));
console.log(sinceWhen18(43));

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości
console.log('');
console.log('Zadanie 2d');
function minThreeElementsArray(arrayOfThree) {
	if (arrayOfThree.length < 3) {
		return `Tablica musi mieć co najmniej 3 elementy`;
	} else {
		return `Przekazana tablica ma ${arrayOfThree.length} elementy, a elementem numer 3 jest ${arrayOfThree[2]}`;
	}
}
console.log(minThreeElementsArray([1, 2, '0-0', 4])); // Przekazana tablica ma 4 elementy, a elementem numer 3 jest 0-0
console.log(minThreeElementsArray([1, 2])); //Tablica musi mieć co najmniej 3 elementy

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.
console.log('');
console.log('Zadanie 2e');
let testPerson = {
	name: 'Jan',
	surname: 'Kowalski',
	age: 20,
	height: 180,
};
let testPersonTwo = {
	name: 'Magdalena',
	surname: 'Drogomirecka',
	age: 39,
	height: 175,
};
function personInfo(testPerson) {
	const { name, surname, age, height } = testPerson;
	console.log(
		`Pan/i ${name} ${surname} ma ${age} lat oraz ${height} cm wzrostu`
	);
}
personInfo(testPerson);
personInfo(testPersonTwo);

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.
console.log('');
console.log('Zadanie 2f');
function changeAge(testPerson, differendAge) {
	testPerson.age = differendAge;
	return testPerson;
}
changeAge(testPerson, 100);
console.log(testPerson);
// console.log(changeAge(testPerson, 55));

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"
console.log('');
console.log('Zadanie 2g');

function fizzBuzzCheck(number) {
	if (typeof number !== 'number') {
		return 'Funkcja przyjmuje tylko typ number';
	} else if (number % 3 === 0 && number % 5 === 0) {
		return 'FizzBuzz';
	} else if (number % 3 === 0) {
		return 'Fizz';
	} else if (number % 5 === 0) {
		return 'Buzz';
	} else {
		return 'ta liczba nie jest podzielna ani przez 3 ani przez 5';
	}
}

console.log(fizzBuzzCheck('abc'));
console.log(fizzBuzzCheck(15));
console.log(fizzBuzzCheck(9));
console.log(fizzBuzzCheck(25));
console.log(fizzBuzzCheck(7));

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego
console.log('');
console.log('Zadanie 2h');

function checkEven(number) {
	const result = number % 2 === 0 ? 'parzysta' : 'nieparzysta';
	console.log(`Cyfra ${number} jest ${result}.`);
	return 'Cyfra ' + number + ' jest' + ' ' + result;
}
checkEven(2);
checkEven(3);
checkEven(0);

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10
console.log('');
console.log('Zadanie 2i');

function randomFrom1To10() {
	return Math.floor(Math.random() * 10) + 1;
}
console.log('Wylosowana liczba z zakresu 1-10 to:');
console.log(randomFrom1To10());
//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu
console.log('');
console.log('Zadanie 2j');

function generateRandomNumberInRange(min, max) {
	let randomize = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(`Wylosowana liczba z zakresu od ${min} do ${max} to:`);
	console.log(randomize);
}
generateRandomNumberInRange(1, 100);

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.
console.log('');
console.log('Zadanie 2k');
// 1. Metoda Math.random() - generowanie losowych wartości z tablicy:
function randomize(array) {
	let randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}
console.log(
	'1. Metoda Math.random() - generowanie losowych wartości z tablicy'
);
let fruits = ['jabłko', 'banan', 'gruszka', 'śliwka'];
console.log(fruits);
console.log(randomize(fruits));
console.log('');
// 2. Metoda Math.pow() - podnoszenie do potęgi:
function raiseToPower(base, exponent) {
	return Math.pow(base, exponent);
}
console.log('2. Math.pow() - podnoszenie do potęgi 2 do 3 i 4 do 2');
console.log(raiseToPower(2, 3));
console.log(raiseToPower(4, 2));
console.log('');
// 3. Metoda Math.max() - znajdowanie największej wartości w tablicy
let nums = [3, 7, 2, 8, 4, 100];
function findLargestNumber(numbers) {
	return `Największą liczbą z tablicy jest: ${Math.max(...numbers)}`;
}
console.log('Metoda Math.max() - znajdowanie największej wartości w tablicy');
console.log(nums);
console.log(findLargestNumber(nums));
console.log('');

//--------------------------
// 3. FUNKCJE & PĘTLE
//--------------------------
console.log('');
console.log('Funkcje i pętle');
//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9
console.log('');
console.log('Zadanie 3a');
for (let i = 1; i <= 9; i++) {
	console.log(i);
}
//b) napisz pętlę która odliczy od 9 do 1
console.log('');
console.log('Zadanie 3b');
const from9to1 = () => {
	for (let i = 9; i >= 1; i--) {
		console.log(i);
	}
};
from9to1();
//c) napisz pętlę która odliczy od 5 do 15
console.log('');
console.log('Zadanie 3c');
const from5to15 = () => {
	for (let i = 5; i <= 15; i++) {
		console.log(i);
	}
};
from5to15();

//d) napisz pętlę która odliczy od 0 do -10
console.log('');
console.log('Zadanie 3d');
const from0toMinus10 = () => {
	for (let i = 0; i >= -10; i--) {
		console.log(i);
	}
};
from0toMinus10();
//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2
console.log('');
console.log('Zadanie 3e');
const from1to20 = () => {
	for (let i = 1; i <= 20; i += 2) {
		console.log(i);
	}
};
from1to20();
//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
console.log('');
console.log('Zadanie 3f');
const from10toMinus10 = () => {
	for (let i = 10; i >= -10; i -= 4) {
		console.log(i);
	}
};
from10toMinus10();
//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
console.log('');
console.log('Zadanie 3g');
const from1to100 = () => {
	for (let i = 1; i <= 100; i *= 2) {
		console.log(i);
	}
};
from1to100();

//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
console.log('');
console.log('Zadanie 3h');
const from1to10odd = () => {
	for (let i = 1; i <= 10; i++) {
		if (i % 2 !== 0) {
			console.log(i);
		}
	}
};
from1to10odd();

//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego
console.log('');
console.log('Zadanie 3i');
const from1to10oddOrEven = () => {
	for (let i = 1; i <= 10; i++) {
		const isEven = i % 2 === 0;
		const message = isEven ? 'parzysta' : 'nieparzysta';
		console.log(`${i} jest ${message}`);
	}
};
from1to10oddOrEven();

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości
console.log('');
console.log('Zadanie 3j');
const from1toNumber = (num) => {
	for (i = 1; i <= num; i++) {
		console.log(i);
	}
};
from1toNumber(20);

//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)
console.log('');
console.log('Zadanie 3k');
const from1to50iteration = (num) => {
	for (i = 0; i <= 50; i += num) {
		console.log(i);
	}
};
from1to50iteration(3);

//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
console.log('');
console.log('Zadanie 3l');
const arrNames = [
	'Ksawery',
	'Zenobiusz',
	'Klementyna',
	'Apolonia',
	'Jeremiasz',
	'Bernadetta',
];
const greetPeople = (arrNames) => {
	arrNames.forEach((name) => {
		console.log(`Cześć ${name}!`);
	});
};
greetPeople(arrNames);

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
console.log('');
console.log('Zadanie 3ł');
const arrObjects = [
	{
		brand: 'Mustang',
		color: 'niebieski',
	},
	{
		brand: 'Tesla',
		color: 'czarna',
	},
	{
		brand: 'Polonez',
		color: 'żółty',
	},
	{
		brand: 'Toyota',
		color: 'fioletowa',
	},
];
const carColorAndBrand = (arrObjects) => {
	arrObjects.forEach((car) => {
		console.log(`Przed Tobą stoi ${car.color} ${car.brand}`);
	});
};
carColorAndBrand(arrObjects);

//m) napisz funkcję która przyjmie tablicę arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy
console.log('');
console.log('Zadanie 3m');
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = (arrNumbers) => {
	for (let i = 0; i < arrNumbers.length; i++) {
		if (arrNumbers[i] % 2 === 0) {
			console.log(arrNumbers[i]);
		}
	}
};
evenNumbersArray(arrNumbers);

//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami
console.log('');
console.log('Zadanie 3n');
const arrTypes = [
	2,
	4,
	5,
	undefined,
	null,
	'val',
	NaN,
	7,
	10,
	333,
	'874',
	22,
	21,
	400,
	'400',
	'undefined',
];

function sortArrayTypes(arrTypes) {
	const arrOther = [];
	const arrNumbers = [];
	const arrEven = [];

	for (let i = 0; i < arrTypes.length; i++) {
		if (typeof arrTypes[i] !== 'number') {
			arrOther.push(arrTypes[i]);
		} else {
			arrNumbers.push(arrTypes[i]);
			if (arrTypes[i] % 2 === 0) {
				arrEven.push(arrTypes[i]);
			}
		}
	}

	return {
		other: arrOther,
		numbers: arrNumbers,
		even: arrEven,
	};
};
const sortedArray = sortArrayTypes(arrTypes);
console.log(sortedArray);
//--------------------------
// 4. METODY
//--------------------------
console.log('');
console.log('Metody');

//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names
console.log('');
console.log('Zadanie 4a');
const names = ['Seba', 'Kari', 'Mati', 'Andżi'];
const mapNames = names.map(name => (`Witaj, ${name}!`));
console.log(mapNames);

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami
console.log('');
console.log('Zadanie 4b');
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArr = array10.filter(number => number % 2 === 0);
console.log(evenNumbersArr);

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami
console.log('');
console.log('Zadanie 4c');
const people = [
	{
		name: 'Tomasz',
		lastname: 'Kowalski',
		gender: 'male',
	},
	{
		name: 'Karol',
		lastname: 'Nowak',
		gender: 'male',
	},
	{
		name: 'Joanna',
		lastname: 'Kowalska',
		gender: 'female',
	},
	{
		name: 'Anna',
		lastname: 'Nowak',
		gender: 'female',
	},
];

const filterFemale = people.filter(object => object.gender === 'female');
console.log(filterFemale);

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.
console.log('');
console.log('Zadanie 4d');
const shopping =
	'kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny';

const shoppingList = shopping.toLowerCase().split(' ').sort();

console.log(shoppingList);

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."
console.log('');
console.log('Zadanie 4e');

const alphabet = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

const alphabetString = alphabet.join('');
const reversedAlphabetString = alphabetString.split('').reverse().join('');

console.log(reversedAlphabetString);
