console.log('Hello')

const url = 'https://www.google.at/maps/@'

if (navigator.geolocation)
navigator.geolocation.getCurrentPosition(function(position){

const {latitude} = position.coords;
const {longitude} = position.coords;
console.log(`https://www.google.at/maps/@${latitude},${longitude}`)

var map = L.map('map').setView([latitude,longitude], 13);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([latitude,longitude]).addTo(map)
    .bindPopup(L.popup({maxWidth: 30,minWidth: 20, className: 'popup'}))
    .setPopupContent('Hier ist der Standort')
    .openPopup();

map.zoomControl.setPosition('bottomright');

map.on('click', function(mapEvent) {
    console.log(mapEvent)

})    

},

function(){
console.log('Fehler')

}

)