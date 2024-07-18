//fonctions relatives à la liste des librairies indépendantes
const url = 'https://run.mocky.io/v3/13440ba5-a349-4af2-8dcf-29c1e132b874'; 



 let tabDiv= [
       document.getElementById("0"),
       document.getElementById("1"),
       document.getElementById("2"),
       document.getElementById("3"),
       document.getElementById("4"),
       document.getElementById("5"),
       document.getElementById("6"),
       document.getElementById("7"),
       document.getElementById("8"),
       document.getElementById("9")
];

(async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)

 numberOfResult = 0;
 bookshopList = [];

for ( i = 0; i < data.length; i++){
    if (data[i].fields.label_01 === 'Label LiR' && data[i].fields.ville === 'PARIS'){
        numberOfResult ++;
        bookshopList.push(data[i]);                    
}
}
console.log(bookshopList);
console.log(numberOfResult);
// 0.innerHTML = bookshopList[0].fields.nom_structure;

for (let i = 0; i<tabDiv.length; i++){
    tabDiv[i].innerHTML = bookshopList[i].fields.nom_structure
};



//  test = await document.getElementById("0");
// test.innerHTML = await bookshopList.name_structure;
})();









