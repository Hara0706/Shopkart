const fruits = [
 {
    name: "Apple",
    nut: "They are rich in vitamins, minerals, and fiber, which can help control hunger and regulate blood sugar.",
    weight: 250,
    price: 80,
    image: "images/apple.jpg"
 },
 {
    name: "Banana",
    nut: "A good source of several vitamins and minerals, especially potassium, vitamin B6, and vitamin C.", 
    weight: 200,
    price: 40,
    image: "images/banana.jpg"
 },
 {
    name: "Watermelon",
    nut: "The water and vitamins A, B6, and C in watermelon help your skin stay soft, smooth, and supple.",
    weight: 1200,
    price: 60,
    image: "images/watermelon.jpg"
 },
 {
    name: "Grapes",
    nut: "A good source of potassium, a mineral that helps balance fluids in your body.",
    weight: 300,
    price: 120,
    image: "images/grapes.jpg"
 },
 {
    name: "Orange",
    nut: "In addition to vitamin C, oranges have other nutrients that keep your body healthy. The fiber in oranges can keep blood sugar levels in check and reduce high cholesterol to prevent cardiovascular disease.",
    weight: 250,
    price: 100,
    image: "images/orange.jpg"
 }
]

const veg = [
   {
      name: "Carrot",
      nut: "A particularly good source of beta carotene, fiber, vitamin K1, potassium, and antioxidants.",
      weight: 200,
      price: 40,
      image: "images/carrot.jpg"
   },
   {
      name: "Cabbage",
      nut: "It is highly nutritious and rich in vitamin C, fiber, and vitamin K.",
      weight: 250,
      price: 10,
      image: "images/cabbage.jpg"
   },
   {
      name: "Spinach",
      nut: "It is an extremely nutrient-rich vegetable. It packs high amounts of carotenoids, vitamin C, vitamin K, folic acid, iron, and calcium.",
      weight: 100,
      price: 20,
      image: "images/spinach.jpg"
   },
   {
      name: "Tomato",
      nut: "They low in calories and provide important nutrients like vitamin C and potassium.",
      weight: 250,
      price: 30,
      image: "images/tomato.jpg"
   },
   {
      name: "Potato",
      nut: "A major nutrient in potatoes is potassium, an electrolyte which aids in the workings of our heart, muscles, and nervous system.",
      weight: 1000,
      price: 40,
      image: "images/potato.jpg"
   }
]

var item;

function ShowDetails(itemName){
   for(var i=0; i<5; i++){
      if(fruits[i].name == itemName){
         item = fruits[i];
         document.getElementById('myImage').src = fruits[i].image;
         document.getElementById('item-title').innerHTML = itemName;
         document.getElementById('item-nut').innerHTML = fruits[i].nut;
         document.getElementById('item-weight').innerHTML = "Weight: " + fruits[i].weight;
         document.getElementById('item-price').innerHTML = "Price: " + fruits[i].price;
         break;
      }
   }

   for(var i=0; i<5; i++){
      if(veg[i].name == itemName){
         item = veg[i];
         document.getElementById('myImage').src = veg[i].image;
         document.getElementById('item-title').innerHTML = itemName;
         document.getElementById('item-nut').innerHTML = veg[i].nut;
         document.getElementById('item-weight').innerHTML = "Weight: " + veg[i].weight;
         document.getElementById('item-price').innerHTML = "Price: " + veg[i].price;
         break;
      }
   }
}

function add(){
   var x = document.getElementById('quan');
   var val = x.value;
   var num = parseInt(val, 10);
   num = num + 1;
   if(num >= 0)
   document.getElementById('quan').value = num;
}

function rem(){
   var x = document.getElementById('quan');
   var val = x.value;
   var num = parseInt(val, 10);
   num = num - 1;
   if(num >= 0)
   document.getElementById('quan').value = num;
}

function cart(){
   var y =  document.getElementById('quan').value;
   var x = document.getElementById('req').value;
   var val = parseInt(x);
   document.getElementById('tot').value = parseFloat(item.price*val/item.weight*y);
}