function formValidation()  
{  
//alert('hello');
var fname = document.getElementById("fname").value;
var desc = document.getElementById("about").value;
var pnum = document.getElementById("phonenumber").value;  
var apnum = document.getElementById("alternatephonenumber").value;
var pnumreg = /^\d{10}$/ ;
 
	if(fname!="" && desc!="" && pnum!="")
	{
		if (pnum.match(pnumreg) && apnum.match(pnumreg))
		{
		 alert("sumbitted");
		}
			else
			{
				alert("enter a valid phone number");
			}
	}
	else
	{
		alert("name or about or phone number cant be left empty!")
		return false;
	}
	
}
function validatefname()
{ 
if (document.getElementById("fname").value=="") 
	document.getElementById("fnameerror").style.display='block';
else
	document.getElementById("fnameerror").style.display='none';

}
function validatephno()

{
var pnum = document.getElementById("phonenumber").value;  

var pnumreg = /^\d{10}$/ ;

	
		if (pnum!="" && pnum.match(pnumreg))
		{
		document.getElementById("phnoerror").style.display='none';
		 
		}
			else
			{
				document.getElementById("phnoerror").style.display='block';
			}
	
	
}
function validateaphno()
{

var apnum = document.getElementById("alternatephonenumber").value;
var apnumreg = /^\d{10}$/ ;

	
		if (apnum!="" && apnum.match(apnumreg))
		{
			document.getElementById("aphnoerror").style.display='none';
		}
			else
			{
			 document.getElementById("aphnoerror").style.display='block';
			
			}
	
}
function validateabout()
{ 
if (document.getElementById("about").value=="") 
	document.getElementById("abouterror").style.display='block';
else
	document.getElementById("abouterror").style.display='none';

}