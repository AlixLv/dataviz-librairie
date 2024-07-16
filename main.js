// fonctions relatives à la map

function init(){
    const paris = {
        lat: 48.860213,
        lng: 2.342567
    }
    const zoomLevel = 11.5;
    
    const map = L.map('map').setView([paris.lat, paris.lng], zoomLevel);
    
   const mainLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    mainLayer.addTo(map);


}
init()