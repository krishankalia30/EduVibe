function openVideo(card, id) {
  window.open(`https://www.youtube.com/watch?v=${id}`, "_blank");
}

function subscribe() {
  window.open("https://youtube.com", "_blank");
}
const form = document.querySelector("form");
const responseMsg = document.getElementById("response");

form.addEventListener("submit", function () {
  responseMsg.innerText = "Sending...";
});

