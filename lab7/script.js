function main() {

    let ApiKey = "8d18bd354dfdf3483d47c4eb0497434b";
    let city = city_search.value === "" ? "Москва" : encodeURIComponent(city_search.value);
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=ru&units=metric&appid=" + ApiKey;
    axios.get(url).then(res => {
        document.querySelector('.City').innerHTML = "Погода в городе " + res.data.name
        document.querySelector('.temperature').innerHTML = (Math.round(res.data.main.temp) >= 0 ? "+" + Math.round(res.data.main.temp) : Math.round(res.data.main.temp)) + "°"
        document.querySelector('.condition').innerHTML = res.data.weather[0].description[0].toUpperCase() + res.data.weather[0].description.slice(1)
        document.querySelector('.humidity').innerHTML = Math.round(res.data.main.humidity) + "%"
        document.querySelector('.wind').innerHTML = res.data.wind.speed + "м/с"
        document.querySelector('.pressure').innerHTML = Math.round(res.data.main.pressure * 0.75) + "мм рт. ст."


    })



}