let name = document.querySelector("#myName");

function showTime() {
    const date = new Date();
    const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();

    document.querySelector(".clock").innerHTML = `${hours} ${minutes} ${seconds} ${days[day - 1]}`;
    setTimeout(showTime, 1000);
}
showTime();


let getName;
do {
    getName = prompt("Lütfen isminizi giriniz", "")
} while (getName == "" || getName == null)
name.innerHTML = getName