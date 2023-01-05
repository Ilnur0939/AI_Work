let carousel = document.querySelectorAll('.figure__list');
let left = document.querySelector('#left')
let right = document.querySelector('#right')
let selected = document.querySelectorAll('.figure__wincollection')
let selectedImg = document.querySelectorAll('.figure__wincollectionimg')
// let countNum = 0
selectedImg.forEach(itema => {
    itema.addEventListener('click', () => {
        selectedImg.forEach(d => d.classList.remove('figure__wincollection--selection'))
        itema.classList.add('figure__wincollection--selection')
    })
})
selected.forEach(item =>{
    item.addEventListener('click', function(){
        selected.forEach(e => e.classList.remove('figure__wincollection--selection'))
        item.classList.add('figure__wincollection--selection')
        carousel.forEach(itemBox => {
            // if(item.classList == 'figure__list'){
            //     let itemElement = item.querySelectorAll('.figure__firstbox')
            //     countNum = itemElement.length
            // }

            if(item.id == 'first'){
                itemBox.classList.add('figure__list--none')

                carousel[0].classList.remove('figure__list--none')
            }
            else if(item.id == 'second'){
                itemBox.classList.add('figure__list--none')
                carousel[1].classList.remove('figure__list--none')
            }
            render()
        })
    })

})
let idx = 0

let countNum = 0

function render(){
carousel.forEach(item => {
    if(item.classList == 'figure__list'){
        let itemElement = item.querySelectorAll('.figure__firstbox')
        countNum = itemElement.length
    }
});
}

// console.log(countNum);
function carouselList(){
    // console.log(countNum);
    if(idx > countNum - 1){
        idx = 0
    }
    else if(idx < 0){
        idx = countNum -1
    }
    carousel.forEach(item => {
        
        item.setAttribute('style', `transform:translate(${-idx * 390}px)`)
    });
}
right.addEventListener('click', function(){
    idx++
    carouselList()
    console.log('bosildi');
})

left.addEventListener('click', function change(){
    idx--
    carouselList()
})

render()