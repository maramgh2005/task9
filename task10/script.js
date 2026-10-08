function filter_email(email) {
    if (email.toLowerCase().includes("test")) {

        return false
    } else {
        return true
    }
}




let users = Number(prompt("Enter the number of users : "))
let array = []




for (let i = 0; i < users; i++) {
    let person = {
        name: prompt("Enter the name of users : "),
        email: prompt("Enter the email of users : ")
    }


    let result = filter_email(person.email)
    if (result == true) {
        array.push(person)
        alert("  The email of " + person.name + " is valid" + "  \n  " + person.email)
    } else {
        alert("  The email " + person.email + " is not valid  ")
    }


}




