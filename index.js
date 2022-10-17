//
// const array = Array(100).fill(1).map((n, i) => n + i)

const addOne = (numArr) => {
    numArr.forEach((num) => {
        console.log(num += 1 )
    })
}

const subtractOne = (numArr) => {
    numArr.forEach((num) => {
        console.log(num -= 1 )
    })
}

const fizzBuzz = (arr) => {
    arr.forEach((el) => {
        if(el % 3 === 0 && el % 5 === 0){
            console.log("FizzBuzz")
        }
        else if(el % 3 === 0 ){
            console.log("Fizz")
        }
        else if(el % 5 === 0){
            console.log("Buzz")
        }
        else {
            console.log(el)
        }
    })
}






