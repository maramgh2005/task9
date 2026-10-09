const usersList = [
    { name: "أحمد", weight: 80 },
    { name: "محمد", weight: 90 },
    { name: "سارة", weight: 70 },
    { name: "مرام", weight: 70 },
    { name: "منة", weight: 70 },
    { name: "خالد", weight: 70 },
];


let total = 0
usersList.forEach(function (user) {

    total += user.weight

})



function cheakweight(usersList) {
    if (usersList.length > 10 || total >= 1000) {
        alert("حمولة زيادة ⚠️")
    } else {
        alert("✅ الحمولة مسموح بها.")
    }
}


cheakweight(usersList)