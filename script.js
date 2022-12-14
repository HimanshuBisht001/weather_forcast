const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a3a08cfe9fmshd2f6542ac528d18p1d996djsndd75c8ca0986',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeatherData = (city)=>
{
cityName.innerHTML  = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then(response => {

        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
       // wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML =  response.wind_speed
        windspeed2.innerHTML =  response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
      

    })


    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>
{
    e.preventDefault()
    getWeatherData(city.value);
})
getWeatherData("Delhi")