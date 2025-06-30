// loops

// For Loops

//  for (let i=0; i<=20; i++) {
//     console.log(i)  
//  }


// while loops

// let a = prompt("enter the value of n")
// n = Number.parseInt(a)
// let i = 0;
// while(i<=n){
//     console.log(i)
//     i++;
// }


// Do while loops

// let a = prompt("enter the value of n")
// n = Number.parseInt(a)
// let i = 10;
// do{
//     console.log(i)
//     i++;
// }while(i<=n)


//  functions

// normal function/
// let a = 1;
// let b = 2;
// let c = 3;
// function onePlusAvg(x,y) {
//     return Math.round (1+ (x+y)/2)
// }

// Arrow funtion
// const sum = (p,q) =>{
//     return p + q
// }
// const hello = ()=>{
//     console.log("Hey how are you")
// }
// console.log(sum(5 , 8));
// console.log(onePlusAvg(a,b));
// console.log(onePlusAvg(b,c));
// console.log(onePlusAvg(a,c));

// template literals
// let boy1 = "pramod"
// let boy2 = "Nikhil"
// nikhil is the friend of pramod
// let sentence = `${boy2} is the friend of ${boy1}`
// console.log(sentence) 

// Escape Sequence Characters
// let fruit = `banana`


// let person = {name: "yogesh" , age: 30};
// for (let key in person) {
//     console.log(key + ":" + person[key]);
// }



// for (let i = 1; i<= 5; i++) {
//     if(i === 3) continue;
//     console.log(i);
// }



// for (let i = 1; i <= 5; i++) {
//   console.log("Count: " + i);
// }



// let i = 1;
// while (i <= 5) {
//   console.log("Number: " + i);
//   i++;
// }



// let i = 1;
// do {
//   console.log("Value: " + i);
//   i++;
// } while (i <= 5);



// let colors = ["red", "green", "blue"];
// for (let color of colors) {
//   console.log(color);
// }



// let person = { name: "Yogesh", age: 30 };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// print current time or date.
// let now = new Date();

// let formatted = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} at ${now.getHours()}:${now.getMinutes()}`;

// console.log(formatted);


// let random = Math.floor(Math.random()*10) + 1;
// console.log(random); 



// Wait for DOM to load
// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("userForm");

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("nameInput").value;
//     const age = document.getElementById("ageInput").value;

//     document.getElementById("output").innerText =
//       `Hello ${name}, you are ${age} years old!`;
//   });
// });


// debugger

const data = {
  fruits: {
    citrus: ['Orange', 'Lemon'],
    berries: ['Strawberry', 'Blueberry']
  },
  vegetables: {
    leafy: ['Spinach', 'Lettuce'],
    root: ['Carrot', 'Potato']
  }
};

const categorySelect = document.getElementById('category');
const subcategorySelect = document.getElementById('subcategory');
const itemsList = document.getElementById('items');

function updateQuery(category, subcategory) {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  // Set or update the category and subcategory
  params.set("category", category);
  params.set("subcategory", subcategory);

  url.search = params.toString();
  window.history.pushState({}, '', url.href);
}

// Populate subcategory options
function populateSubcategories(selectedCategory) {
  subcategorySelect.innerHTML = '<option value="">Subcategory</option>';
  itemsList.innerHTML = '';

  if (selectedCategory && data[selectedCategory]) {
    const subcategories = Object.keys(data[selectedCategory]);

    subcategories.forEach(sub => {
      const option = document.createElement('option');
      option.value = sub;
      option.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
      subcategorySelect.appendChild(option);
    });
  }
}

function showItems(category, subcategory) {
  itemsList.innerHTML = '';
  if (category && subcategory && data[category][subcategory]) {
    data[category][subcategory].forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      itemsList.appendChild(li);
    });
  }
}

categorySelect.addEventListener('change', () => {
  const selectedCategory = categorySelect.value;
  populateSubcategories(selectedCategory);
  updateQuery(selectedCategory, '');
});


subcategorySelect.addEventListener('change', () => {
  const category = categorySelect.value;
  const subcategory = subcategorySelect.value;
  showItems(category, subcategory);
  updateQuery(category, subcategory);
});


window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  const subcategory = params.get('subcategory');

  if (category) {
    categorySelect.value = category;
    populateSubcategories(category);

    if (subcategory) {
      subcategorySelect.value = subcategory;
      showItems(category, subcategory);
    }
  }
});




// let Marks = {
//       harry : 90,
//       subham : 50,
//       yogesh : 20,
//       bhavya: 10
// }

// for (let i=0; i<Object.keys(Marks).length; i++){
//     console.log("the marks of" = Object.keys(Marks)[i])
// }