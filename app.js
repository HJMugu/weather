document.addEventListener('DOMContentLoaded', cityWeather)


function weatherDataFetch( city ) {
    var key = 'a23e25bc421ba3eb2540db15a33dd6a7';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp){
            return  resp.json()
        })
        .then(function (data){
            console.log(data);
        })
        .catch(function (){

        })
}

function cityWeather(e) {
    weatherDataFetch('Tallinn');
}