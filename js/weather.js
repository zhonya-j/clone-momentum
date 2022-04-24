const API_KEY = "80def048e1d31734630b33f0581b2f22";

function onGeoOk(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude; 
    console.log(lat,long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
            .then(data => {
                const weather = document.querySelector("#weather");
                const temperture = document.querySelector("#temperture");
                const city = document.querySelector("#city");
                weather.innerText = data.weather[0].main+"    ";
                temperture.innerText = data.main.temp+"    ";
                city.innerText = data.name;
            });
}

function onGeoError() {
    alert("error");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);