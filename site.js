console.log("External file");

var city;
var cityFrom = "";
var cityName = "New York City";
var x = 32;

console.log ("cityName, x: ", cityName, x);

var firstname = "sulayman", lastname = "larry";
console.log("firstname, lastname", firstname, lastname);

var s = "2019";
var s2 = 2019;
var n = 2001;
console.log ("age: ", s - n);
console.log ("age: ", s + n);
console.log ('age:',  s2 + n );

var escapequotes = "this is judi's \"city\" name";
console.log ("escapequotes:" , escapequotes);

document .addEventListener('DOMContentLoaded' , function(event){
	console.log("ready! ", event);


		var welcome ="Web Basic";
		var Intro = "This is a 9-week program with";
		var female = 3;
		var male = 2;
		var totalofstudents = female + male;
		var introtxt = "This is a 9 - week program with" +
		totalofstudents + "students."
		
		console.log("female + male", totalofstudents);
		console.log("welcome:", welcome);
		console.log("Intro", intro);
		console.log("female",female);
		console.log("male", male);
		console.log("totalofstudents: ", totalofstudents);
		console.log("introtxt:", introtxt);

		document.getElementById('welcome').innerHTML = welcome;
		document.querySelector(".intro").innerHTML = introtxt;
		console.log("end ");
	}) // end of addeventlistener
	





var myString = "This is my string.";
var stringLength =myString.length;
console.log("stringLength : ", stringLength);
var convertoUpperCase = myString. toUpperCase();
console.log ("convertoUpperCase: ", convertoUpperCase, myString. toUpperCase);






var x = 3.14; // A number with decimal
var y = 3; // A number with decimals
console.log ("x + y = ", (x+y), x); // 6.140000000000001 - 3.14

var x1 = 123e5;
var y = 3;

var a = 0.2 + 0.1;
var d = (0.2 * 10 + 10) / 10;

/* math */




var xy = (x+y);
var m = Math.round(xy);
console.log("m: ", m);

var show_random_num = Math.round();
console.log ("show_random_num: ", show_random_num);

/*Boolean*/

console.log ("cityName: ", Boolean(cityName), cityName)
console.log ("city: ", Boolean(city), city);
var x = null;
console.log("city From: ", cityFrom, Boolean(cityFrom));
cityFrom = "Brooklyn"
console.log("city From: ", cityFrom, Boolean(cityFrom));


/*objects*/
var myObj = {}
console.log(myObj)
var myObj ={
	"state": "New York",
	"zipcode": 10027
}
console.log ("objects: ", myObj, myObj.zipcode)


var myArray = [];
console.log ("myArray:", myArray);
myArray = [0,1, 2, 'string1', 'string2', 'string3', true, false];
console.log("myArray,myArray[2]: ", myArray, myArray[2]);
console.log("myArray: ", myArray[2])

var daysoftheweek = [
"Sunday",
"Monday", 
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"

 ];

console.log(daysoftheweek, daysoftheweek[0]);
var d = new Date();
console.log("date: ", d)
var getWeekday = d. getDay();
console.log ("daysoftheweek", daysoftheweek[getWeekday], "getWeekday", getWeekday)

var arrayofStuff = [
{'name': 'judi'},
[3, 4, 5],
'nifty'
]

console.log("arrayofStuff", arrayofStuff.length);

var nycBoroughs = [
'Manhattan',
'Brooklyn',
'Queens',
'bronx',
'Staten Island'
];
console.log('nycBoroughs: ', nycBoroughs, nycBoroughs[3])
nycBoroughs[3] = "The Bronx"
console.log('boroughs: ', nycBoroughs,nycBoroughs [3])

console.log('nycBoroughs.length: ', nycBoroughs.length)
nycBoroughs[nycBoroughs.length] = "Westchester";
console.log('extra boroughs: ', nycBoroughs)
nycBoroughs.push("Yonkers")
console.log('push boroughs: ', nycBoroughs)
console.log('nycBoroughs.length: ',nycBoroughs.length);

