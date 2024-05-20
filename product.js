products = [];
const resetProducts = () => {
    products = [{
        id: 0,
        nombreProducto: 'peras',
        precioProducto: 3
    }]
}

const addProduct = (name, price) => {
    if(!name || !price){
        throw new Error ('Tienes que establecer nombre y precio')
    }
    if(products.some(element => element.nombreProducto === name)){
        throw new Error ('Este producto ya existe')
    }
    products.push({id: products.length,
        nombreProducto: name,
        precioProducto: price 
    })
    return `Las ${name} cuestan ${price} €`
}

const removeProduct = (id) => {
    if(products.some(element => element.id !== id)){
        throw new Error ('Este producto no existe')
    }
    const removedItem = products[id];
    products.splice(products[id], 1);
    products.forEach(element => {
        if(id < element.id){
            element.id --
        }
    });

    return `El producto eliminado es ${removedItem.nombreProducto}`
}

const getProducts = () => {
    return products;
}
const getProduct = (id) => {
    if(products.some(element => element.id !== id)){
        throw new Error ('Este producto no existe')
    }
    return `El producto con id ${id} es ${products[id].nombreProducto} y cuesta ${products[id].precioProducto} €`
}

const updateProduct = (id, name, price) => {
    if(products.some(element => element.id !== id)){
        throw new Error ('Este producto no existe')
    }
    products[id].nombreProducto = name;
    products[id].precioProducto = price
    return `El producto con id ${id} ha sido cambiado a ${products[id].nombreProducto} y cuesta ${products[id].precioProducto} €`
}
module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct }