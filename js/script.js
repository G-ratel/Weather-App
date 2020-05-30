let button = document.querySelector('.btn');
let inputVal = document.querySelector('.inputVal');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let wind = document.querySelector('.wind');
let temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&appid=4030ac742b531a108804ed9c3c7be4ba')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let windValue = data['wind']['speed'];
        let descValue = data['weather'][0]['description'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        wind.innerHTML = windValue;
        desc.innerHTML = descValue;
    })
.catch(err => alert("Wrong city name!"))
})