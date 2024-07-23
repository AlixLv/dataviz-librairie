// fonctions relatives à la map
function initMap(bookshopListReady,coords){
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

    if (!coords){
        console.log("ça marche pas");
        return;
    }
   
    for (let i = 0; i < coords.length; i++) {
        //création petite boîte avec infos sur librairie
    let pop = L.popup({closeOnClick : true}).setContent(`<h4>${bookshopListReady[i].fields.nom_structure}</h4> <span>${bookshopListReady[i].fields.adresse}</span>, <span>${bookshopListReady[i].fields.code_postal} ${bookshopListReady[i].fields.ville}</span>`);
    
    //création marqueurs sur map
    let marker = new L.marker((coords[i][0])).addTo(map).bindPopup(pop);

     //lien entre liste de librairies et map   
    // bookshopListReady[i].addEventListener("mouseover", () => {
    //     map.flyTo(coords[i], 12);
    // })
    };
};


const getCoords = (bookshopListReady) => {
    let coordTable = [];
    for (let i = 0; i< bookshopListReady.length; i++) {
        coordTable.push([bookshopListReady[i].fields.wgs]);
       
    }
return coordTable;
    
}