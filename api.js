// HttpClient httpclient = new DefaultHttpClient();
// HttpGet request = new HttpGet('https://www.data.gouv.fr/fr/datasets/r/a013e874-299b-4595-acfc-597ab539f09d');
// request.addHeader("x-api-key", 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjoiNjY5ODBiZTA0MTRjNmZmY2Q1MWY5MTE0IiwidGltZSI6MTcyMTI0MjQxMC4yNDEyMDE2fQ.w_kvdL4waIY6PZR70a_c6Fw0smbY9RDl-S1oiQg65DaOwm_N6IwAHshtc3zxglvg6ANZkuoOvPAOxInlUefNBg');
// HttpResponse response = httpclient.execute(request);

//fonctions relatives à la liste des librairies indépendantes
const url = 'https://www.data.gouv.fr/fr/datasets/r/a013e874-299b-4595-acfc-597ab539f09d'; 


(async () => {
// const response = await fetch(url);
// const data = await response.json(); //parlsing en json pour pouvoir manipuler les data

 const response = await fetch('https://www.data.gouv.fr/api/1/datasets/r/a013e874-299b-4595-acfc-597ab539f09d', {
        headers: {
            'X-API-KEY': 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjoiNjY5ODBiZTA0MTRjNmZmY2Q1MWY5MTE0IiwidGltZSI6MTcyMTI0ODk0NC44MjEwMDE4fQ.EqixDd2oaauFU-7tiO1YTQOC8z1sZ8HBxiO7Z60o8F9YkSEUzDhZdK01vQxyAnLF2WLBPZlYjTRYL1xRvQScXQ'
        }
    });
    const data = await response.json();
    console.log(data)

let numberOfResult = 0;
let tenBookshop = 0;
let bookshopList = [];

for (let i = 0; i < data.length; i++){
    if (data[i].fields.label_01 === 'Label LiR' && data[i].fields.ville === 'PARIS'){
        numberOfResult ++;
        bookshopList.push(data[i]);                    
}
}
console.log(bookshopList);
for (let i = 0; i < 9 ; i++){
    tenBookshop ++
}

let testDiv = await document.getElementById("0");
testDiv.innerHTML = await bookshopList.name_structure;
})();









