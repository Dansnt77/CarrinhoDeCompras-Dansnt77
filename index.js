const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    },
    {
        id: 6,
        name: "Guaraná Refrigerante",
        price: 11.98
    },

]

let main = document.createElement("main");
let productList = document.createElement("ul");
let buttonEnd = document.createElement("button");
buttonEnd.innerText = "Finalizar";
document.createElement("section")
let body = document.querySelector(".body")
document.createElement("h1")
let section = document.createElement("section")
body.appendChild(main)
main.appendChild(section)
section.append(productList)







function carDeCompras (arr){
let soma = 0
    
    

    for (let index = 0; index < arr.length; index++) {
        let productDetails = document.createElement("li");
        let nameProduct = document.createElement("h3");
        let priceProduct = document.createElement("h3");
        
        
        
        nameProduct.innerText = arr[index].name
        priceProduct.innerText = `R$: ${arr[index].price}`

        
        productDetails.append(nameProduct, priceProduct)
        productList.append(productDetails)
        
        
        soma += arr[index].price

    }
    let valorTotal = document.createElement("h2");
    valorTotal.innerText = ` O Valor total é R$: ${soma}`
    section.append(valorTotal, buttonEnd);
    
}
carDeCompras(productsCart)













