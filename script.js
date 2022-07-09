const btn = document.querySelector(".btn")
function getChar(num, char) {
  if (document.querySelector("input[name=" + num + "]").checked) {
    return char
  }
}
btn.addEventListener("click", e => {


  if (!document.querySelector("input[name=en]").checked && !document.querySelector("input[name=num]").checked && !document.querySelector("input[name=sym]").checked) {
    return
  }

  let password = ""
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let number = "0123456789"
  let symbol = "!@#$%^&*+="

  password += getChar("en", alphabet)
  password += getChar("num", number)
  password += getChar("sym", symbol)


  let result = ""
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * password.length)
    result += password[num]
  }
  console.log(result)
  document.querySelector(".result").innerHTML = result
})