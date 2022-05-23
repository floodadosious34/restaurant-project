window.onload = function getData() {
    let test = document.getElementById('test')
    // let description = document.getElementById('descript')
    // let price = document.getElementById('price')
    let gridContainer = '';
    
    fetch(`http://localhost:3000/`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            data.forEach(object => {
                // name.classList += " test"
                let title = object.title
                let description = object.description
                let price = object.price
                gridContainer += `
                    <div class="test">
                        <h2>${title}</h2>
                        <li>${description}</li>
                        <li>${price}</li>
                    </div>
                `
            });
            test.innerHTML = gridContainer
            // name.innerHTML = data.items[0].title
            // description.innerHTML = data.items[0].description
            // price.innerHTML = data.items[0].price
     })
}