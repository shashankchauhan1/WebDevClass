var x = 20
var productsList = [];
// any function passed as a argument to another function is called callback function

const foo = (arg1) => {
    console.log(arg1);
}

function loadProducts(renderProductListsWithData) {     // this becomes a callback function
    setTimeout(() => {
        productsList = productsListFromServer;
        renderProductListsWithData(productsList);

    }, 2000);
}

function renderProductListsWithData(productsList) {
    if (productsList.length === 0) {
        document.getElementById("data").innerHTML="Nothing is there !"
        return;
    }
    
    document.getElementById("data").innerHTML = 
    `
    <table>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
        </thead>
            
        <tbody>
            ${productsList.map((product) => {
            return `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                </tr>
                `
        })}
        </tbody>

    </table>
    `
}

const renderProducts = () => {
    // fetch the date from setver
    // convert the data into html and render it in UI
    document.getElementById("data").innerHTML="Loading Data ....";
    loadProducts(renderProductListsWithData);
    
}


renderProducts();

