let graves = [
    { id: 1, name: "أحمد محمد", birthDate: "1950-05-10", deathDate: "2015-08-20", section: "A", graveNumber: 1 },
    { id: 2, name: "محمود حسن", birthDate: "1980-03-15", deathDate: "2020-01-10", section: "A", graveNumber: 3 },
    { id: 3, name: "خالد سعيد", birthDate: "1970-11-20", deathDate: "2015-12-05", section: "B", graveNumber: 2 },
    { id: 4, name: "عمر فاروق", birthDate: "1965-02-14", deathDate: "2018-06-11", section: "A", graveNumber: 2 },
    { id: 5, name: "فاطمة علي", birthDate: "1965-09-25", deathDate: "2015-04-30", section: "B", graveNumber: 1 },
    { id: 6, name: "يوسف إبراهيم", birthDate: "1990-07-01", deathDate: "2022-10-12", section: "C", graveNumber: 1 },
    { id: 7, name: "مريم عبد الله", birthDate: "1955-12-03", deathDate: "2019-03-22", section: "C", graveNumber: 3 },
    { id: 8, name: "حسين علي", birthDate: "1985-04-18", deathDate: "2021-07-19", section: "B", graveNumber: 4 },
    { id: 9, name: "زينب أحمد", birthDate: "1960-08-30", deathDate: "2015-11-14", section: "A", graveNumber: 4 },
    { id: 10, name: "إبراهيم خليل", birthDate: "1975-01-05", deathDate: "2023-09-08", section: "C", graveNumber: 2 }
];

let visitors = [
    { graveId: 1, visitorName: "علي أحمد", visitDate: "2023-05-01" },
    { graveId: 1, visitorName: "سارة أحمد", visitDate: "2024-06-12" },
    { graveId: 2, visitorName: "محمد خالد", visitDate: "2023-02-15" },
    { graveId: 3, visitorName: "منى سعيد", visitDate: "2023-08-20" },
    { graveId: 1, visitorName: "خالد محمود", visitDate: "2023-10-05" },
    { graveId: 5, visitorName: "أحمد علي", visitDate: "2024-01-10" },
    { graveId: 2, visitorName: "منى حسن", visitDate: "2024-03-04" },
    { graveId: 6, visitorName: "رامي يوسف", visitDate: "2023-11-11" },
    { graveId: 1, visitorName: "هاني محمد", visitDate: "2024-02-22" },
    { graveId: 4, visitorName: "لجين عمر", visitDate: "2023-07-18" }
];
//حساب العمر لكل الاموات  

let age = function (birthDate, deathDate) {
    birthDate = birthDate.split("-")[0]
    deathDate = deathDate.split("-")[0]
    return Number(deathDate) - Number(birthDate)
}

const ages = graves.map((grave) => {
    return age(grave.birthDate, grave.deathDate)
})

console.log(ages);


///حساب العمر لكل الاموات  




// حساب القبور الفارغة 

let emptyGraves = function (section) {
    let one = []
    graves.forEach(function (grave) {
        if (grave.section === section) {
            one.push(grave.graveNumber)
        }
    })
    let two = []
    for (let i = 1; i < 11; i++) {
        if (!one.includes(i))
            two.push(i)
    }
    console.log(two)
}

emptyGraves("B")
// حساب القبور الفارغة 





//   المتوفيين في نفس السنة 

let year1 = function (year) {
    let person = graves.filter(function (grave) {
        return Number(grave.deathDate.split("-")[0]) === year
    })
    return person
}


// let result = year(2015);
console.log(year1(2015));


//  المتوفيين في نفس السنة







// الاكتر زيارة 




let array = function (id) {

    let o = visitors.filter(function (visitor) {

        return visitor.graveId == id

    })
    return o
}



console.log(array(3))



// الدالة لادخال تاريخين 


let gravesBetweenDates = function (startDate, endDate) {
    let results = graves.filter(function (grave) {
        return grave.deathDate >= startDate && grave.deathDate <= endDate;
    });
    return results;
};






















