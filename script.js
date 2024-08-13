function getcity() {
    document.getElementById('loader').style.display = 'block';
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const city = data.address.state_district;

                // console.log(city);
                // console.table(data);
                const apiKey = '375e2053062a4e54b89154226242701';
                const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('loader').style.display = 'none';

                        const city = data.location.name;
                        tempcity.innerHTML = data.location.name;

                        const temprature = data.current.temp_c;
                        temperature.innerHTML = data.current.temp_c + "°C";


                        const date = new Date(data.current.last_updated);
                        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        let day = weekday[date.getDay()];
                        lastupdatedate.innerHTML = day;
                       

                        const temprature_icon = "https:" + data.current.condition.icon;
                        document.getElementById("weather-icon").src = "https:" + data.current.condition.icon;;
                        

                        air_quality.innerHTML = "Air Quality";
                        const cardon_mono_oxide = data.current.air_quality.co;
                        co.innerHTML = "CO : " + data.current.air_quality.co;

                        const sulphur_daioxide = data.current.air_quality.so2;
                        so2.innerHTML ="SO2 : " + data.current.air_quality.so2;

                        const naitrogen_daioxide = data.current.air_quality.no2;
                        no2.innerHTML ="NO2 : " + data.current.air_quality.no2;

                        Wind.innerHTML = "Wind";

                        const wind_dir = data.current.wind_dir;
                        wind_direction.innerHTML ="wind direction : " + data.current.wind_dir;

                        const win_speed = data.current.wind_kph;
                        wind_speed.innerHTML ="wind speed : " + data.current.wind_kph + " kph";
                    })

            })
            .catch(() => {
                console.log("Error fetching data from API");
            });
    });

}

function getweather() {
    document.getElementById('loader').style.display = 'block';
   
    const apiKey = '375e2053062a4e54b89154226242701';
    const city = document.getElementById("inputcity").value;


    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('loader').style.display = 'none';

            const city = data.location.name;
            tempcity.innerHTML = data.location.name;

            const temprature = data.current.temp_c;
            temperature.innerHTML = data.current.temp_c + "°C";


            const date = new Date(data.current.last_updated);
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let day = weekday[date.getDay()];
            lastupdatedate.innerHTML = day;
          
            // const date = data.current.last_updated;
            // lastupdatedate.innerHTML = data.current.last_updated;

            const temprature_icon = "https:" + data.current.condition.icon;
            document.getElementById("weather-icon").src = "https:" + data.current.condition.icon;;
            // img.src = "https" + data.current.condition.iocn;
            // console.log(temprature_icon);

            air_quality.innerHTML = "Air Quality";

            const cardon_mono_oxide = data.current.air_quality.co;
            co.innerHTML = "CO : " + data.current.air_quality.co;
            // co.innerHTML = data.current.air_quality.co;

            const sulphur_daioxide = data.current.air_quality.so2;
            so2.innerHTML ="SO2 : " + data.current.air_quality.so2;
            // so2.innerHTML = data.current.air_quality.so2;

            const naitrogen_daioxide = data.current.air_quality.no2;
            no2.innerHTML ="NO2 : " + data.current.air_quality.no2;
            // no2.innerHTML = data.current.air_quality.no2;

            Wind.innerHTML = "Wind";

            const wind_dir = data.current.wind_dir;
            wind_direction.innerHTML ="wind direction : " + data.current.wind_dir;
            // wind_direction.innerHTML = data.current.wind_dir;

            const win_speed = data.current.wind_kph;
            wind_speed.innerHTML ="wind speed : " + data.current.wind_kph + " kph";
            // wind_speed.innerHTML = data.current.wind_kph + " kph";
            // console.log(win_speed);
        })
        .catch(error => {
           
              {
                alert("Unknown City Please rechake the the city or Spelling");
            }
        });
}







