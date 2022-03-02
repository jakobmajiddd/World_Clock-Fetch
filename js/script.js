const url = "http://worldtimeapi.org/api/timezone/";
const time = document.getElementById("time");
const UTC = document.getElementById("UTC");

const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", () => getTime(url + dropdown.value));

function worldApiFetch(url) {
  return fetch(url).then(res => res.json());
}

async function getTime(url) {
  let json = await worldApiFetch(url);
  let dateTime = String(json.datetime);
  time.textContent = dateTime.slice(11, 19);
  UTC.textContent = String(json.utc_offset);
}


