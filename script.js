const keys = {
  bigger: "QWERTYUIOPĞÜASDFGHJKLŞİZXCVBNMÖÇ",
  smaller: "qwertyuıopğüasdfghjklşizxcvbnmöç",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
};
// burası random oluşturmak için
const generaterandom = [
  //m charat de olmadı
  function upperCase() {
    return keys.bigger[Math.floor(Math.random() * keys.bigger.length)];
  },
  function lowerCase() {
    return keys.smaller[Math.floor(Math.random() * keys.smaller.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  },
  // (keySymbol) => {
  //   return keys[keySymbol][Math.floor(Math.random() * keys[keySymbol].length)];
  // }
];

function closeVisibility(alertText) {
  const customalert = document.getElementById("myalert");
  customalert.style.visibility = "visible";
  customalert.innerText = alertText;
  setTimeout(() => {
    customalert.style.visibility = "hidden";
  }, 5000);
}

function returnorigin() {
  var change = document.getElementById("length");
  if (change.value < 6) {
    change.value = 6;
  } else if (change.value > 24) {
    change.value = 24;
  }
}

function createPassword() {
  const length = document.getElementById("length");
  if (Number(length.value) < 6) {
    closeVisibility("you cant enter number smaller than 6");
    return;
  } else if (Number(length.value) > 24) {
    closeVisibility("you cant enter number bigger then 24");
    return;
  }

  //checkboxları kontrol etme
  const upper = document.getElementById("upperCase").checked;
  const lower = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;
  //ilk yaptığım hiçbiri seçilmediğinde error vermediği için çalışmıyordu bunu eklemek zorundayız

  if (upper + lower + number + symbol === 0) {
    //bunu new line a nasıl aktaracağımı anlmadım (alert dışında)
    closeVisibility("En az bir kutuyu işaretlemen lazım");
    return;
  }

  //inner html aşağıda olması gerekiyormuş
  const sifrealanı = document.getElementById("sifrealanı");
  let password = ""; //boş belirledin
  while (length.value > password.length) {
    let eklenecek =
      generaterandom[Math.floor(Math.random() * generaterandom.length)];
    let isChecked = document.getElementById(eklenecek.name).checked;
    if (isChecked) {
      password += eklenecek();
    }
  }
  sifrealanı.innerHTML = password;
}
