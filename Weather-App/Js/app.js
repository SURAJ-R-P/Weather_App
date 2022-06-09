console.log("Weather Api");
let weather ={
    apikey:"ae19b72481ca8122f8bb318e14710e76",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apikey)
        .then(res => res.json())
        .then(data => this.displayWeather(data));
        },
        displayWeather : function(data){
            const {name} = data ;
            const {icon , description} = data.weather[0];
            const {temp , humidity} = data.main;
            const {speed} = data.wind;
            // console.log(name,icon,description,temp,humidity,speed);
            document.querySelector(".city").innerHTML = "Weather in " + name ;
            document.querySelector(".temp").innerHTML = "Temperature : " + temp + "  °C";
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            document.querySelector(".description").innerHTML = "Condition : " + description ;
            document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + " % " ;
            document.querySelector(".wind").innerHTML = "Wind Speed : " + speed + " km/h ";
            document.querySelector(".weather").classList.remove("hide");
        },
           example : function () {
               this.fetchWeather(document.querySelector(".inputValue").value);
           },                                       
};

document.querySelector(".example button").addEventListener("click", function () {
    weather.example();
} );

document.querySelector(".inputValue").addEventListener("keyup", function (event) {
    if (event.key == "Enter"){
        weather.example();
    }
});

weather.fetchWeather("Mumbai");

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=ae19b72481ca8122f8bb318e14710e76')
// .then(res => res.json())
// .then(data=> {
//     console.log(data);
// })
// style="background-image: url('./Assets/Clear\ Sky.gif'); background-repeat: no-repeat; background-size: cover;"