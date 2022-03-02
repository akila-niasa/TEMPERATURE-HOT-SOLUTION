const API_KEY=`cd60ec4cc7289ef6850fb7505a65f938`
const searchTemperature=()=>{
    const city=document.getElementById("city-name").value
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))
}
const setText=(id,text)=>{
    document.getElementById(id).innerText=text
}
const displayTemperature=(temperature)=>{
    setText("city",temperature.name)
    setText("temp",temperature.main.temp)
    setText("feels",temperature.main.feels_like)
    setText("weather",temperature.weather[0].main)
    console.log(temperature);
    const url=` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const img=document.getElementById("weather-icon")
    img.setAttribute('src',url)
}