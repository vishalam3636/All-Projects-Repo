console.log("Connected");

////////////// 🛢️🛢️🛢️ Containers 🛢️🛢️🛢️ //////////
// Main Container (Append Inside Body)
let mainBox = document.createElement("div");
mainBox.className = "mainContainer";
document.body.appendChild(mainBox);

// Heading Container (Append Inside mainBox)
let headingContainer = document.createElement("div");
headingContainer.className = "headingContainer";
mainBox.appendChild(headingContainer);

// Select Container (Append Inside mainBox)
let selectContainer = document.createElement("div");
selectContainer.className = "selectContainer";
mainBox.appendChild(selectContainer);

// Lyrics Container
let lyricsContainer = document.createElement("div");
lyricsContainer.className = "lyricsContainer";
mainBox.appendChild(lyricsContainer);

// Song Heading Container
let songHeadingContainer = document.createElement("div");
songHeadingContainer.className = "songHeadingContainer";
lyricsContainer.appendChild(songHeadingContainer);

// Ul Tag (Append Inside Lyrics Container, and inside Ul tag li tag will be appnded with song lines)
let ulTag = document.createElement("ul");
lyricsContainer.appendChild(ulTag);

//////////////////// INSIDE CONTAINERS //////////////

// Storing Songs in an array of object and get song name
// Storing Songs In Object
let songs = [
  {
    title: "Select Song",
    song: null,
  },
  {
    title: "Pal Pal Har Pal",
    song: `पल पल पल पल, हर पल, हर पल z कैसे कटेगा पल, हर पल, हर पल z दिल दिल दिल दिल में मची है मची z मची है हलचल हलचल हलचल z कैसे कटेगा पल, हर पल, हर पल z कैसे कटेगा पल, हर पल, हर पल z पल पल पल पल… z 
    ओ हमसफर, लगता है डर z रात कटे ना कभी हो सहर z इस पल में, सिमटे उमर z रात कटे ना कभी हो सहर z तू जो है साथ मेरे तो डगर z लगे के जैसे खुबसूरत घर z तू जो है साथ तो ये अम्बर z लगे के जैसे साया हो सर पर z तेरे कांधे पर रखकर सर z यूँ ही कट जाए सारी उमर z पल पल पल पल… z 
    कल क्या हो, किसको खबर z लगता है डर, लगता है डर z इस पल में, सिमटे उमर z रात कटे ना कभी हो सहर z 
    (अच्छा बताओ) z दिल की इतनी सारी बातें z कैसे लिखोगे इस छोटे खत पर z दिल पर टूटा है ये कैसा कहर z तुमको पाकर खोने का है डर z प्यार का ये ढ़ाई आखर z कैसे लिखोगे इस छोटे खत पर z 
    पल पल पल पल्ल हर पल हर पल z कैसे कटेगा पल हर पल z पल पल पल पल्ल हर पल हर पल z कैसे कटेगा पल हर पल हर पल z 
    दिल दिल दिल दिल में मची है मची z मची है हलचल हलचल हलचल z कैसे कटेगा पल हर पल हर पल z कैसे कटेगा पल हर पल हर पल z 
    हाँ हाँ हाँ हांला लाला z हाँ हाँ हाँ उम् उम् उम् z ला ला लाळआ. z`,
  },
  {
    title: "Woh Pehli Baar",
    song: `वो पहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या किसने जाना z 
    तेरी आँखों में जन्नत बसा के चला z तेरी ज़ुल्फो की छाव में चलता चला z तेरे नैनो में चैन, तेरे लब पे खुशी z तुझको ही मैं मोहोब्बत बना के चला z
    वो पहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या किसने जाना z 
    तेरी आँखों में जन्नत बसा के चला z तेरी ज़ुल्फो की छाव में चलता चला z तेरे नैनो में चैन, तेरे लब पे खुशी z तुझको ही मैं मोहोब्बत बना के चला z 
    वो पहली बार जब हम मिले z हो गये सुरू ये सिलसिले z हो गया ये दिल दीवाना z होता है प्यार क्या किसने जाना z
    खिलती कलियों में ढ़ूंधू बस तेरे निशान z मैं ना जानू है आख़िर यह क्या कारवा z तुझे देखु तो आए लब पे खुशी z खुदा ना करे हो कभी दूरिया z
    वो पहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या हमने जाना z
    हो गया हूँ मे पागल अब तेरे लिए z तेरे बिन दिल बेचारा ये कैसे जीए z मैने खोके है चैन पाई तुझमे खुशी z तू बॅनी जाने जाना मेरी ज़िंदगी z
    वो पेहली बार जब हम मिले z हाथों में हाथ जब हम चले z हो गया ये दिल दीवाना z होता है प्यार क्या हमने जाना (x2)`,
  },
  {
    title: "Maa",
    song: `उसको नहीं देखा हमने कभी z पर इसकी ज़रुरत क्या होगी z ऐ माँ, ऐ माँ तेरी सूरत से अलग z भगवान की सूरत क्या होगी, क्या होगी z उसको नहीं देखा हमने कभी z
    इनसान तो क्या देवता भी z आँचल में पले तेरे z है स्वर्ग इसी दुनिया में z क़दमों के तले तेरे z ममता ही लुटाये जिसके नयन z ऐसी कोई मूरत क्या होगी z ऐ माँ, ऐ माँ तेरी सूरत... z
    क्यों धूप जलाए दुखों की z क्यों गम की घटा बरसे z ये हाथ दुआओं वाले z रहते हैं सदा सर पे z तू है तो अँधेरे पथ में हमें z सूरज की ज़रुरत क्या होगी z ऐ माँ, ऐ माँ तेरी सूरत... z
    कहते हैं तेरी शान में जो z कोई ऊँचे बोल नहीं z भगवान के पास भी माता z तेरे प्यार का मोल नहीं z हम तो यही जानें तुझसे बड़ी z संसार की दौलत क्या होगी z ऐ माँ, ऐ माँ तेरी सूरत... `,
  },
];
// console.log(songs);

