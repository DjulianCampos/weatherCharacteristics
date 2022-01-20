const apiKey = '0e347849e9cd404471ed1eb7212335c8';

function weatherLoad(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

document.querySelector('#submit').addEventListener('click', async () => {
    let city = document.querySelector('#city').value;
    let res = document.querySelector('#res');
    const data = await weatherLoad(city);
    
    res.innerHTML = `
    País: ${data.sys.country}<br>
    Nome: ${data.name}<br>
    Tempo: ${data.weather[0].main.replace('Clear', 'limpo')}<br>
    Temperatura: ${data.main.temp}<br>
    Humidade: ${data.main.humidity}%<br>
    Velocidade: ${data.wind.speed}K/h<br>
    `
})