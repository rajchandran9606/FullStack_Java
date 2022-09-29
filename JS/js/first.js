//alert("hi forks!!!");
//document.write("hi Dude");
//console.log("po da  dai!!!!"); //degugging process
//alert(7 + 7);


/*var a;
a = 5;
alert(a);*/

/*let $x = 25, lol = "Raj";
const _y = 20;
let tell;

x = 30;
y = 5;
let z = $x + _y;

alert(x);
alert(y);
alert(z);
console.log($x);
console.log(_y);
console.log(z);
console.log(lol);
console.log(tell);*/


/*
let x = 'Gautham';
alert(`hello ${x}`);

let y = 345.4657;
console.log(typeof x);
console.log(typeof y);

//boolean

let z = 5 < 3;
console.log(z);
console.log(typeof z);

//array

let m = ['mom', 'dad', 'sister', 'brother'];
console.log(m);
console.log(typeof m);

//object

let man = {
	name: 'raj',
	age: 26
}
console.log(man);
console.log(typeof man);

//undefined

let d;
console.log(typeof d);

let e = "";
console.log(typeof e);*/

//Opertors

let x = 10;
let y = '3';
//x = y;

//operator +,-,*,/,%,**
let z;
z = x % y;
//x = x + y;
//same
//x += y;
y = y ** 2;


console.log(z);
console.log(x);
console.log(y);

// + operator
let a = 5;
let b = 'ram';

console.log(a + " " + b); // Concatination number with string

let c = 6;
//c = c + 1;
c++;
c--;
c--;
console.log(c);

//Bodmas rule
let d;
d = (x + 5) / 5;
console.log(d);

let t = "wow\'boy";
let f = 'hello\' man\" come here';
console.log(t);
console.log(f);

//Comparison & Logical opeartor
// ==
//5==5 -> true
//5==6 -> false
//5=='5' ->true // same value with differenty  datatype is allowed
// ===
//5===5 -> true
//5===6 -> false
//5==='5' ->false// same value with same datatype is allowed
// !=
//8!=5 ->true
//8!=8 ->false
//8!='8' ->false
// !==
//8!==5 ->true
//8!==8 ->false
//8!=='8' ->true  // datatype is  mismatched

// >  -- greater than
// <  -- lesser than
// >=  -- greater than equalto
// <=  -- lesser than equalto

// (AND)&& - - this satisfy only when both the conditions are true else false
//(5<10 && 6>1) --> true
//(5>10 && 6>1)  --> false

// (OR)|| - - this satisfy if any one of the conditions is true else false
//(5<10 && 6>1) --> true
//(5>10 && 6>1)  --> true

//(not) !
//!(6==5) -> true


// if 
/*let age = 28;
let hasvotedCard = "Yes";

if (age >= 18) {
	if (hasvotedCard == "Yes") {
		alert("Use It !!!!")
	}
	else {
		alert("Apply for It!!!");
	}
}
else if (age >= 18 && hasvotedCard != "Yes") {
	alert("take voter card!!!");
}
else {
	alert("apply voter card!!!");
}*/

let loggedin = 1;

/*if (loggedin == 0) {
	console.log("Login");
}
else {
	console.log("Logout");
}*/

//Ternary Operator

let option = loggedin == 4 ? "Login" : "Logout";

console.log(option);

let user;

//user = 'Raj';

//alert(user ?? "Strange Guy");

if (" ") {
	console.log("LIVE ME!!!");
}
else {
	console.log("No ME!!!");
}

//Switch Statement uses === for comparison

let input = 'n';

switch (input) {
	case 1: // if(input === 1)
	//document.write("continue....");
	//break;
	case 'y':// if(input === 'y')		
	//document.write("allow....");
	//break;
	case 'yes':// if(input === 'yes')
	//document.write("go on....");
	//break;
	case 0:// if(input === 0)
		document.write("end....");
		break;
	case "n":// if(input === 'n')
	//document.write("nth ....");
	//break;
	case "no":// if(input === 'no')
		document.write("no th ....");
		break;
	default:// act as else stmt
		document.write("wrong match");
}

//if in different way
/*
let j = 10;

if (j === 10) {
	document.write("Accepted!!!")
}
document.write("Agreed!!!")
*/


//document.write("done!!!")

// Looping
// initialization --> 1st
// condition --> 2nd
// incerment/decrement --> 3rd

//types
// for, while, do-while

/*
for (let i = 1; i <= 5; i++)
	//document.write(i);
	document.write("GM ", i);
document.write("RAJ");
*/



let q = 1;

for (let j = 0; j <= 5; j++)

	document.write(j + "! " + '\n');
document.write("GM ");
document.write(" **GA");




//while
while (q <= 10) {
	console.log(" " + q + " ");
	q++;
}



//do-while
/*

do {
	document.write(" " + "\n" + "Gm");
	document.write(q);
	q++;
}
while (q <= 5)
*/



