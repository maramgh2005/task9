let array = ["حجر", "مقص", "ورقة"]
let user = prompt("ادخل حجر او ورقة او مقص ")
if (!array.includes(user.trim())) {
    alert("ادخال خاطئ")
} else {
    let res = array[Math.floor(Math.random() * 3)];
    if ((res === 'حجر' && user === 'مقص') || (res === 'ورقة' && user === 'حجر') || (res === 'مقص' && user === 'ورقة')) {

        alert("الجهاز هو الفائز!")
    } else {
        alert("أنت الفائز! 🎉")
    }
}