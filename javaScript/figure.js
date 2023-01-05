let minus = document.querySelector('.bottom-list__minus')
let plus = document.querySelector('.bottom-list__plus')
let inp = document.querySelector('.bottom-list__inp')
let count = 1
function countMinus(){
    if(inp.value == 0){
        return count
    }
    count -= 1
    inp.value = count
}
function countPlus(){
    count += 1
    inp.value = count
}

// windowImg.forEach(item => {
//     item.addEventListener('click', function(e) {
//         windowImg.forEach(e => e.classList.remove('figure__wincollection--selection'))
//         item.classList.add('figure__wincollection--selection')
//     })
// });
// if(inp.value.includes('-')){
//     inp.setAttribute('style', 'border: red')
// }

