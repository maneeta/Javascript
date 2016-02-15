/*Question1
 Write a program to prompt the user for age.
 If age is equal to 14, alert "coupon 1".
 If age is equal to 21, alert "coupon 2".
 If age is equal to 30, alert "coupon 3".
 If age is equal to 50, alert "coupon 4".
 Else alert "No coupon".*/
function Question1 ()
{
var age = parseInt(prompt("Enter age"));

switch(age){

case 14  : {
	         alert("coupon1");
	         break;
           }
case 21 : {
	        alert("coupon2");
	        break;
          }

case 30 : {
	        alert("coupon3");
	        break;
          }

case 50 : {
	        alert("coupon4");
	        break;
          }
default : {
	        alert("No coupon");
	        break;
          }
              }
}

/* Question2
 Write a program to prompt the user to enter a day (like Monday, Tuesday, Wednesday, etc).
 Based on the value entered by the user, display a special dish. 
 For example, if the user enters Monday then alert "Mondays, We serve Pasta". 
 If the user enters Friday then alert "Fridays, we serve Tacos".*/
function Question2 ()
{
var day = prompt("Enter a day");

switch (day)
{

case "Sunday" : {
	            alert("Sundays, we serve Chowmein");
	            break;
              }
case "Monday" : {
	            alert("Mondays, we serve Pasta");
	            break;
              }
case "Tuesday" : {
	             alert("Tuesdays, we serve Momos");
                 break;
              }
case "Wednesday" : {
                  alert("Wednesday, we serve Sandwiches");
                  break;
               }
case "Thursday" : {
                  alert("Thursdays, we serve Thakali Khana");
                  break;
               }

case "Friday" : {
                alert("Fridays, we serve Tacos");
                break;
               }

case "Saturday" : {
                 alert("Saturdays, we serve Chicken Drumsticks");
                 break;
                }

default : {
                alert("we are closed");
                break;
              }
}
}


/*Question3. 
 Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc). 
 Based on the value entered, display the movie that won the Oscars for that year. 
 Just write this for last 8 years. 
 If he enters beyond last 8 years then alert the user to enter between 2003-2012.  */

function Question3 ()
{
	
var year = parseInt(prompt("Enter year"));

switch (year)
{

case 2003 : 
{
	alert("Pirates of the Caribbean");
	break;
}	

case 2004 : 
{
	alert("Avengers");
	break;
}	

case 2005 : 
{
	alert("Cindrella");
	break;
}	

case 2006 : 
{
	alert("Fast & Furious7");
	break;
}	

case 2007 : 
{
	alert("Fast & Furious5");
	break;
}	

case 2008 : 
{
	alert("The Lord of The Rings");
	break;
}	

case 2009 : 
{
	alert("Ironman");
	break;
}	

 
case 2010 : 
{
	alert("Batman");
	break;
}	
case 2011 :
{
	alert("Wonderwoman");
	break;
}	

case 2012 :
{
	alert("Spiderman");
	break;
}	


default :
{
	alert("Enter between 2003 and 2012");
}

}

}


/* Question4. 
 Write a program to prompt the user to enter the Grade of a student (like A+, A, A-, B etc). 
 Based on the value entered, display terms like "Excellent", "Good Job", "Average" etc. */

function Question4 ()
{
	
var Grade = prompt("Enter Grade");

switch (Grade)
{

case "A+" : 
{
	alert("Excellent");
	break;
}

case "A" : 
{
	alert("Good Job");
	break;
}

case "A-" : 
{
	alert("Average");
	break;
}

case "B" : 
{
	alert("Poor");
	break;
}
default : 
{
	alert("Very Poor");
	break;
}

}

}