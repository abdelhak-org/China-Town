const cardData = [

    {
      id :0,
      img:"./assets/menü-1.jpg",
    title : "Menü one",
     description : "lorem lorem lorem lorem lorem lorem lorem lorem lorem "},

     { 
      id :1,
      img:"./assets/menü-1.jpg",
    title : "Menü one",
     description : "lorem lorem lorem lorem lorem lorem lorem lorem lorem "},

     {
      id :2,
      img:"./assets/menü-1.jpg",
    title : "Menü one",
     description : "lorem lorem lorem lorem lorem lorem lorem lorem lorem "},

     { 
      id :3,
      img:"./assets/menü-1.jpg",
     title : "Menü one",
      description : "lorem lorem lorem lorem lorem lorem lorem lorem lorem "}

]

const cardHolder = document.querySelector(".card-holder");
const addButton = document.querySelector(".add-products") ;
const cards = document.querySelectorAll(".card")
const cardNumber = Array.from(cards).length;




const index = 0;
let productsNum = 2
let newItems =  cardData.splice(index , productsNum) ;
addButton.addEventListener("click" ,()=>{
    newItems.filter((element)=>{
       const item  = element.id !== 1;
       return item
        console.log()
        const html = `
        <div class="card">
        <div class="img-cover">
          <img src=${element.img} alt="menü" >
        </div>
        <h4> ${element.title } </h4>
        <p> ${element.description}</p>
      </div>

        `
    
        
    }
    
    )

})

console.log(newItems)