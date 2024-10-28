// Setup lesson

// const now = new Date();
// const date = new Date(`2034, 03, 12 05:30:09`)
// const year = date.getFullYear()
// const month = date.getMonth()
// const day = date.getDate()
// const hours = date.getHours()
// const minute = date.getMinutes()
// const second = date.getSeconds()
// date.setFullYear(2012)

// const time = date.getTime()

//Show date
// const formattedDate = date.toLocaleDateString()

//Show hours
// const formattedTime = date.toLocaleTimeString()

// Show both
// const formattedDate02 = date.toLocaleString()

// console.log(date)
// console.log(now)
// console.log(year)
// console.log(month)
// console.log(day)
// console.log(hours)
// console.log(minute)
// console.log(second)
// console.log(time)
// console.log(formattedDate)
// console.log(formattedTime)
// console.log(formattedDate02)


//////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercice 1 


// function calculateAge (birthDate) {
//     const now = new Date();
//     const birth = new Date(birthDate);
//     let age = now.getFullYear() - birth.getFullYear();
//     let month = now.getMonth() - birth.getMonth();

//     if (month < 0) {
//         age--;
//     } else if (month === 0 && now.getDate() < birth.getDate()) {
//         age--;
//     }
//     return age;
// }



// const birthDate = '1997-02-06'
// console.log(calculateAge(birthDate));

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 2 


// Ne marche pas car prend n'importe quel format de date. Je penser transformer en chaine de caractères et décomposer year/month/day pour vérifier 
// Je passe au suivant et je reviens plus tard sur cet exercice

// function isValidDate(dateString) {
//     const parts = dateString.split("-");
//     const year = parseInt(parts[0], 10);
//     const month = parseInt(parts[1], 10);
//     const day = parseInt(parts[2], 10);

//     if (month < 1 || month > 12 || day < 1 || day > 31) {
//         return false
//     }
//     if (month === 4 | month === 6 | month === 9 || month === 11 && day === 31) {
//         return false
//     }
//     if (month ===2) {
//         //leapYear: multiple de 4 ET multiple de 100 ou 400 
//         const leapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
//         if (day > 29 || (day === 29 && !leapYear)) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isValidDate('2023-02-29'));



//////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 3 


// function addOneWeek() {
//     const now = new Date();
//     const dateSet = new Date(now);
//     dateSet.setDate(now.getDate() + 7);

//     return dateSet;
// } 

// console.log(addOneWeek());

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 4

// function daysUntil (targetDate) {
//     const now = new Date();
//     const target = new Date(targetDate);
    
//     const oneDayMilliseconds = 24 * 60 * 60 * 1000;
//     const daysUntil = Math.round((target-now) / oneDayMilliseconds);

//     return daysUntil;
// }


// console.log(daysUntil('2024-12-12'));

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercice 5 

// const now = new Date();
// const formattedDate = now.toLocaleDateString('en-EN', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     weekday: 'long',
// });

// console.log(formattedDate);