nycBoroughs.pop();
console.log('pop boroughs: ', nycBoroughs)
nycBoroughs.pop[3];
// removing last item from the array
console.log('pop(3) boroughs: ', nycBoroughs)
console.log('what pop?', nycBoroughs.pop());

// shift(): remove an item from the beginning of an array
nycBoroughs.shift();
console.log('shift boroughs:', nycBoroughs);

// unshift()Add items to the beginning of an array
nycBoroughs.unshift('long Island');
nycBoroughs.unshift('Hudson Valley' , 'Albany');
console.log ('unshift boroughs: ', nycBoroughs);
console.log('unshift() return length ', nycBoroughs.unshift()); //unshift()

// slice (where you want to start, how many to remove)
console.log('before splice boroughs: ', nycBoroughs)
nycBoroughs.splice(2,2)
console.log('splice boroughs: ', nycBoroughs)

//using a strict
var one = 1, two = 2
console.log('one === one', one === one);
console.log ('one == one' , one == one);
console.log('one === two', one === two);
console.log('one == two' , one !== two);

// using unstrict


var animal1 ="cow"
var animal2 = "bear"
var animal3 = "tiger"
var animal4 = "lion"
// And
console.log('animasl &&' , animal1 === "cow" && animal2 === "bear")

//or
console.log('one || two', one || two);
console.log('animal1 || animal2', animal1 ==="cow" || animal2 === "lion");

// Not or Bang
console.log("not true", !true);
console.log ("not false", !false);
console.log('not animal1 || animal2', !(animal1 === "cow" || animal2 === "bear"));

// if statement

var answer = window. confirm ("click ok, get true. Click Cancel get false.");
answer;
//alert ('alert box')
console.log("click answer: ", answer)
if (answer === true ){
	console.log("You clicked Ok.");
} 

// if else statement
if (answer === true) {
	console.log("You clicked ok.");
}else{
	console.log("You clicked cancel.");

}

var answer = window.prompt ("Type YES, NO, MAYBE. Then click ok");
if (answer ==='YES') {
	console.log(" You wrote YES.");

}
else if(answer === 'MAYBE'){
	console.log("You wrote Maybe");
}
else if(answer === 'NO'){
		console.log("You wrote NO");
}
else{
	console.log('else answer', answer)
}

if (answer){
	console.log("Your wrote: ", answer);
} else {
	console.log("empty")
	}
switch(answer){
	
	case "YES":

	console.log("You wrote YES.");
	
	break;


case "MAYBE":

	console.log("You wrote MAYBE.");
	
	break;

case "NO":

	console.log("You wrote NO.");
	
	break;
default:
	console.log("Your wrote: ", answer);
}

var fname= "firstname"
if(fname === "firstname") console.log("first name", fname);

var transportation = "bicycle", birthdayGift = "bicycle", iGot = false;
if(transportation === birthdayGift) {
	console.log("YAY! ")
	iGot = false;
} else {
	console.log('oh no! I need to give more hints.');
	iGot = true;
}
if (iGot){console.log("Cry WAAAA!") }
if (!iGot){console.log("scream WEEEE!") }

