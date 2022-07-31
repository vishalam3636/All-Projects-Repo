// SETTING DATE
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = dd + "-" + mm + "-" + yyyy;
console.log(today);

// APPLYING LOGIC
let mainContainer = document.querySelector(".mainContainer");
let bdayContainer = document.querySelector(".birthdayContainer");

if (today === "31-07-2022") {
  mainContainer.style.display = "none";

  setTimeout(() => {
    mainContainer.style.display = "block";
    bdayContainer.style.display = "none";
  }, 7000);
}