// Select Tag (Append inside Select Container)
let selectTag = document.createElement("select");
selectContainer.appendChild(selectTag);

// Making and Appending options to the select tag
for (let i = 0; i <= songs.length - 1; i++) {
  let optionTag = document.createElement("option");
  optionTag.innerText = songs[i].title;
  optionTag.value = songs[i].title;
  selectTag.appendChild(optionTag);
}

document.addEventListener("click", (event) => {
  // checking the target value is among options
  if (event.target.value !== "Select Song" && Boolean(event.target.value)) {
    // console.log(event.target.value);
    let val = event.target.value;

    // confirming if the person wants to read the lyrics
    let confirmation = confirm(
      `Do you want to read lyrics of- 🎼🎼 "${val}" 🎼🎼`
    );

    if (confirmation) {
      // Iterating over Songs Array
      for (let i = 0; i <= songs.length - 1; i++) {
        // Matching the selected options value with title
        if (songs[i].title === val) {
          // Split Songs @z to get seperate lines
          let splitSong = songs[i].song.split("z");
          // console.log(splitSong);

          // setting heading text to title value of song object
          let headingText = songs[i].title;

          // Heading of the song
          let headingTag = document.createElement("h2");
          headingTag.innerText = headingText;
          songHeadingContainer.appendChild(headingTag);
          songHeadingContainer.style.border = "2px solid #000";
          songHeadingContainer.style.borderRadius = "10px";
          songHeadingContainer.style.padding = "5px 0px";
          songHeadingContainer.style.boxShadow =
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";

          // looping over the splitSong array and print each line
          // for (let elem of splitSong) {
          for (let i = 0; i <= splitSong.length - 1; i++) {
            let listTag = document.createElement("li");
            listTag.innerText = splitSong[i];

            setTimeout(() => {
              ulTag.appendChild(listTag);
              listTag.style.listStyle = "none";
              ulTag.style.border = "2px solid #000";
              ulTag.style.borderRadius = "10px";
              ulTag.style.padding = "15px 0px";
              // ulTag.style.boxShadow =
              //   "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
              ulTag.style.boxShadow = "rgba(0, 0, 0, 0.4) 0px 30px 90px";
              // Reset Select Tag Value
              event.target.value = "Select Song";
            }, i * 1000);
          }
        }
      }
    } else {
      alert("Okay Tata Bye Bye..... !!");
      event.target.value = "Select Song";
    }
  }

  // tried to toggle with this logic
  // console.log(Boolean(lyricsContainer.innerText) === true);

  ////////////// END OF FINAL CODE ///////////
});

/*********************************************************************
///👉🏻 Basic Code To APPEND OPTIONS and PRINT Values Inside Array 👈🏻///
// Option Tag (Dynamically Append Inside Select Tag, Loop Over Array)
let songs = ["Select Songs", "Woh Pehli Baar", "Maa"];

for (let i = 0; i <= songs.length - 1; i++) {
  let optionTag = document.createElement("option");
  optionTag.innerText = songs[i];
  // optionTag.value = i;
  optionTag.value = songs[i];
  selectTag.appendChild(optionTag);
}

document.addEventListener("click", (event) => {
  if (
    event.target.value !== "Select Songs" &&
    Boolean(event.target.value) === true
  ) {
    console.log(event.target.value);
  }
});
************************************************************************/
