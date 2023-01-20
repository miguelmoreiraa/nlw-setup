const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

// Events
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  // dayExists === true. Eu fiz a condional desse jeito.
  // mas a forma que podemos fazer também é não comparar com TRUE...
  // se for false ele ja cai fora do condição, pois a função por default
  // é TRUE.
  if (dayExists) {
    alert("Esse dia já está registrado 🚫")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
