fetch("recipes.json")
.then(response => response.json())
.then(data => {
    
    const alltext = data
    const recipenames = Object.keys(alltext);  //recipenames is an array with the keys
    
    var list = document.createElement('ul'); //create an unordered list
    recipenames.forEach(function (recipename) {  //create a list item for each recipe_name and append it to the list
        var li = document.createElement('li');
        li.textContent = recipename;
        list.appendChild(li);

        //Inject into the DOM
        // var namesList = document.querySelector("#namesList")
        // namesList.appendChild(list)

        // // //Use querySelector to change href
        // document.getElementById("namesList").href = recipename
        var myh3 = document.getElementById("namesList");
        var aTag = document.createElement('a');
        aTag.setAttribute('href', "#" + recipename);
        aTag.innerText = recipename +" \n";
        myh3.appendChild(aTag);
    })

    })
