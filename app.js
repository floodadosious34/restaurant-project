//On menu.html page load fetch request is made to local host server for menu items
window.onload = function getData() {
    let menuContainer = document.getElementById('menu')
    let gridContainer = '';
    
    fetch(`http://localhost:3000/`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            data.forEach(object => {
                //capture the specific params from the menu object
                let title = object.title
                let description = object.description
                let price = object.price
                //check if the object has a param thats called drinks. Add the drinks array items to the page.
                if(object.hasOwnProperty('drinks')) {
                    console.log(object.drinks)
                    gridContainer += `
                    <div class="menuStyle">
                        <h2>${title}</h2>
                        <li>${description}</li>
                        <li>${price}</li>
                        <li>${object.drinks[0]}</li>
                        <li>${object.drinks[1]}</li>
                        <li>${object.drinks[2]}</li>
                    </div>
                `
                } else {
                    gridContainer += `
                    <div class="menuStyle">
                        <h2>${title}</h2>
                        <li>${description}</li>
                        <li>${price}</li>
                    </div>
                `
                }
            });
            //append created tags to the menu container on the web page.
            menuContainer.innerHTML = gridContainer
     })
}