const yes = document.getElementById("yesShuttle");
const no = document.getElementById("noShuttle");
const times = document.querySelectorAll(".time");

function showRegular() {
  yes.classList.remove("active");
  no.classList.add("active");
  times.forEach(t => {
    t.classList.toggle("hidden", t.classList.contains("shuttle"));
  });
}

function showShuttle() {
  no.classList.remove("active");
  yes.classList.add("active");
  times.forEach(t => {
    t.classList.toggle("hidden", !t.classList.contains("shuttle"));
  });
}

times.forEach(t => {
  t.addEventListener("click", () => {
    times.forEach(x => x.classList.remove("active"));
    t.classList.add("active");
  });
});

no.addEventListener("click", showRegular);
yes.addEventListener("click", showShuttle);

showRegular();
