/*
################################################################
#suitesofeuston.ca: check.js
#Copyright © 2025 Allison Munn
#FULL COPYRIGHT NOTICE IS IN README
################################################################
*/

function checkSubmit(event)
{
  
  var valR = true;

  var dateStart = document.getElementById("FORM-CHECK-DATE-CHECK-IN").value;
  var dateEnd = document.getElementById("FORM-CHECK-DATE-CHECK-OUT").value;
  
  if(dateStart > dateEnd)
  {
    alert("Invalid Dates");
    valR = false;
  }
  
  if(valR)
  {
    
  }
  else
  {
    event.preventDefault();
  }
  
  return valR;
}

function check()
{
  //var roomForm = document.getElementById("FORM-ROOM");
  //roomForm.addEventListener("submit", roomSubmit);

  alert("CHECK");
}
