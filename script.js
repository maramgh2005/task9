let number = Number(prompt("Enter the number of products:"))
let discountProducts = 0
let array = []
for (let i = 0; i < number; i++) {

    let product = {
        name: prompt("Enter the name of the product:"),
        price: Number(prompt("Enter the price:")),
        quantity: Number(prompt("Enter the quantity:"))
    }
    array.push(product)
}

array.forEach(function (product) {
    if (product.quantity > 10) {
        product.price = product.price * 0.90
        discountProducts++;
    }

})
let result = 0
array.forEach(function (product) {

    result += product.price * product.quantity
    if (result >= 500) {

        product.price = product.price * 0.80
    }
})
alert(" The Total price : " + result)