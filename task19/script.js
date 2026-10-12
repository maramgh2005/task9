function checkNames(...name) {
    if (name.length > 10) {
        alert(" must be under 10 names ")
        return false
    }
    let longest = name[0]
    for (let i = 0; i < name.length; i++) {

        if (name[i].length > longest.length) {
            longest = name[i]
        }

    }
    return longest
}