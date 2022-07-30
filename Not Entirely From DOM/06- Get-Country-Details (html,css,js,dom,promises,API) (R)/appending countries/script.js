"use strict";

let inputCountry = document.querySelector(".inputField");
let buttonSubmit = document.querySelector(".submit");
let countryContainer = document.querySelector(".country");

//////////////////////////////////////////////////

const countryDetails = function (countryName) {
  fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then((response) => response.json())
    .then((data) => {
      let mainData = data[0];
      console.log(mainData);
      const html = `
        <div class="mainDetailsBox">
          <!-- FLAG CONTAINER -->
          <div class="flagBox">
            <img src="${mainData.flag}" alt="India" />
          </div>

          <!-- DETAILS CONTAINER -->
          <div class="mainDescriptionBox">
            <div class="detail">
              <h3 class="heading">DETAILS</h3>
            </div>
            <div class="countryname detail">
              <div class="label">Country Name</div>
              <div class="result">${mainData.name}</div>
            </div>
            <div class="nativename detail">
              <div class="label">Native Name</div>
              <div class="result">${mainData.nativeName}</div>
            </div>
            <div class="population detail">
              <div class="label">Population</div>
              <div class="result">${mainData.population}</div>
            </div>
            <div class="area detail">
              <div class="label">Area</div>
              <div class="result">${mainData.area}</div>
            </div>
            <div class="area detail">
              <div class="label">Calling Code</div>
              <div class="result">${mainData.callingCodes}</div>
            </div>
          </div>
        </div>
      `;

      countryContainer.insertAdjacentHTML("beforeend", html);
      countryContainer.style.opacity = 1;
    });
};

buttonSubmit.addEventListener("click", function () {
  let countryName = inputCountry.value;
  countryDetails(countryName);
});
