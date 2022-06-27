let recipejson
let recipe_name_list 

fetch("recipes.json")
.then(response => response.json())
.then(data => {
    
    //const recipenames = Object.keys(data);  //recipenames is an array/list
    
    data.forEach(function (elem) {console.log(elem.Ingredients)})
    data.forEach(function (elem) {console.log(elem.Steps)})

    document.getElementById("recipeNumb").innerHTML = `<h3>${data.length} Recipes</h3>`  //This puts down data.length above Left Box 1

    var list = document.createElement('ul'); //create an unordered list
    data.forEach(function (r) {  //create a list item for each recipe_name and append it to the list
        var li = document.createElement('li');
        li.textContent = r.Name;
        list.appendChild(li);
        var myh3 = document.getElementById("namesList");
        var aTag = document.createElement('a');
        aTag.setAttribute('href', "#" + r.Name);
        aTag.innerText = r.Name +" \n";
        myh3.appendChild(aTag);

    


// document.getElementById("ingredientsList").innerHTML = `

// ${data[IP Kimchi Stew]}

// <p class="footer">Footer</p>
// `
    
    
    })


    })

