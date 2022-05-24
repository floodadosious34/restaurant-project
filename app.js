window.onload = function getData() {
    let menuContainer = document.getElementById('menu')
    let gridContainer = '';
    
    fetch(`http://localhost:3000/`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            data.forEach(object => {
                let title = object.title
                let description = object.description
                let price = object.price
                
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
            menuContainer.innerHTML = gridContainer
     })
}