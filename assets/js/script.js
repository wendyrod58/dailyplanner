var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");

//Grab HTML ELEMENT 
var currentEl = document.getElementById("currentDay");

//display text on the elemnt 
currentEl.textContent = rightNow;


function saveEvent() {
    console.log("save button click", this);
    //grab the hour and decription 
    var description = document.getElementsByClassName("description");
    console.log(description[0].value);
    var hour = document.getElementsByClassName("hour");
    console.log(hour[0].textContent);

    //set it to locastorage 
    localStorage.setItem(hour[0].textContent, description[0].value) 
}

//  grab save button
var saveBtn = document.getElementsByClassName("saveBtn");
console.log("grabbing save button ", saveBtn);

//Add an event listiner to the button 

saveBtn[0].onclick = saveEvent;
saveBtn[1].onclick = saveEvent;
// saveBtn[0].onclick = saveEvent; 
