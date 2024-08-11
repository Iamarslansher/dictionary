let definitionDiv = document.getElementById("dictionaryContainer");
let audio = document.getElementById("audioPlayer");
function serchText() {
  let serchText = document.getElementById("searchInput").value;
  if (serchText === "") {
    return alert("Please enter a word");
  } else {
    dectionaryApi(serchText);
  }
}

function dectionaryApi(word) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((success) => success.json())
    .then((data) => {
      let definition = data[0].meanings[0].definitions[0].definition;
      let audioSrc = data[0].phonetics[0].audio;
      audio.style.display = "block";
      audio.src = audioSrc;
      definitionDiv.innerHTML = definition;
    })
    .catch((error) => {
      console.log(error, "Error: ");
      definitionDiv.innerHTML = "Please enter a valid word for meaning!";
    });
}
