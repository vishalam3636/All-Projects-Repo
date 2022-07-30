// <!-- TYPE-01, Write Color Name -->
const getColor = document.querySelector(".writeField");
const writeSubmit = document.querySelector(".write-submit");

// FUNCTION TO VALIDATE INPUT COLOR
function isColor(strColor) {
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}

writeSubmit.addEventListener("click", function () {
  let val = getColor.value.toLowerCase();
  document.body.style.backgroundColor = val;

  // validating the input color name
  function isColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }

  if (isColor(val)) {
    document.querySelector(".colorName").style.backgroundColor = val;
    document.querySelector(".colorName").innerHTML = val.toUpperCase();
    document.querySelector(".colorName").style.borderRadius = "5px";
    document.querySelector(".colorName").style.padding = "4px 6px";

    getColor.value = "";
  } else {
    // Change everything to initial vals
    getColor.value = "";
    document.querySelector(".colorName").style.backgroundColor = "";
    document.body.style.backgroundColor = "#fff";
    document.querySelector(".colorName").innerHTML = "??????";
    document.querySelector(".colorName").style.borderRadius = "";
    document.querySelector(".colorName").style.padding = "";

    // pallet color chjanhge to original on refresh
    palletColor.value = "";

    // alerting wrong input
    alert("Wrong Color Input.. try again!!");
  }
});

// <!-- TYPE-02, Select Color from pallet -->
const palletColor = document.querySelector(".palletValue");
const selectSubmit = document.querySelector(".select-submit");

selectSubmit.addEventListener("click", function () {
  let selectColor = palletColor.value;
  document.body.style.backgroundColor = selectColor;

  document.querySelector(".colorName").style.backgroundColor = selectColor;
  document.querySelector(".colorName").innerHTML = selectColor.toUpperCase();
  document.querySelector(".colorName").style.borderRadius = "5px";
  document.querySelector(".colorName").style.padding = "4px 6px";
});

// <!-- TYPE-03, Random Color (color from ARRAY) -->
let e1 = "Violet";
let e2 = "Pink";
const arr = [
  "Brown",
  "Red",
  "Orange",
  "Wheat",
  "Navy",
  "Indigo",
  e1,
  "salmon",
  "White",
  e2,
  "Teal",
  "Aqua",
];

const randomSubmit = document.querySelector(".random-submit");

randomSubmit.addEventListener("click", function () {
  let randomNum = Math.floor(Math.random() * arr.length);
  // console.log(randomNum);
  document.body.style.backgroundColor = arr[randomNum];

  document.querySelector(".colorName").style.backgroundColor = arr[randomNum];
  document.querySelector(".colorName").innerHTML = arr[randomNum].toUpperCase();
  document.querySelector(".colorName").style.borderRadius = "5px";
  document.querySelector(".colorName").style.padding = "4px 6px";
});

// <!-- TYPE-04, Random Hexa Color Generator -->
const hexaSubmit = document.querySelector(".hexa-submit");

let alphaNum = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

hexaSubmit.addEventListener("click", function () {
  let colorCode = "#";
  for (let i = 1; i <= 6; i++) {
    const getRandom = Math.floor(Math.random() * alphaNum.length);
    colorCode += alphaNum[getRandom];
  }
  // console.log(colorCode);

  document.body.style.backgroundColor = colorCode;
  document.querySelector(".colorName").style.backgroundColor = colorCode;
  document.querySelector(".colorName").innerHTML = colorCode.toUpperCase();
  document.querySelector(".colorName").style.borderRadius = "5px";
  document.querySelector(".colorName").style.padding = "4px 6px";
});

// <!-- TYPE-05, Click on circle -->
const radioOne = document.querySelector(".brow");
const radioTwo = document.querySelector(".blu");
const radioThree = document.querySelector(".oran");
const radioFour = document.querySelector(".gree");
const radioFive = document.querySelector(".yell");
const radioSix = document.querySelector(".sky");

