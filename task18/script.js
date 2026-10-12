let hours = Number(prompt("Enter the hours :"))
let hourlyRate = Number(prompt("Enter the hourlyRate :"))

alert(calc(hours, hourlyRate))


function calc(hours, hourlyRate) {
    let hoursperweek = hours * hourlyRate * 6
    let hourspermounth = hoursperweek * 4
    if (hourlyRate <= 30) {
        hourspermounth = hourspermounth - (hourspermounth * 0.4)
        hoursperweek = hoursperweek - (hoursperweek * 0.4)
        return hourspermounth + "  " + hoursperweek
    } else {
        hourspermounth = hourspermounth - (hourspermounth * 0.15)
        hoursperweek = hoursperweek - (hoursperweek * 0.15)
        return hourspermounth + "  " + hoursperweek
    }
}