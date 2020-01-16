console.log("Hello, World!");

const four = 2 + 2;
console.log(four);


// find element with id of groceries
// (query selector always targets the first element in an html file with a matching class)
const groceriesArticle = document.querySelector("#groceries");
// add class of red-text to element with id of groceries
groceriesArticle.classList.add("red-text");

//find element with class of groceriesHeader
const groceriesHeader = document.querySelector(".groceriesHeader");
//remove groceriesHeader class
groceriesHeader.classList.remove("groceriesHeader");

//grabs all list items 
const groceryList = document.querySelectorAll("#groceryList li");
//loops through list and adds groceryHeader class to each list item
for (let i=0; i<groceryList.length; i++) {
    //  if (i === 1) {
    // groceryList[i].classList.add("groceriesHeader");
    // (only adds groceriesHeader to class to list item with index of 1)
    }    
}
