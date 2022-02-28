const url = "http://worldtimeapi.org/api/timezone/";
const time = document.getElementById("time");

const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", () => getTime(url + dropdown.value));

async function getTime(url) {
  let json = await worldApiFetch(url);
  let dateTime = String(json.datetime);
  time.textContent = dateTime.slice(11, 19);
}

function worldApiFetch(url) {
  return fetch(url).then(res => res.json());
}
