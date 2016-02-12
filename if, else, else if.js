  /* Question 1: Write a program to prompt the user for age. 
 If age is less than or equal to (<=) 14, alert "Not Allowed". 
 If age is greater than 14 and less than 65, alert "Regular Price". 
 If age is equal to 50, alert "Special discount".
 */
function Question1 ()
{
var age = parseInt(prompt("Enter age"));
if(age==50)
           {
	       alert ("special discount");
           }
else if(age<=14)
	       {
	       alert("not allowed");
	       }
else if(age>14 && age<65)
	       {
	       alert("regular price");
	       }
else
	       {
	        alert("check age");
	       }
}
/* Question 2: Write a program to prompt the user for age. 
 If age is equal to 14, alert "coupon 1". 
 If age is equal to 21, alert "coupon 2". 
 If age is equal to 30, alert "coupon 3". 
 If age is equal to 50, alert "coupon 4". 
 Else alert "No coupon".
*/
function Question2 ()
{
	
 var age = parseInt(prompt("Enter age:"));
 
if(age==14){
	alert("coupon1");
}
else if(age==21){
	alert("coupon2");
}
else if(age==30){
	alert("coupon3");
}
else if(age==50){
	alert("coupon5");
}
else{
	alert("No coupon");
}
}

/*Question 3: Write a program to prompt the user to enter a day (like Monday, Tuesday, Wednesday, etc).
  Based on the value entered by the user, display a special dish. 
  For example, if the user enters Monday then alert "Mondays, We serve Pasta".
  If the user enters Friday then alert "Fridays, we serve Tacos". 
  */
function Question3 ()
{
var day = prompt("Enter a day");
if (day=="Sunday")
{
 alert("Sundays, we serve Pizza");
}
else if (day=="Monday")
{
   alert("Mondays, we serve Pasta");
 }
else if (day=="Tuesday")
{
	alert("Tuesdays,we serve Chicken Drumstick");
}
else if (day=="Wednesday")
{
	alert("Wednesdays, we serve Chowmein");
}
else if (day=="Thursday")
{
	alert("Thursdays, we serve Green Salad");
	}
else if (day=="Friday")
{
	alert("Fridays, we serve Tacos");
	}
else
	{
		alert("Saturdays, we are closed");
	}
}

/* Question 4: Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc).
 Based on the value entered, display the movie that won the Oscars for that year.
 Just write this for last 8 years.
 If he enters beyond last 8 years then alert the user to enter between 2003-2012.
 */
function Question4 ()
{
var year = parseInt(prompt("Enter a year"));
if (year==2015)
{
	alert("Avengers");
	}
else if (year==2012)
{
	alert("Fast & Furious");
	}
else if (year==2011)
{
	alert("Cars");
	}
else if (year==2010)
{
	alert("50 Shades of Grey");
	}
else if (year==2009)
	{
	alert("Pirates of Carribean");
	}
else if (year==2008)
	{
	alert("Rocky");
	}
else if (year==2007)
	{
	alert("Cindrella");
	}
else if (year==2006)
{
alert("No Entry");
}
else
{
	alert("Enter between 2003 and 2012");
	}
}

/* Question 5:Write a program to prompt the user to enter the Grade of a student (like A+, A, A-, B etc).
  Based on the value entered, display terms like "Excellent", "Good Job", "Average" etc.*/

function Question5 ()
{

var Grade=prompt("Enter the Grade");
if (Grade=="A+")
	{
		alert("Excellent");
	}
else  if(Grade=="A")
	{
		alert("Good Job");
	}
else if(Grade=="A-")
	{
		alert("Average");
	}
else if(Grade=="B")
	{
		alert("Poor");
	}
else
	{
		alert("Very Poor");
	}
}