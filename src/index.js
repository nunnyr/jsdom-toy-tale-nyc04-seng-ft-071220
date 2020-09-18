let addToy = false;

let toysCollection = document.querySelector("#toy-collection")

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then((toysArr) => {
    // we need to iterate through the toys arr
    // we need a helper function
    console.log("this is the toys array:", toysArr)
    toysArr.forEach((toyObj) => {
    turnToyObjToCard(toyObj)
    })
  })

// When the page loads, make a 'GET' request to fetch all the toy objects. With the
// response data, make a `<div class="card">` for each toy and add it to the
// toy-collection `div`.
let turnToyObjToCard = (toy) => {
// 1) were manually create the outer most element
    let toyCard = document.createElement("div")
        toyCard.className = "card"
        // 2) fill the contents of that element
        // create the individual elements razzmatazz/ append
        // OR 
        // use innerhtml to make your life easier
        toyCard.innerHTML = `<p> ${toy.name} </p>`
        // 3) slap the outter most element on the Dom
        toysCollection.append(toyCard)
  }