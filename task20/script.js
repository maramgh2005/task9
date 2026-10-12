let input = prompt("Enter the name :")
function check(input) {

    input = input.replace(/[^\w\s]/gi, " ")
    input = input.replace(/\s+/g, ' ').trim()
    return input
}


alert(check(input))