/*
################################################################
#suitesofeuston.ca: room.js
#Copyright © 2025 Allison Munn
#FULL COPYRIGHT NOTICE IS IN README
################################################################
*/

function roomSubmit(event)
{
  
  var valR = true;

  var dateStart = document.getElementById("FORM-ROOM-DATE-CHECK-IN").value;
  var dateEnd = document.getElementById("FORM-ROOM-DATE-CHECK-OUT").value;
  
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

function room()
{
  //var roomForm = document.getElementById("FORM-ROOM");
  //roomForm.addEventListener("submit", roomSubmit);
}
