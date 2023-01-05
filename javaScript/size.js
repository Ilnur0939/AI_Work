let btn = document.querySelector('.win-btn')

btn.addEventListener('click', () => {
    btn.classList.toggle('btn-success')
})

let inpHeight = document.querySelector("#inp-h")
let inpWidth = document.querySelector("#inp-w")
let winBox = document.querySelector(".win-box")
let winSide = document.querySelectorAll(".list-item-side")
let winMiddle = document.querySelector(".list-item-center")
let winTop = document.querySelectorAll(".list-item-top")
let colorBox = document.querySelectorAll(".color-win")

let wid = 241
let hei = 226

function func(){
    if(inpHeight.value == '' && inpWidth.value == ''){
        return
    }
    winSide.forEach(item => {
        item.setAttribute("style" , `width: ${(+inpWidth.value-15)*0.32}px; height: ${(+inpHeight.value-10) * 0.66}px`)
    })
    winTop.forEach(item => {
        item.setAttribute("style", `width: ${(+inpWidth.value-18)*0.5}px; height: ${(+inpHeight.value-20) * 0.33}px`)
    })
    winMiddle.setAttribute("style" , `width: ${(+inpWidth.value-15)*0.34}px; height: ${(+inpHeight.value-10) * 0.66}px`)

    winBox.setAttribute("style", `height: ${inpHeight.value}px; width: ${inpWidth.value}px`)

}

