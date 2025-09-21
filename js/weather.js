const name = localStorage.getItem('inputValue');
document.getElementById('displayName').innerHTML = `<div class="text-center text-dark fw-bold mt-3" style="font-size: 1.3rem; "><span class="fw-bold text-light" style="font-size: 2rem; ">Hi, ${name}! <br></span> Welcome to thyWeather App☀️</div>`;

const loader = document.getElementById('loader');

document.getElementById('searchBtn').addEventListener('click', () => {
    const apiKey = 'f35a803caa113d9087f503d8a99f464b';
    const searchInput = document.getElementById('cityInput').value.trim(); 
    const message = document.getElementById('message');
    let displayError1 = document.getElementById('displayError');
    displayError1.innerHTML = '';
    
    if (searchInput === '') {
        displayError1.innerHTML = `<p class="bg-danger text-light w-50 px-2 fw-semibold">Please type a city name</p>`;
        return
    }
loader.classList.remove('d-none');  

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;

    const hourlyForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=${apiKey}&units=metric`;

    function displayWeather(data) { 
        const displayCityWeather = document.getElementById('weather-info');

        if (data.cod === '404') { 
            displayCityWeather.innerHTML = ''; 
            displayError1.innerHTML = `<p class = "text-center fw-bold display-6 text-warning">City not found</p>` 

        }else { 
            const cityName = data.name; 
            const mainWeather = data.weather[0].description; 
            const temperature = Math.floor(data.main.temp); 
            const country = data.sys.country; 
            const iconCode = data.weather[0].icon; 
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            
            displayCityWeather.innerHTML = `
                <div class="card w-100 text-center shadow-lg border-0 bg-primary text-white">
                    <div class="card-body d-flex flex-column justify-content-center">
                        <h2 id="cityName" class="fw-bold">${cityName}(${country})</h2>
                        <img src=${iconUrl} alt="Weather Icon" id="currentIcon" class="img-fluid mx-auto" style="max-width:90px;">
                        <h1 id="temperature" class="my-3 display-3 fw-bold">${temperature}°C</h1>
                        <p id="description" class="lead">${mainWeather}</p>
                    </div>
                </div>
           
`;
        } 
    }

    function displayHourlyForecast(data) {
        const hourlyForecast = document.getElementById('hourly-forecast');
        hourlyForecast.innerHTML = '';
            const next24hours = data.slice(0, 8);

            next24hours.forEach(item => {
        const time = new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        const temp = Math.floor(item.main.temp);
        const weatherParameter = item.weather[0].main;

            hourlyForecast.innerHTML += `
                <div class="col-12 col-sm-4 col-md-3 col-lg-3">
                    <div class="card text-center shadow border-0 bg-warning text-dark ">
                        <div class="card-body">
                            <h6>${time}</h6>
                            <img src=${iconUrl} class="img-fluid" style="max-width:60px;">
                            <p class="fw-bold">${temp}&deg;C</p>
                            <small>${weatherParameter}</small>
                        </div>
                    </div>
                </div>`;
        });
    }

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.log('Error fetching weather:', error))
        
    fetch(hourlyForecastUrl)
        .then(response => response.json())
        .then(data => displayHourlyForecast(data.list))
        .catch(error => console.log('Error fetching forecast:', error))
        .then(() =>  loader.classList.add('d-none'))
    
    message.classList.add('d-none');

    localStorage.setItem('city', searchInput);
});