radioOne.addEventListener("click", function () {
  let colorName = "brown";
  document.body.style.backgroundColor = colorName;
  document.querySelector(".colorName").style.backgroundColor = colorName;
  document.querySelector(".colorName").innerHTML = colorName.toUpperCase();
  document.querySelector(".colorName").style.borderRadius = "5px";
  document.querySelector(".colorName").style.padding = "4px 6px";
});
radioTwo.addEventListener("click", function () {
  let colorName = "blue";
  document.body.style.backgroundColor = colorName;
  document.querySelector(".colorName").style.backgroundColor = colorName;
  document.querySelector(".colorName").innerHTML = colorName.toUpperCase();
  document.querySelector(".colorName").style.borderRadius = "5px";
  document.querySelector(".colorName").style.padding = "4px 6px";
});
radioThree.addEventListener("click", function () {
  let colorName = "orange";
  document.body.style.backgroundColor = colorName;
  document.querySelector(".colorName").style.backgroundColor = colorName;
  document.querySelector(".colorName").innerHTML = colorName.toUpperCase();
  document.querySelector(".colorName").style.borderRadius = "5px";
  document.querySelector(".colorName").style.padding = "4px 6px";
});
radioFour.addEventListener("click", function () {
  let colorName = "yellowGreen";
  document.body.style.backgroundColor = colorName;
  document.querySelector(".colorName").style.backgroundColor = colorName;
  document.querySelector(".colorName").innerHTML = colorName.toUpperCase();
  document.querySelector(".colorName").style.borderRadius = "5px";
  document.querySelector(".colorName").style.padding = "4px 6px";
});
radioFive.addEventListener("click", function () {
  let colorName = "yellow";
  document.body.style.backgroundColor = colorName;
  document.querySelector(".colorName").style.backgroundColor = colorName;
  document.querySelector(".colorName").innerHTML = colorName.toUpperCase();
  document.querySelector(".colorName").style.borderRadius = "5px";
  document.querySelector(".colorName").style.padding = "4px 6px";
});
radioSix.addEventListener("click", function () {
  let colorName = "skyBlue";
  document.querySelector(".colorName").style.backgroundColor = colorName;
  document.body.style.backgroundColor = colorName;
  document.querySelector(".colorName").innerHTML = colorName.toUpperCase();
  document.querySelector(".colorName").style.borderRadius = "5px";
  document.querySelector(".colorName").style.padding = "4px 6px";
});

// <!-- TYPE-06, Color Gradient-->
const color1 = document.querySelector(".field-1");
const color2 = document.querySelector(".field-2");
const gradOptions = document.querySelector(".gradSelect");
const gradSubmit = document.querySelector(".gradient-submit");

gradSubmit.addEventListener("click", function () {
  let colorOne = color1.value.toLowerCase();
  let colorTwo = color2.value.toLowerCase();
  let selects = gradOptions.value;
  console.log(selects);

  if (isColor(colorOne) && isColor(colorTwo)) {
    if (selects === "linear") {
      document.body.style.backgroundImage = `linear-gradient(${colorOne}, ${colorTwo})`;
      document.body.style.backgroundRepeat = "no-repeat";
    } else if (selects === "radial") {
      document.body.style.backgroundImage = `radial-gradient(${colorOne}, ${colorTwo})`;
      document.body.style.backgroundRepeat = "no-repeat";
    } else if (selects === "conic") {
      document.body.style.backgroundImage = `conic-gradient(${colorOne}, ${colorTwo})`;
      document.body.style.backgroundRepeat = "no-repeat";
    }
  } else {
    alert("Wromg color input.. try again !!");
  }

  document.querySelector(".colorName-1").style.backgroundColor = colorOne;
  document.querySelector(".colorName-2").style.backgroundColor = colorTwo;
  document.querySelector(".colorName-1").innerHTML = colorOne.toUpperCase();
  document.querySelector(".colorName-2").innerHTML = colorTwo.toUpperCase();
  document.querySelector(".colorName-1").style.borderRadius = "5px";
  document.querySelector(".colorName-2").style.borderRadius = "5px";
  document.querySelector(".colorName-1").style.padding = "4px 6px";
  document.querySelector(".colorName-2").style.padding = "4px 6px";

  color1.value = "";
  color2.value = "";
  gradOptions.value = "";
});

