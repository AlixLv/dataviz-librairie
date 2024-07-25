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
    marker._icon.style.filter = "hue-rotate(25deg)";

     //lien entre liste de librairies et map   
    // bookshopListReady[i].addEventListener("mouseover", () => {
    //     map.flyTo(coords[i], 12);
    // })
};
    let mode = 0;

    document.querySelector('#arr1').addEventListener("click", 
        (mode) => {
            map.flyTo([48.863704964791864, 2.334678158416777], 15);
            mode = 1;
            return mode;
        });
    document.querySelector('#arr2').addEventListener("click", 
        () => {
            map.flyTo([48.86898506731983, 2.342585252549832], 15);
            mode = 2;
        });
    document.querySelector('#arr3').addEventListener("click", 
        () => {
            map.flyTo([48.864981225451785, 2.3625041301806617], 15);
            mode = 3;
        });
    document.querySelector('#arr4').addEventListener("click", 
        () => {
            map.flyTo([48.855326750747096, 2.3609562677659044], 15);
            mode = 4;
        });   
    document.querySelector('#arr5').addEventListener("click", 
        () => {
            map.flyTo([48.84330633875683, 2.3536252592422473], 15);
            mode = 5;
        });   
    document.querySelector('#arr6').addEventListener("click", 
        () => {
            map.flyTo([48.85136566100697, 2.335051272854635], 15);
            mode = 6;
        });  
    document.querySelector('#arr7').addEventListener("click", 
        () => {
            map.flyTo([48.85714776928274, 2.3125991864349533], 15);
            mode = 7;
        });
    document.querySelector('#arr8').addEventListener("click", 
        () => {
            map.flyTo([48.87354645913075, 2.313759208468015], 15);
            mode = 8;
        });
    document.querySelector('#arr9').addEventListener("click", 
        () => {
            map.flyTo([48.87663775335831, 2.340080271697847], 15);
            mode = 9;
        });
    document.querySelector('#arr10').addEventListener("click", 
        () => {
            map.flyTo([48.876826906212465, 2.3581972247334386], 15);
            mode = 10;
        });
    document.querySelector('#arr11').addEventListener("click", 
        () => {
            map.flyTo([48.858455888071376, 2.3793064533715547], 15);
            mode = 11;
        });
    document.querySelector('#arr12').addEventListener("click", 
        () => {
            map.flyTo([48.843141694359055, 2.3896860468534222], 15);
            mode = 12;
        });
    document.querySelector('#arr13').addEventListener("click", 
        () => {
            map.flyTo([48.82986623338986, 2.363082744482322], 15);
            mode = 13;
        });
    document.querySelector('#arr14').addEventListener("click", 
        () => {
            map.flyTo([48.83230446903985, 2.3264298862716855], 15);
            mode = 14;
        });
    document.querySelector('#arr15').addEventListener("click", 
        () => {
            map.flyTo([48.84203207217297, 2.297321651456523], 15);
            mode = 15;
        });
    document.querySelector('#arr16').addEventListener("click", 
        () => {
            map.flyTo([48.86212268166178, 2.282547310670731], 15);
            mode = 16; 
        });
    document.querySelector('#arr17').addEventListener("click", 
        () => {
            map.flyTo([48.88706767795717, 2.3110217810106706], 15);
            mode = 17;
        });
    document.querySelector('#arr18').addEventListener("click", 
        () => {
            map.flyTo([48.890467526110015, 2.3494228894104956], 15);
            mode = 18;
        });
    document.querySelector('#arr19').addEventListener("click", 
        () => {
            map.flyTo([48.88653029924089, 2.3847624972884724], 15);
            mode = 19;
        });
    document.querySelector('#arr20').addEventListener("click", 
        () => {
            map.flyTo([48.863936141695014, 2.403323017682067], 15);
            mode = 20;
        });                                              
    console.log(`Mode = ${mode}`)
    };


const getCoords = (bookshopListReady) => {
    let coordTable = [];
    for (let i = 0; i< bookshopListReady.length; i++) {
        coordTable.push([bookshopListReady[i].fields.wgs]);
       
    }
return coordTable;
    
}