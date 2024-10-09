function updateTime() {
  //london
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector("#date");
    let londonTimeElement = londonElement.querySelector("#time");
    londonDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("MMMM Do YYYY");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  //new-york
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector("#date");
    let newYorkTimeElement = newYorkElement.querySelector("#time");
    newYorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector("#date");
    let tokyoTimeElement = tokyoElement.querySelector("#time");
    tokyoDateElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityName = event.target.value.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(event.target.value);
  let cityElement = document.querySelector("#cities");
  if (event.target.value) {
    cityElement.innerHTML = `<section class="city-time">
          <div class="city">
            <h2>${cityName}</h2>
            <p id="date">${cityTime.format("MMMM Do YYYY")}</p>
          </div>
          <div class="time" id="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </section>`;
  }
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