var transport = "bicycle";
transport === "bicycle"
	? console.log ("Your transport is bicycle")
	: console.log ("Your transport is subway")

	var transportType = transport ==="bicycle" ? "type bicycle" : "type subway";
	console.log("transportType", transportType);
	//TYPE CHECKIMG
	var thing = 12;
	console.log('typeof', typeof thing);
	var thing = "twelve";
	console.log('typeof', typeof thing);
	var thing = false;
	console.log('typeof', typeof thing);
	var thing = {};
	console.log('typeof', typeof thing);
	var thing = [];
	console.log('typeof', typeof thing);

	// for loop sesquential
	var i = 0;
	console.log("1, daysoftheweek, daysoftheweek.length", i, daysoftheweek, daysoftheweek.length );
	// index, when to stop increments
	for (i; i < daysoftheweek.length; i++) {
		daysoftheweek[i];
		console.log('daysoftheweek[i]', daysoftheweek[i]);

	}

	var nycMarkets = [
	{
		"accepts_ebt": true,
		"additionalinfo": "Open year-round",
		"address": "Union bet Driggs & N 12th St",
		"borough": "Brooklyn",
		"facilityname": "McCarren Park Greenmarket",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": true,
		"saturday": "8am-3pm ",
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"website": "https://www.grownyc.org/greenmarket",
		"zipcode": "11222"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 7/14/2017 to 11/22/2017",
		"address": "E 163rd St & Hunts Point Ave",
		"borough": "Bronx",
		"enddate": "2017-11-22T00:00:00.000",
		"facilityname": "Harvest Home Hunts Point Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-07-14T00:00:00.000",
		"website": "https://www.harvesthomefm.org/",
		"wednesday": "8am-4pm",
		"zipcode": "10459"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 6/28/2017 to 11/15/2017",
		"address": "Clarkson & Troy Aves",
		"borough": "Brooklyn",
		"enddate": "2017-11-15T00:00:00.000",
		"facilityname": "Urban Oasis Farmers Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-06-28T00:00:00.000",
		"wednesday": "2pm-5:30pm",
		"zipcode": "11203"
	}, {
		"accepts_ebt": false,
		"additionalinfo": "Market open dates: 7/6/2017 to 11/16/2017",
		"address": "114-02 Guy R Brewer Blvd",
		"borough": "Queens",
		"enddate": "2017-11-16T00:00:00.000",
		"facilityname": "Queens Hospital Center Farmers Market II",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-07-06T00:00:00.000",
		"thursday": "8am-4pm",
		"zipcode": "11434"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 7/8/2017 to 10/28/2017",
		"address": "90 W 164th St bet Ogden & Nelson Aves",
		"borough": "Bronx",
		"enddate": "2017-10-28T00:00:00.000",
		"facilityname": "Taqwa Community Farmers Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"saturday": "10am-4pm",
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-07-08T00:00:00.000",
		"zipcode": "10452"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Open year-round",
		"address": "506 Lenox Ave bet 135th & 137th Sts",
		"borough": "Manhattan",
		"facilityname": "Harvest Home Harlem Hospital Farmers Market",
		"friday": "8am-7pm",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": true,
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"website": "https://www.harvesthomefm.org/",
		"zipcode": "10037"
	}, {
		"accepts_ebt": true,
		"additionalinfo": "Market open dates: 6/24/2017 to 10/28/2017",
		"address": "Livonia Ave bet Powell & Junius Sts",
		"borough": "Brooklyn",
		"enddate": "2017-10-28T00:00:00.000",
		"facilityname": "Isabahlia Farmers Market",
		"nyc_dept_of_health_cooking": false,
		"open_year_round": false,
		"saturday": "8am-3pm ",
		"service_category": "Farmers Markets and Food Boxes ",
		"service_type": "Farmers Markets",
		"startdate": "2017-06-24T00:00:00.000",
		"website": "https://www.isabahlialoefinc.org/",
		"zipcode": "11212"
	}
];

var i = 0;
console.log("i, nycMarkets, nycMarkets.length", i, nycMarkets, nycMarkets.length)
for (i; i <nycMarkets.length; i++) {
		nycMarkets[i];
		console.log('nycMarkets[i]', nycMarkets[i]);
		var cooking =(nycMarkets[i].nyc_dept_of_health_cooking === true) ? "YES" : "No";
		console.log ('cooking', cooking);
		var openYearRound =(nycMarkets[i].open_year_round=== true)? "YES" : "No";
		console.log('openYearRound', openYearRound);
}