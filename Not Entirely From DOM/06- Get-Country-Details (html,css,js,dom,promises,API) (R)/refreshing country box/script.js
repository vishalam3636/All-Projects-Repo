"use strict";

let inputCountry = document.querySelector(".inputField");
let countryContainer = document.querySelector(".country");
let buttonSubmit = document.querySelector(".submit");

let bodyTag = document.querySelector("body");
let mainDisplayContainer = document.querySelector(".mainContainer");
let countryFlag = document.querySelector(".flagImage");
let countryNameResult = document.querySelector(".countryNameResult");
let nativeNameResult = document.querySelector(".nativeNameResult");
let populationResult = document.querySelector(".populationResult");
let areaResult = document.querySelector(".areaResult");
let callingCodeResult = document.querySelector(".callingCodeResult");

//////////////////////////////////////////////////

const countryDetails = function (countryName) {
  fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then((response) => response.json())
    .then((data) => {
      let mainData = data[0];
      console.log(mainData);

      // bodyTag.style.backgroundImage = `url('${mainData.flag}')`;
      // bodyTag.style.backgroundSize = "100%";
      // bodyTag.style.backgroundRepeat = "no-repeat";

      // mainDisplayContainer.style.backgroundImage = `url('${mainData.flag}')`;
      // mainDisplayContainer.style.backgroundSize = "contain";
      // mainDisplayContainer.style.backgroundRepeat = "no-repeat";

      countryFlag.src = mainData.flag;
      countryNameResult.innerHTML = mainData.name;
      nativeNameResult.innerHTML = mainData.nativeName;
      populationResult.innerHTML = mainData.population;
      areaResult.innerHTML = mainData.area;
      callingCodeResult.innerHTML = mainData.callingCodes;

      countryContainer.style.display = "block";

      inputCountry.value = "";
    });
};

buttonSubmit.addEventListener("click", function () {
  let countryName = inputCountry.value;
  countryDetails(countryName);
});
