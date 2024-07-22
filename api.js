//fonctions relatives à la liste des librairies indépendantes
const url = 'https://run.mocky.io/v3/13440ba5-a349-4af2-8dcf-29c1e132b874'; 

// fonction pple asynch qui va chercher les données via l'API auprès du serveur
const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    let bookshopList = [];


await createList(data, bookshopList);

await renderData(bookshopList); 

}

getData();

// Fonction qui filtre les objets de mon tableau de données API
const createList = async (originalData, newTable) => {
    let numberOfResult = 0;
    for (let i = 0; i < originalData.length; i++){
    if (originalData[i].fields.label_01 === 'Label LiR' && originalData[i].fields.ville === 'PARIS'){
        numberOfResult ++;
        newTable.push(originalData[i]);                    
}
}
};




// Fonction mise en page de données mon tableau Bookshoplist
const renderData = async (bookshopListReady) => {
    const container = document.querySelector('.container');
  
    if (!bookshopListReady) {
        return;
    }
    
    const itemsPerPage = 9;
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

    const iconBook = document.createElement('span');
    iconBook.innerHTML = `<svg width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>`;
    

    list.appendChild(iconBook);
    list.appendChild(name);
    list.appendChild(adress);  
    container.appendChild(list);
}
};

















