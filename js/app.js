const API_KEY = 'bf10fcb20f533056f5528dd27bfb0d53';


const searchTemperature = () => {
    const searchByCountryName = document.getElementById('city-name')
    const searchText = searchByCountryName.value;
    searchByCountryName.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name)
    setInnerText('temperature', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)

    // set weather icon
    const imgIcon = document.getElementById('img-icon')
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    imgIcon.setAttribute('src', url)
}