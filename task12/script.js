let number = Number(prompt("Enter the number :"))

alert(" The  factorial of " + number + " is " + factorial(number))
function factorial(num) {
    if (num == 0 || num == 1) {
        return 1
    }
    return num * factorial(num - 1)
}