const num = Math.floor(Math.random() * 50) + 1
let number = null

while (num != number) {

    number = Number(prompt("Enter the number:"))

    if (number > num) {
        alert("اقل")
    } else if (number < num) {
        alert("اكتر")
    }
}

alert("صح! 🎉")