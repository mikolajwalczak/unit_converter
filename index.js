/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputBox = document.getElementById("input-box")
let convertBtn = document.getElementById("convert-btn")
let lengthOutcome = document.getElementById("length-outcome")
let volumeOutcome = document.getElementById("volume-outcome")
let massOutcome = document.getElementById("mass-outcome")

//console.log(inputBox.value)
//console.log(massOutcome.textContent)

convertBtn.addEventListener("click", function () {
    lengthOutcome.innerText = `${inputBox.value} meters = ${(inputBox.value * 3.281).toFixed(3)} feet | ${inputBox.value} feet = ${(inputBox.value / 3.281).toFixed(3)} meters`
    volumeOutcome.innerText = `${inputBox.value} liters = ${(inputBox.value * 0.264).toFixed(3)} gallons | ${inputBox.value} gallons = ${(inputBox.value / 0.264).toFixed(3)} liters`
    massOutcome.innerText = `${inputBox.value} kilos = ${(inputBox.value * 2.204).toFixed(3)} pounds | ${inputBox.value} pounds = ${(inputBox.value / 2.204).toFixed(3)} 2.204`
})
