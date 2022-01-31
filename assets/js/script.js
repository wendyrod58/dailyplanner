
// using moment js to add today date
var rightNow = moment().format("MMMM Do, YYYY");

//Grab HTML ELEMENT 
var currentEl = document.getElementById("currentDay");

//display text on the elemnt 
currentEl.textContent = rightNow;

// adding function to save events

function saveEvent() {
    console.log("save button click", this);
    //grab the hour and decription 
    var description = document.getElementsByClassName("description");
    console.log(description[0].value);
    var hour = document.getElementsByClassName("hour");
    console.log(hour[0].textContent);

    //set it to locastorage 
    localStorage.setItem(hour[0].textContent, description[0].value)
    localStorage.setItem(hour[1].textContent, description[1].value)
    localStorage.setItem(hour[2].textContent, description[2].value)
    localStorage.setItem(hour[3].textContent, description[3].value)
    localStorage.setItem(hour[4].textContent, description[4].value)
    localStorage.setItem(hour[5].textContent, description[5].value)
    localStorage.setItem(hour[6].textContent, description[6].value)
    localStorage.setItem(hour[7].textContent, description[7].value)
    localStorage.setItem(hour[8].textContent, description[8].value)
}


// function saveEvent() {
//     console.log("save button click", this);
//     //grab the hour and decription 
//     var description = document.getElementsByClassName("description");
//     console.log(description[1].value);
//     var hour = document.getElementsByClassName("hour");
//     console.log(hour[1].textContent);

//     //set it to locastorage 
//     localStorage.setItem(hour[1].textContent, description[1].value)
// }

// function saveEvent() {
//     console.log("save button click", this);
//     //grab the hour and decription 
//     var description = document.getElementsByClassName("description");
//     console.log(description[2].value);
//     var hour = document.getElementsByClassName("hour");
//     console.log(hour[2].textContent);

//     //set it to locastorage 
//     localStorage.setItem(hour[2].textContent, description[2].value)
// }

// function saveEvent() {
//     console.log("save button click", this);
//     //grab the hour and decription 
//     var description = document.getElementsByClassName("description");
//     console.log(description[3].value);
//     var hour = document.getElementsByClassName("hour");
//     console.log(hour[3].textContent);

//     //set it to locastorage 
//     localStorage.setItem(hour[3].textContent, description[3].value)
// }

// function saveEvent() {
//     console.log("save button click", this);
//     //grab the hour and decription 
//     var description = document.getElementsByClassName("description");
//     console.log(description[4].value);
//     var hour = document.getElementsByClassName("hour");
//     console.log(hour[4].textContent);

//     //set it to locastorage 
//     localStorage.setItem(hour[4].textContent, description[4].value)
// }

// function saveEvent() {
//     console.log("save button click", this);
//     //grab the hour and decription 
//     var description = document.getElementsByClassName("description");
//     console.log(description[5].value);
//     var hour = document.getElementsByClassName("hour");
//     console.log(hour[5].textContent);

//     //set it to locastorage 
//     localStorage.setItem(hour[5].textContent, description[5].value)
// }

// function saveEvent() {
//     console.log("save button click", this);
//     //grab the hour and decription 
//     var description = document.getElementsByClassName("description");
//     console.log(description[6].value);
//     var hour = document.getElementsByClassName("hour");
//     console.log(hour[6].textContent);

//     //set it to locastorage 
//     localStorage.setItem(hour[6].textContent, description[6].value)
// }


// function saveEvent() {
//     console.log("save button click", this);
//     //grab the hour and decription 
//     var description = document.getElementsByClassName("description");
//     console.log(description[7].value);
//     var hour = document.getElementsByClassName("hour");
//     console.log(hour[7].textContent);

//     //set it to locastorage 
//     localStorage.setItem(hour[7].textContent, description[7].value)
// }

// function saveEvent() {
//     console.log("save button click", this);
//     //grab the hour and decription 
//     var description = document.getElementsByClassName("description");
//     console.log(description[8].value);
//     var hour = document.getElementsByClassName("hour");
//     console.log(hour[8].textContent);

//     //set it to locastorage 
//     localStorage.setItem(hour[8].textContent, description[8].value)
// }


//  grab save button
var saveBtn = document.getElementsByClassName("saveBtn");
console.log("grabbing save button ", saveBtn);

//Add an event listiner to the button 
// saveBtn[0].onclick = saveEvent; 
saveBtn[0].onclick = saveEvent;
saveBtn[1].onclick = saveEvent;
saveBtn[2].onclick = saveEvent;
saveBtn[3].onclick = saveEvent;
saveBtn[4].onclick = saveEvent;
saveBtn[5].onclick = saveEvent;
saveBtn[6].onclick = saveEvent;
saveBtn[7].onclick = saveEvent;
saveBtn[8].onclick = saveEvent;


