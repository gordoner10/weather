
import { weather_data } from './data.js';

let loadDayForecastData = () => {
  let dia;
  let message_dia;
  let mensaje_2;

for (let elemento of weather_data)
{
  dia = elemento;
  let { city_code: city_code1 , city: city1, date : date1, maxtemperature : maxtemperature1, mintemperature:mintemperature1, cloudiness:cloudiness1, wind:wind1,rainfall:rainfall1, forecast_today:forecast_today1, forecast_week:forecast_week1 } = dia;
  
  if (city1 == "Guayaquil")
{
  message_dia = ` <div class="d-flex justify-content-between mt-2 mb-2">
    <div class="me-4 d-flex text-golden">
      <i class="material-icons">location_on</i><h5 id="city" class="text-golden">${city1} </h5>
    </div>
    <div>
      <h5 id="date" class="text-golden text-sm  opacity-8 mb-0"> ${date1} </h5>
    </div>
  </div>
  
  <h2 class="text-golden text-center mt-4 mb-4 pb-2"><span id="maxtemperature">${maxtemperature1}</span> |  <span id="mintemperature" class="opacity-6 mx-2">${mintemperature1}</span></h2>
  <div class="d-flex justify-content-between">
    <div class="me-4">
      <p class="text-golden text-sm opacity-8 mb-0">Nubosidad</p>
      <h6 id="cloudiness" class="text-golden mb-0">${cloudiness1}</h6>
    </div>
    <div class="me-4">
      <p class="text-golden text-sm opacity-8 mb-0">Viento</p>
      <h6 id="wind" class="text-golden mb-0">${wind1}</h6>
    </div>
    <div>
      <p class="text-golden text-sm opacity-8 mb-0">Prob. de precipitaciones</p>
      <h6 id="rainfall" class="text-golden mb-0">${rainfall1}</h6>
    </div>
  </div>`

  mensaje_2=`<div class="col-md-6 col-6">
  <div class="card">
    <div class="card-header mx-4 p-3 text-center">
      <div class="icon icon-shape icon-lg bg-gradient-info shadow text-center border-radius-lg">
        <i id="late_icon" class="material-icons opacity-10">${forecast_today1[0]["icon"]}</i>
      </div>
    </div>
    <div class="card-body pt-0 p-3 text-center text-truncate">
      <h3 id="late_temperature" class="text-center mb-0">${forecast_today1[0]["temperature"]}</h3>
      <span id="late_forecast" class="text-md">${forecast_today1[0]["forecast"]}</span>
      <hr class="horizontal dark my-3">
      <h4 id="late_text" class="mb-0 text-md">${forecast_today1[0]["text"]}</h4>
    </div>
  </div>
</div>
<div class="col-md-6 col-6">
  <div class="card">
    <div class="card-header mx-4 p-3 text-center">
      <div class="icon icon-shape icon-lg bg-gradient-info shadow text-center border-radius-lg">
        <i id="night_icon" class="material-icons opacity-10">${forecast_today1[1]["icon"]}</i>
      </div>
    </div>
    <div class="card-body pt-0 p-3 text-center text-truncate">
      <h3 id="night_temperature" class="text-center mb-0">${forecast_today1[1]["temperature"]}</h3>
      <span id="night_forecast" class="text-md">${forecast_today1[1]["forecast"]}</span>
      <hr class="horizontal dark my-3">
      <h4 id="night_text" class="mb-0 text-md"><${forecast_today1[1]["text"]}</h4>
    </div>
  </div>
</div>`
}
}
 
  let listOfElements = document.getElementsByClassName('card-body position-relative z-index-1 p-3');
  let [ first] = listOfElements;
  first.innerHTML = message_dia;
 
let listOfElements2 = document.getElementsByClassName('row');
  let [ first2, second2, third2] = listOfElements2;
  third2.innerHTML = mensaje_2;

}

let loadWeekForecastData = () => {
	
	
}


loadDayForecastData();
loadWeekForecastData();