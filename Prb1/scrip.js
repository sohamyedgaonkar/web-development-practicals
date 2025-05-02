const prod =[
    {image: "img/1.jpg", name: "Product 1", price: 100, description: "Description of Product 1"},
    {image: "img/2.jpg", name: "Product 2", price: 200, description: "Description of Product 2"},   
    {image: "img/3.jpg", name: "Product 3", price: 300, description: "Description of Product 3"},
    {image: "img/4.jpg", name: "Product 4", price: 400, description: "Description of Product 4"},
    {image: "img/1.jpg", name: "Product 1", price: 100, description: "Description of Product 1"},
    {image: "img/2.jpg", name: "Product 2", price: 200, description: "Description of Product 2"},   
    {image: "img/3.jpg", name: "Product 3", price: 300, description: "Description of Product 3"},
    {image: "img/4.jpg", name: "Product 4", price: 400, description: "Description of Product 4"},
    {image: "img/1.jpg", name: "Product 1", price: 100, description: "Description of Product 1"},
    {image: "img/2.jpg", name: "Product 2", price: 200, description: "Description of Product 2"},   
    {image: "img/3.jpg", name: "Product 3", price: 300, description: "Description of Product 3"},
    {image: "img/4.jpg", name: "Product 4", price: 400, description: "Description of Product 4"},
]
const abc=5;
var page=1;
const tab=document.getElementById("prod")
const pag=document.getElementById("pagination-controls")
console.log("tab",tab)
function displayProducts(page) {
    const s=(page-1)*abc;
    const e=page*abc;
    page--;
    const productsToDisplay = prod.slice(s, e);
    tab.innerHTML = ""; // Clear previous products
    productsToDisplay.forEach(product =>{
        const row = document.createElement('tr');
        const td = document.createElement('td');
        const img = document.createElement('img');
         img.src =product.image;
         img.alt = product.name;
        td.appendChild(img);
        row.appendChild(td);
        const td1 = document.createElement('td');
        td1.textContent = product.name; 
        row.appendChild(td1);
        const td2 = document.createElement('td');
        td2.textContent =product.price;
        row.appendChild(td2);
        const td3 = document.createElement('td');
        td3.textContent = product.description;  
        row.appendChild(td3);
        tab.appendChild(row);
    })
}

function setup(){
    pag.innerHTML ="";
    const n=Math.ceil(prod.length/abc);
    if(n<=1) return;
    const prevButton = document.createElement('button');
    prevButton.textContent = '← Previous';
    prevButton.addEventListener('click',()=>{
        if(page>1){
            page--;
            displayProducts(page);
        }
    })
    const nextButton = document.createElement('button')
    nextButton.textContent ="Next →";
    nextButton.addEventListener('click',()=>{
        if(page<n){
            page++;
            displayProducts(page);
        }
    })
    pag.appendChild(prevButton);
    pag.appendChild(nextButton);
}
displayProducts(page);
setup();