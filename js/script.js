// Numbers
const numbers = document.querySelectorAll('.number')
let displayHoras = document.querySelector('.horas')
let displayMinutos = document.querySelector('.minutos')
let displaySegundos = document.querySelector('.segundos')
let displayMilesimos = document.querySelector('.milesimos')
let horas = 0
let minutos = 0
let segundos = 0
let milesimos = 0
let interval

let valueHora 
let valueMinuto
let valueSegundo
let valueMilesimo



// Buttons action
const btnStart = document.querySelector('#btnStart')
const btnStop = document.querySelector('#btnStop')
const btnReset = document.querySelector('#btnReset')


btnStart.addEventListener("click", () => {

  const startTimer = () => {
    milesimos++

    if (milesimos < 10) {
      displayMilesimos.innerHTML = "0" + milesimos
    }
    else {
      displayMilesimos.innerHTML = milesimos
    }

    if (milesimos > 99) {
      segundos++
      displaySegundos.innerHTML = segundos
      milesimos = 0
      displayMilesimos.innerHTML = "0" + milesimos
    }

    if (segundos < 10) {
      displaySegundos.innerHTML = "0" + segundos
    }
    else {
      displaySegundos.innerHTML = segundos
    }

    if (segundos > 60) {
      minutos++
      displayMinutos.innerHTML = minutos
      segundos = 0
    }
    if (minutos <= 9) {
      displayMinutos.innerHTML = '0' + minutos
    }
    else {
      displayMinutos.innerHTML = minutos
    }

    if (minutos > 60) {
      horas++
      displayHoras.innerHTML = horas
      minutos = 0
    }

    if (horas <= 9) {
      displayHoras.innerHTML = '0' + horas
    }
    else {
      displayHoras.innerHTML = horas
    }

  }
  clearInterval(interval)
  interval = setInterval(startTimer, 10)
  console.log("Start")
})

btnStop.addEventListener("click", () => {
  clearInterval(interval)
  console.log("Stop")
})

btnReset.addEventListener("click", () => {
  horas = 0
  minutos = 0
  segundos = 0
  milesimos = 0
})






// Teste
const timer = document.querySelector('#timer')

timer.addEventListener('click', (e) => {
  e.preventDefault()
  
  const inputHoras = document.querySelector('#inputHoras')
  const inputMinutos = document.querySelector('#inputMinutos')
  const inputSegundos = document.querySelector('#inputSegundos')
  const inputMilesimos = document.querySelector('#inputMilesimos')

  valueHora = inputHoras.value
  valueMinuto = inputMinutos.value
  valueSegundo = inputSegundos.value
  valueMilesimo = inputMilesimos.value


  if (valueHora == horas && valueMinuto == minutos && valueSegundo == segundos && valueMilesimo == milesimos) {
    console.log("iguais")
  }
  else {

  }



  console.log(valueHora)
  console.log(valueMinuto)
  console.log(valueSegundo)
  console.log(valueMilesimo)
  
})