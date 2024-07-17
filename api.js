//fonctions relatives à la liste des Lir
const url = 'https://www.data.gouv.fr/fr/datasets/r/a013e874-299b-4595-acfc-597ab539f09d'; 


(async () => {
const response = await fetch(url);
const data = await response.json(); //parlsing en json pour pouvoir manipuler les data

let numberOfResult = 0;
let tenBookshop = 0;
let bookshopList = [];

for (let i = 0; i < data.length; i++){
    if (data[i].fields.label_01 === 'Label LiR' && data[i].fields.ville === 'PARIS'){
        numberOfResult ++;
        bookshopList.push(data[i]);                    
}
}

// for (let i = 0; i < 9 ; i++){
//     tenBookshop ++
// }

let testDiv = await document.getElementById("0");
testDiv.innerHTML = await bookshopList.name_structure;
})();









