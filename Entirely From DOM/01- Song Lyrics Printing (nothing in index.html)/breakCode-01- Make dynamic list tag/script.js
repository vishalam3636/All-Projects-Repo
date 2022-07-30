// Main Div Container
let container = document.createElement("div"); // creating div container
container.className = "mainContainer"; // setting class to the container
document.body.appendChild(container); // appending div container to body

// Making Unorderled List tag
let ulList = document.createElement("ul"); // Making ul tag
ulList.className = "listContainer"; // setting class to the container
container.appendChild(ulList); // appending ul to the main-container div

// TASK- Apppend Child Seperately
/***************************************************
// Making first li tag
let listTag1 = document.createElement("li");
listTag1.innerText = "Vishal";
ulList.appendChild(listTag1);

// Making second li tag
let listTag2 = document.createElement("li");
listTag2.innerText = "Vishu";
ulList.appendChild(listTag2);
*****************************************************/

// Appneding Items Dynamically  (items are present in array)
/*****************************************************
let arr = ["Vishal", "Vishu", "Cobra", "Aaalsi"];

for (let elem of arr) {
  let listTag = document.createElement("li");
  listTag.innerText = elem;
  ulList.appendChild(listTag);
}
*****************************************************/

// Appneding Items Dynamically at 1 second interval  (items are present in array)
/******************************************************
let arr = ["Vishal", "Vishu", "Cobra", "Aaalsi"];

for (let i = 0; i <= arr.length - 1; i++) {
  setTimeout(() => {
    let listTag = document.createElement("li");
    listTag.innerText = arr[i];
    ulList.appendChild(listTag);
  }, i * 2000);
}
****************************************************/

// Printing Music on Intervals (kind of like animation)
/********************************************************************************
let hinStr = `
वो पहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या किसने जाना z 
तेरी आँखों में जन्नत बसा के चला z तेरी ज़ुल्फो की छाव में चलता चला z तेरे नैनो में चैन, तेरे लब पे खुशी z तुझको ही मैं मोहोब्बत बना के चला z
वो पहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या किसने जाना z 
तेरी आँखों में जन्नत बसा के चला z तेरी ज़ुल्फो की छाव में चलता चला z तेरे नैनो में चैन, तेरे लब पे खुशी z तुझको ही मैं मोहोब्बत बना के चला z 
वो पहली बार जब हम मिले z हो गये सुरू ये सिलसिले z हो गया ये दिल दीवाना z होता है प्यार क्या किसने जाना z
खिलती कलियों में ढ़ूंधू बस तेरे निशान z मैं ना जानू है आख़िर यह क्या कारवा z तुझे देखु तो आए लब पे खुशी z खुदा ना करे हो कभी दूरिया z
वो पहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या हमने जाना z
हो गया हूँ मे पागल अब तेरे लिए z तेरे बिन दिल बेचारा ये कैसे जीए z मैने खोके है चैन पाई तुझमे खुशी z तू बॅनी जाने जाना मेरी ज़िंदगी z
वो पेहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या हमने जाना (x2) p`;

let splitHinStr = hinStr.split("z");
// console.log(splitHinStr);

for (let i = 0; i <= splitHinStr.length - 1; i++) {
  setTimeout(() => {
    let listTag = document.createElement("li");
    listTag.innerText = splitHinStr[i];
    listTag.style.listStyle = "none";
    ulList.appendChild(listTag);
  }, i * 3000);
}
**************************************************************************************/

// // Storing Songs In Object
// let songs = {
//   song1: {
//     title: "Woh Pehli Baar",
//     song: `
//     वो पहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या किसने जाना z
//     तेरी आँखों में जन्नत बसा के चला z तेरी ज़ुल्फो की छाव में चलता चला z तेरे नैनो में चैन, तेरे लब पे खुशी z तुझको ही मैं मोहोब्बत बना के चला z
//     वो पहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या किसने जाना z
//     तेरी आँखों में जन्नत बसा के चला z तेरी ज़ुल्फो की छाव में चलता चला z तेरे नैनो में चैन, तेरे लब पे खुशी z तुझको ही मैं मोहोब्बत बना के चला z
//     वो पहली बार जब हम मिले z हो गये सुरू ये सिलसिले z हो गया ये दिल दीवाना z होता है प्यार क्या किसने जाना z
//     खिलती कलियों में ढ़ूंधू बस तेरे निशान z मैं ना जानू है आख़िर यह क्या कारवा z तुझे देखु तो आए लब पे खुशी z खुदा ना करे हो कभी दूरिया z
//     वो पहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या हमने जाना z
//     हो गया हूँ मे पागल अब तेरे लिए z तेरे बिन दिल बेचारा ये कैसे जीए z मैने खोके है चैन पाई तुझमे खुशी z तू बॅनी जाने जाना मेरी ज़िंदगी z
//     वो पेहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या हमने जाना (x2) p`,
//   },
//   song2: {
//     title: "Maa",
//     song: `
//     उसको नहीं देखा हमने कभी z पर इसकी ज़रुरत क्या होगी z ऐ माँ, ऐ माँ तेरी सूरत से अलग z भगवान की सूरत क्या होगी, क्या होगी z उसको नहीं देखा हमने कभी z
//     इनसान तो क्या देवता भी z आँचल में पले तेरे z है स्वर्ग इसी दुनिया में z क़दमों के तले तेरे z ममता ही लुटाये जिसके नयन z ऐसी कोई मूरत क्या होगी z ऐ माँ, ऐ माँ तेरी सूरत... z
//     क्यों धूप जलाए दुखों की z क्यों गम की घटा बरसे z ये हाथ दुआओं वाले z रहते हैं सदा सर पे z तू है तो अँधेरे पथ में हमें z सूरज की ज़रुरत क्या होगी z ऐ माँ, ऐ माँ तेरी सूरत... z
//     कहते हैं तेरी शान में जो z कोई ऊँचे बोल नहीं z भगवान के पास भी माता z तेरे प्यार का मोल नहीं z हम तो यही जानें तुझसे बड़ी z संसार की दौलत क्या होगी z ऐ माँ, ऐ माँ तेरी सूरत... z
//     `,
//   },
// };

// Making Song Options
