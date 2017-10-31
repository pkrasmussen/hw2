//
// navigator.geolocation.getCurrentPosition(function success(position){
//   console.log(position.coords);
//   console.log(position.coords.longitude);
//   return position.coords;
// });

let get_forecast = document.getElementById("get_forecast");
  get_forecast.addEventListener("click", function(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getWeather);
  })


// let current_coordinates = navigator.geolocation.getCurrentPosition(function success(position){
//   return position.coords
// })
//   console.log(current_coordinates)



  let getWeather = function (position){

// Chicago-specific code
    // let latitude = '41.8781';
    // let longitude = '-87.6298';
    let latitude = position.coords.latitude.toFixed(4);
    let longitude = position.coords.longitude.toFixed(4);
    console.log(position.coords)

// General code

    let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
    openweathermap_api_url += 'lat=' + latitude
    openweathermap_api_url += '&lon=' + longitude
    openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
    // console.log(openweathermap_api_url)

    fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);

}

let convertToJSON = function(response) {
  return response.json();
}

let displayError = function(error) {
  console.debug(error);
  // window.alert("Sorry, something went wrong.");
}

let updateWeather = function (response) {
  // console.log(response)
  // console.log(response.coord)
  // console.log(response.coord.lat)
  city = response.name;
  temp = response.main.temp.toFixed(0);
  icon = response.weather[0].icon;
  document.getElementById("city").innerHTML = city;
  document.getElementById("city-temp").innerHTML = "It is " + temp + " degrees fahrenheit outside"
  document.getElementById("weather-picture").src = "http://openweathermap.org/img/w/" + icon + ".png"
}
