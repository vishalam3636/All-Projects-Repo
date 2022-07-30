console.log("Connected");

let arr = [
  "Soniyo",
  "Oo..oo",
  "Soniyo",
  "Tu hi tu hi meri manzil",
  "Tu...hi chahat mein hai shamil...",
];

let selectTag = document.querySelector(".selectTag");
for (let elem of arr) {
  let optionTag = document.createElement("option");
  optionTag.text = elem;
  optionTag.value = elem;

  selectTag.add(optionTag);
}

document.addEventListener("click", (event) => {
  if (event.target.value !== "select" && Boolean(event.target.value) === true) {
    console.log(event.target.value);
    alert(event.target.value);
    event.target.value = "select";
  }
});
