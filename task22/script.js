const tripsPerDay = 15
const ticketPrice = 3
const freeRidersPercentage = 0.15
const breakdownPercentage = 0.40
const fuelPercentage = 0.30
const workingDaysPerWeek = 6
const maxPassengers = Math.floor(25 + Math.random() * (31 - 25))


// حساب الربح الاسبوعي 



let calculateDailyIncome = function () {

    let totalprice = tripsPerDay * maxPassengers * ticketPrice
    let lostRevenue = maxPassengers * freeRidersPercentage * ticketPrice * tripsPerDay
    return totalprice - lostRevenue
}

console.log("صافي الدخل اليومي:", calculateDailyIncome());




// حساب الربح الاسبوعي


let calculateWeeklyProfit = function () {
    let weeklyTotal = 0
    for (let i = 0; i < workingDaysPerWeek; i++) {
        weeklyTotal += calculateDailyIncome()
    }
    return weeklyTotal
}


console.log(calculateWeeklyProfit())



//  حساب الربح الشهري 


let calculateMonthlyProfit = function () {
    let MonthlyTotal = 0
    for (let i = 0; i < 4; i++) {
        MonthlyTotal += calculateWeeklyProfit()
    }
    return MonthlyTotal
}


console.log(calculateMonthlyProfit())


// حساب الربح  الشهري  مع الاعطال 



let netProfit = calculateMonthlyProfit() - calculateMonthlyProfit() * (breakdownPercentage + fuelPercentage)
console.log(netProfit)




//  عطل طارئ 

let calculateFinalProfitWithDrop = function (extraCost) {
    let finalProfit = netProfit - extraCost;
    return finalProfit;
};
let extraCost = 150;
console.log("صافي الربح النهائي بعد خصم العطل الطارئ:", calculateFinalProfitWithDrop(extraCost));