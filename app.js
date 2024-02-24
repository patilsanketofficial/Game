function getweather(){
    const city=document.getElementById("cityInput").Value;
    const apikey="YOUR_API_KEY";
    fetch(apiUrl)
    .then(repsponce=>repsponce.json())
    .then(data=>{
        const weatherinfo=
        document.getElementById("weatherinfo");
        weatherinfo.innerHTML=`
        <h2>${data.name}</h2>
        <P>Temparature:${data.main.temp}C</p>
        <p>weather:${data.weather[0].description}</p>
        `;
    })
    .catch(error=>{
        console.error('Error fecting weather data:',error);
        const weatherinfo=
        document.getElementById("weatherinfo");
        weatherinfo.innerHTML="<p>Failed to fetch weather data.Please try again.</p>";

    });
    }
