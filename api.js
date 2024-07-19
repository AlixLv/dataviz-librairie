//fonctions relatives à la liste des librairies indépendantes
const url = 'https://run.mocky.io/v3/13440ba5-a349-4af2-8dcf-29c1e132b874'; 

let tableDiv = [
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



const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("coucou")

    let bookshopList = [];

await createList(data, bookshopList);

await renderData(bookshopList); 

}

getData();


const createList = async (originalData, newTable) => {
    let numberOfResult = 0;
    for (let i = 0; i < originalData.length; i++){
    if (originalData[i].fields.label_01 === 'Label LiR' && originalData[i].fields.ville === 'PARIS'){
        numberOfResult ++;
        newTable.push(originalData[i]);                    
}
}
};


const renderData = async (bookshopListReady) => {
    const container = document.querySelector('.container');
  
    if (!bookshopListReady) {
        return;
    }
 


    bookshopListReady.forEach((item, index) => {
        if (index < 10) {
    const list =  document.createElement('div');
    list.classList.add('list')
    
    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = item.fields.nom_structure;

    const adress = document.createElement('p');
    adress.classList.add('adress');
    adress.textContent = item.fields.adresse;

    const zipcode = document.createElement('p');
    zipcode.classList.add('zipcode');
    zipcode.textContent = item.fields.code_postal;


    list.appendChild(name);
    list.appendChild(adress);
    list.appendChild(zipcode);
    container.appendChild(list);
    }
    else {
        return;
    }
    });
}


















