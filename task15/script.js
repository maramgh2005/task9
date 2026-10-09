const array = ["رقم", "تواصل", "واتساب", "تليجرام", "رقمك", "نتواصل"]
let userMessage = prompt("ادخل الرسالة المراد ادخالها ")
const notvalidword = array.filter(function (word) {

    return userMessage.includes(word)
})

if (notvalidword.length >= 2) {
    alert("خطأ! هذه الجملة غير مرغوب فيها داخل المنصة.");
} else {
    alert("تم قبول الرسالة.");
}