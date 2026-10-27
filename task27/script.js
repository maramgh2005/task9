let form = document.querySelector("form")
let count = 0
let total = 0




form.onsubmit = function (e) {
    e.preventDefault()


    let productNameInput = document.querySelector("[name=product]")
    let productPriceInput = document.querySelector("[name=price]")
    let body = document.querySelector("table tbody")

    if (productNameInput.value.length == 0 || productPriceInput.value.length == 0) {


        Swal.fire({
            title: "error",
            text: "You clicked the button!",
            icon: "error"
        });



    } else {



        count++
        total += Number(productPriceInput.value)
        let item = `
     <tr class="text-slate-800 text-center ">
                <td class="border border-gray-300">${count}</td>
                <td class="border border-gray-300">${productNameInput.value}</td>
                <td class="border border-gray-300"> ${productPriceInput.value}</td>
             <td class="border border-gray-300" >${total}</td>
            
            </tr> 
            `

        body.innerHTML += item

        productNameInput.value = ""
        productPriceInput.value = ""



    }

}


// ..........................................................




let table = document.querySelector("table")

let Code = document.querySelector("[name=code]")

let apply_btn = document.querySelector("[name=apply]")
function Generate() {
    Code.hidden = false
    table.hidden = false
    apply_btn.hidden = false
}





// ....................................................................





function applyCoupon() {
    if (Code.value === "ABC123") {

        Swal.fire({
            title: "Success",
            text: "20% discount applied!",
            icon: "success"
        })

        total = total * 0.8

        let rows = document.querySelectorAll("table tbody tr")

        let lastRow = rows[rows.length - 1]

        lastRow.children[3].textContent = total

    } else {
        Swal.fire({
            title: "Error",
            text: "Invalid coupon code!",
            icon: "error"
        })
    }
}







// .....................................................................


function changePrices() {
    let rows2 = document.querySelectorAll("table tbody tr")

    rows2.forEach(function (row) {
        row.children[2].textContent =
            Number(row.children[2].textContent) * 1.5
    })
    console.log("Done!")
}


// .........................................................................