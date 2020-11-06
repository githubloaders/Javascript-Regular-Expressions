/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];

let regEx = /801-/,
    newArray = [];
//let newArray = phoneNums.filter(elem => regEx.test(elem));

for (let i = 0; i < phoneNums.length; i++) {
    if (regEx.test(phoneNums[i])) {
        newArray.push(phoneNums[i]);
    }
}

/*version 2*/

var regexp = /801-/gi
var abc = phoneNums.filter(function(ph){
   return regexp.test(ph)
})

abc;

/*===========================================================================*/

/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.) Make sure that the phone numbers are valid (nnn-nnn-nnnn).
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-66553", "801-777-665-", "801-77A-6655", "801-778-665"];

let regEx = /801-\d\d\d-\d\d\d\d/,
    newArray = [];
//let newArray = phoneNums.filter(elem => regEx.test(elem));

for (let i = 0; i < phoneNums.length; i++) {
    if (regEx.test(phoneNums[i])) {
        newArray.push(phoneNums[i]);
    }
}



/*=================================================================================*/


/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these 
formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/

(function() {
    let phone = document.getElementById("phone"),
        regPhone = /\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/;

    phone.addEventListener("keyup", function() {
        if (regPhone.test(phone.value)) {
            phone.classList.remove("red");
            phone.classList.add("green");
        } else {
            phone.classList.remove("green");
            phone.classList.add("red");
        }
    });
})();



/*=========================================================================================*/

/*
The content.js file contains a string of text stored in a variable text1. 
This string of text is a statement that contains a day of the week as a part of the statement.
 Write a regular expression that will match any day of the week and then replace that day of the week in the string with Monday.
 Display the results to the console. 
*/

let text1 = "Each and every Tuesday, at the beginning of the day, we hold a staff meeting. At the Tuesday staff meeting, you will need to make a report on the past weeks progress, and you will receive assignments for the following Tuesday. Just be aware that somedays this Tuesday meeting might not occur. When that happens, we will make an announcement.";

let reg = /\b[m,t,w,f,s][a-z]{1,4}[n,s,i,r]day\b/gi,
    newText = text1.replace(reg, "Monday");

console.log(newText);



/*==============================grouping ================================*/


var regexp = /^(\d\d\d\d)[-/.](\d{1,2})[-/.](\d{1,2})$/gi,
texta = "1998-09-4";

regexp.exec(texta); //["1998-09-4", "1998", "09", "4", index: 0, input: "1998-09-4", groups: undefined]



var regexp = /^\d\d\d\d[-/.]\d{1,2}[-/.]\d{1,2}$/gi,
texta = "1998-09-4";

regexp.exec(texta);
["1998-09-4", index: 0, input: "1998-09-4", groups: undefined]






/*Email validation*/

/*Example 1*/

var regexp = \^[^\.\[\];"'\s@\-\&]+[-\.]?[^\.\[\];"'\s@\-\&]+@[^\.\[\];"'\s@\-\&]+\.[A-Za-z]{1,3}$\g;

/*
input mohan.rajanna@indegene.com

^ begenning of the string
$ end of the string

[^\.\[\];"'\s@\-\&]+  set of charcter which dous not part of email +(one or more character)   ==> mohan
[-\.]? any one of the character set may be dot or hyphen ====> mohan.
[^\.\[\];"'\s@\-\&]+ same as above ===> mohan.rajanna
@ add the symbol ====> mohan.rajanna@indegene
[^\.\[\];"'\s@\-\&]+ same as above ===> mohan.rajanna@indegene
\. add dot symbol with escape character ====> mohan.rajanna@indegene.
[A-Za-z]{1,3} alphabitic character set min 1 and max 3 ====> mohan.rajanna@indegene.com



*/


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




/*

[^<>()\[\]\\.,;:\s@"]+ set of charcter which dous not part of email +(one or more character)   ==> mohan
(\.[^<>()\[\]\\.,;:\s@"]+)* follower by dot and not select set of character +(one or more) *(zero or more occurance)
(".+") with on double quotes one or more character ====> "mohan.rajanna@indegene.com"
@ add symbol
(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]) ====> [123.898.098.890]
(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})) ===> one or more character followed by dot and two or more character after dot


*/



var regexp = ^[^\.\[\];"'\s@\-\&]+[-\.]?[^\.\[\];"'\s@\-\&]+@[^\.\[\];"'\s@\-\&]+\.[A-Za-z]{1,3}(\.[a-zA-Z]{1,3})?$/g;
/*
(\.[a-zA-Z]{1,3})?  followed by dot and one to three character after .com ?(zero or more occurrence)
*/

output: mohan.rajanna@indegene.co.uk





var regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}/g;

/*
\w+ word character set for one or more occurrance ===> mohan
([\.-]?\w+)   non mandet dot or hyphen follower by word character one or more occurrance  ====> mohan.rajanna
@ add symbol ====> mohan.rajanna@
\w+ word character set for one or more occurrance   ===> mohan.rajanna@indegene
([\.-]?\w+)*  non mandet dot or hyphen follower by word character one or more occurrance of zero or more occurance  ====> mohan.rajanna@indegene.com
(\.\w{2,3}  dot followed by word character set of min 2 max 3 ====> mohan.rajanna@indegene.com.uk

*/





/*====================================password validation================================================*/


var regexp = /^(?=.*\w{8,15})(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/g;

/*

(?=.*\w{8,15})  lookaheadgroup for wordcharacter set min 8 and max 15, .* inside lookahead group dot stands for wildchard character(any character) * zero or more character 
ie any character of zero or more 

same for [A-Z] [0-9] 

\W for all non word chracter for special characterSet


To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter
/^[A-Za-z]\w{7,14}$/



To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/


To check a password between 7 to 15 characters which contain at least one numeric digit and a special character
/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/



To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/


*/



/*=====================================Matching dates=================================*/


/^(\d{1,2}\/)(\d{1,2}\/)(\d{4})$/   matchfor 20/20/2010


/(\d{1,2}\/)\1(\d{4})/   matchfor 20/20/2010 
/*for above example we are using \1 group selector to avoid group duplicate*/


//best regular expression for date
var regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
	
	

	


