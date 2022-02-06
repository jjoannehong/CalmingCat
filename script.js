var name;

function enterName() {
  name = document.getElementById("fname").value;
}





function one() {
  var user = document.getElementById("user");
  if (name != "") {
  user.innerHTML = "Hi " + name + "! Do you want to join me on my day?";

} else {
  user.innerHTML = "Hi! Do you want to join me on my day?";
  
}}

function two() {
  var user = document.getElementById("user");
  if (name != "") {
  user.innerHTML = "Thanks " + name + "! We both look amazing.";
} else {
  user.innerHTML = "Thanks! We both look amazing.";
  
}
}


function sixa() {
  var cereal = document.getElementById("cereal");
  var click = document.getElementById("click");
  cereal.innerHTML = "Great choice! I love corn flakes."
  click.classList.remove("disNone");
  
}

function sixb() {
  var cereal = document.getElementById("cereal");
  cereal.innerHTML = "Great choice! I love coco puffs."
  click.classList.remove("disNone");
}

function sixc() {
  var cereal = document.getElementById("cereal");
  cereal.innerHTML = "Great choice! I love sugar bombs."
  click.classList.remove("disNone");
}

function eleven() {
   var user = document.getElementById("drink");
  if (name != "") {
  user.innerHTML = "That looks delicious " + name + "! I got warm milk. Uncaffeinated drinks are great for relaxing.";
} else {
  user.innerHTML = "That looks delicious! I got warm milk. Uncaffeinated drinks are great for relaxing.";
  
}
}



function fifteen() {
  var user = document.getElementById("user");
  if (name != "") {
  user.innerHTML = "What do you think, " + name +"?";

} else {
  user.innerHTML = "What do you think?";
  
}}