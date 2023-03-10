const grid = document.getElementById('dom')
for (let i = 1; i <= 100; i++){
    let result
    if (i % 3 === 0 && i % 5 === 0){
        result = ('fizzbuzz')
    } else if(i % 5 === 0) {
        result = ('buzz')
    } else if (i % 3 === 0){
        result = ('fizz')
    } else {
        result = i
    }

    grid.innerHTML += `<div>${result}</div>`
}