//  let confirmel = document.querySelector(".confirm")
//  let errorel = document.querySelector(".error-el")
//  let errornumber = document.querySelector(".error-number")
//  let errormm = document.querySelector(".error-mm")
//  let errorcvc = document.querySelector(".error-cvc")
//  let message = document.querySelector(".message")
//  let container = document.querySelector(".container")
//  let holdernum = document.querySelector(".holder-num")
//  let inputnumber = document.querySelector(".input-number")
//  let cadname = document.querySelector(".cad-name")
//  let num1 = document.querySelector(".num1")
//  let num2 = document.querySelector(".num2")
//  let holdername = document.querySelector(".holder-name")
//  let holdermon = document.querySelector(".holder-mon")
//  let holderyear = document.querySelector(".holder-year")
//  let holdercvc = document.querySelector(".holder-cvc")

//  confirmel.addEventListener("click", function(){
//     if(holdername.value === ""){
//         errorel.style.display = "block"
//     }
//      if(holdernum.value === ""){
//         errornumber.style.display = "block"
//     }
//      if(holdermon.value === ""){
//         errormm.style.display = "block"
//     }
//      if(holdercvc.value === ""){
//         errorcvc.style.display = "block"
//     }else{
//         container.style.display = "none"
//         message.style.display ="block"
//     }
//  })
// holdernum.addEventListener("input", (e) => {
//     e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
//   inputnumber.textContent = holdernum.value
// })
// holdername.addEventListener("input", (e) => {
 
//   cadname.textContent = holdername.value
// })

// holdermon.addEventListener("input", (e) => {
 
//     num1.textContent = holdermon.value
//   })
  

//   holderyear.addEventListener("input", (e) => {
 
//     num2.textContent = holderyear.value
//   })
  