const meals = [
    { name: "شاورما", price: 15 },
    { name: "كالزوني", price: 25 },
    { name: "برجر", price: 20 },
    { name: "بيتزا", price: 30 },
    { name: "بطاطس", price: 7 }
]

let price = Number(prompt("ادخل المبلغ المتاح"))
cheakprice(price)
function cheakprice(price) {
    meals.forEach(function (meal) {
        if (meal.price <= price) {
            alert("الوجبة المتاحة " + meal.name)
        }

    })


}