<a class="btn-floating pulse"><i class="material-icons">menu</i></a>



// 1 -- grab the HTML element

var button = document.getElementById("myBtn"); 

var pElement = document.getElementById("p-tag"); 

// 2 -- declaring what I want to happen to those elements


function changeCSS() {
    button.style.color = "red"; 
    button.style.backgroundColor = "red"; 
    
}


function normalCSS() {
    button.style.color = "black"; 
}

// 3 connecting our HTML and JS via an eventlistener

button.addEventListener("mouseover", changeCSS);  

button.addEventListener("mouseout", normalCSS);  