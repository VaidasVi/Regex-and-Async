// ! 1. Parašykite kodą su regular expression, kad patikrinti ar stringo pirmas
// ! simbolis yra didžioji raidė

// const someString = "Upe Juoda, o Roze ryza.";
// regExp = /^[A-Z]/;

// console.log(regExp.test(someString));

// ! 2. Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas. Post
// ! code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių. Jei yra
// ! tarpų - post code neteisingas.
// ! Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.

// function postCode(code) {
//   const regex1 = /^[0-9]{3,5}$/;
//   const regex2 = /^[0-9]{3}[a-z]{2}$/i;

//   if (regex1.test(code) || regex2.test(code)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(postCode("123Ba"));

// ! 3. Susikurkite funkciją callingAPI(), kuri nenaudos parametrų. Funkcija
// ! savo viduje turi turėti setTimeout, kuris po 3s išlogintų į consolę, call
// ! failed‘.
// ! Taip pat sukurkite funkciją callingGoodAPI, kuri irgi neturės parametrų ir
// ! nustatys intervalą, kad kas 2s į consolę būtų parašoma‚ call was
// ! successful‘.
// ! Apsirašę funkcijas, po jomis panaudokite žemiau pateiktą kodo
// ! fragmentą.
// ! console.log("Start");
// ! callingAPI();
// ! callingGoodAPI();
// ! console.log("Finish");
// ! Paanalizuokite ir pabandykite sau paaiškinti kaip veikia call stack, web
// ! API, callbackque ir event loop

function callingAPI() {
  setTimeout(() => {
    console.log("call failed");
  }, 3000);
}

function callingGoodAPI() {
  setTimeout(callingGoodAPI, 2000);
  console.log("call was successful");
}

// console.log("Start");
// callingAPI();
// callingGoodAPI();
// console.log("Finish");
