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
    
    const itemsPerPage = 10;
    let numberPages = Math.ceil(bookshopListReady.length/itemsPerPage);

    const parentPagination = document.querySelector('.pages');

    for (let i = 1; i <= numberPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add('pagination');
        pageButton.innerHTML = i;

        const pageLink = document.createElement('a');
        pageLink.setAttribute('href', `/?page=${i}`);
        console.log(pageLink);
        console.log(typeof(pageLink));

        pageLink.appendChild(pageButton);
        parentPagination.appendChild(pageLink);
    };

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let pageVisible = urlParams.get("page");
    if (!window.location.search) {
        pageVisible = 1;
    }
    let pageIndex = pageVisible - 1;
    console.log(`Index: ${pageIndex}`);
    console.log(`Visible: ${pageVisible}`);

for (let i = (pageIndex*itemsPerPage); i < (pageIndex*itemsPerPage)+itemsPerPage; i++){
    
    if (!bookshopListReady[i]) {break}

    const list =  document.createElement('div');
    list.classList.add('list')
    
    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = bookshopListReady[i].fields.nom_structure;

    const adress = document.createElement('p');
    adress.classList.add('adress');
    adress.innerHTML = `${bookshopListReady[i].fields.adresse}</br>${bookshopListReady[i].fields.code_postal} ${bookshopListReady[i].fields.ville}`;

    list.appendChild(name);
    list.appendChild(adress);
    container.appendChild(list);
}
};


