// Refresh button-1
// document.querySelector(".refresh").addEventListener("click", function () {
//   document.querySelector(".colorName").style.backgroundColor = "";
//   document.body.style.backgroundColor = "#fff";
//   document.querySelector(".colorName").innerHTML = "??????";
//   document.querySelector(".colorName").style.borderRadius = "";
//   document.querySelector(".colorName").style.padding = "";

//   document.body.style.backgroundImage = "";
//   document.querySelector(".colorName-1").style.backgroundColor = "";
//   document.querySelector(".colorName-2").style.backgroundColor = "";
//   document.querySelector(".colorName-1").innerHTML = "??????";
//   document.querySelector(".colorName-2").innerHTML = "??????";
//   document.querySelector(".colorName-1").style.borderRadius = "";
//   document.querySelector(".colorName-2").style.borderRadius = "";
//   document.querySelector(".colorName-1").style.padding = "";
//   document.querySelector(".colorName-2").style.padding = "";

//   // pallet color chanhge to original on refresh
//   palletColor.value = "";

//   console.log("clicked");
// });

let shings = document.querySelectorAll(".shing"); // gives an array of all shing class elements
for (let i = 0; i < shings.length; i++) {
  shings[i].addEventListener("click", function () {
    document.querySelector(".colorName").style.backgroundColor = "";
    document.body.style.backgroundColor = "#fff";
    document.querySelector(".colorName").innerHTML = "??????";
    document.querySelector(".colorName").style.borderRadius = "";
    document.querySelector(".colorName").style.padding = "";

    document.body.style.backgroundImage = "";
    document.querySelector(".colorName-1").style.backgroundColor = "";
    document.querySelector(".colorName-2").style.backgroundColor = "";
    document.querySelector(".colorName-1").innerHTML = "??????";
    document.querySelector(".colorName-2").innerHTML = "??????";
    document.querySelector(".colorName-1").style.borderRadius = "";
    document.querySelector(".colorName-2").style.borderRadius = "";
    document.querySelector(".colorName-1").style.padding = "";
    document.querySelector(".colorName-2").style.padding = "";

    // pallet color chanhge to original on refresh
    palletColor.value = "";

    // console.log("clicked");
  });
}
// 📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑📑

// TESTS TO GET THE BACKGROUND_COLOR OF ANY DOCUMENT
// window.getComputedStyle(document.body, null).getPropertyValue("background-color")

// BELOW IS STYLING AUTHENTICATION (STILL NEWD TO LEARN HOW IT WORKS.)
/*
function isColor(strColor) {
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}

// try it out
console.log(isColor("red")); // true
console.log(isColor("reds")); // false
*/

// LINEAR GRADIENT TEST
let coloryo = "green";
let coloryoo = "pink";
// document.body.style.backgroundImage = `linear-gradient(colorYo, colorYoo)`;
// document.body.style.backgroundImage = "linear-gradient(colorYo, colorYoo)";
// document.body.style.backgroundImage = `linear-gradient(${coloryo}, ${coloryoo})`;
// document.body.style.backgroundImage =
// "linear-gradient(" + `${coloryoo}` + "," + `${coloryo}` + ")";
// "radial-gradient(" + `${coloryoo}` + "," + `${coloryo}` + ")";

// MULTIPLE TAG WITH SAME CLASS NAME HANDLING
// let shingVal = document.querySelectorAll(".shing");
// console.log(shingVal[0].innerHTML);
