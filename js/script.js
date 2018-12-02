$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Jagakarsa&units=metric&APPID=2d979e06150c889e4636fc14cbd3c289", function(data) {
	// console.log(data);

	var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	var city = data.name;
	var weather = data.weather[0].main;
	var temp = Number.parseInt(data.main.temp) + " C";
	
	$(".icon").attr("src", icon);
	$(".city").append(city);
	$(".weather").append(weather);
	$(".temp").append(temp);
})
