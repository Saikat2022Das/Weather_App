// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '47467ad023msh43fd52b5de5f1c9p119c9ejsnbfea57d86fdf',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
    
        temp.innerHTML = response.temp
        
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        humidity.innerHTML = response.humidity
        fahrenheit.innerHTML = ((temp.innerHTML * 9/5) + 32);
    
    })
    .catch(err => console.error(err))
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")