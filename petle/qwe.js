//for (let i = 0; i < 10; i++) {
//    console.log("wyświetlenie" + i);
//}

//while (2 < 1) {
//   console.log("działa");
//}

//let number = 0;
//while (number < 10) {
//    number++;
//    console.log(number);
//}

//let money = 50;
//while (money >= 8) {
//    console.log("mam jeszcze" + money + "złotych. ///To pijemy piwko!");
//   money -= 8;
//}
//alert(`za ${money} złote, już nie kupię ;cc`)

//let study = "nie, wyrzucili mnie"

//do {
//console.log('Ide do szkoly')
//} while (study === true);


//for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 10; j++) {
//       console.log(`zmienna i czyli ${i} 
//pomnożona przez zmienną j czyli ${j} da wynik ${i * j}`);
//   }
//}

//const userAge = [19, 18, 15, 45, 34, 33, 25];

//for (let i = 0; i < userAge.length; i++) {
//   console.log(`wiek użytkownika numer ${i} to ${userAge[i]}`);
//}
/*
const userDateBirth = [2000, 1992, 1932, 1980, 1981, 1971, 2009];
const currentYear = 2018;

for (let i = 0; i < userDateBirth.length; i++) {
    const userAge = currentYear - userDateBirth[i];
    console.log(userAge);
    console.log(`wiek użytkownika numer ${i + 1} to 
    ${userAge}`)
}
*/
const guest = ["Dominiko Grosz", "Nine", "Do-mi-ni-czi", "dominika", "bartosz"]

for (let i = 0; i < guest.length; i++) {
    if (guest[i] === "dominika") {
        console.log("Przepraszamy jesteś z marwałdu i z tego wzgledu przyjdzie Agatii <3")
    } else if (guest[i] === "bartosz") {
        console.log("Ojej Bartuś , ty jesteś slodki , zapraszamy cię , wszystkie kobietki jaz są rozpalone");
    } else {
        console.log("witamy Pani " + guest[i] + ", zapraszamy!");
    }
}