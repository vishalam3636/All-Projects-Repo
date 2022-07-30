console.log("Connected");

/*************** MAIN LOGIC **************/
//Selecting tags
let bill = document.getElementById("amount");
let ratings = document.getElementById("ratings");
let people = document.getElementById("people");
let button = document.getElementsByTagName("button");
let tipDisplay = document.querySelector(".display-tip-container");
let tip = document.querySelector(".tip");

// TESTINGS
// console.log(bill);
// console.log(ratings);
// console.log(people);
// console.log(button[0]);
// console.log(tipDisplay);
// console.log(tip);

button[0].addEventListener("click", function () {
  let billValue = bill.value;
  let ratingValue = ratings.value;
  let peopleCount = people.value;

  console.log(billValue, ratingValue, peopleCount);

  // calculating tip logic
  let tipAmount = billValue * (ratingValue / 100);
  let distribution = tipAmount / peopleCount;

  console.log(tipAmount, distribution);

  // changing value
  tip.innerHTML = Math.ceil(distribution);
  tipDisplay.style.display = "block";

  // Changing to initial values
  document.getElementById("amount").value = "";
  document.getElementById("people").value = "";

  console.log(bill.value, people.value);
});
