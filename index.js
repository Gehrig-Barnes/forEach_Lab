const numbers = [1,2,3,4,5]

// numbers.forEach((num, index, array) => {
//     num += 1
//     array[index] = num;
// })

// console.log(numbers)

const addOne = () => {
  let newArray = []
    //your code here.
    numbers.forEach((num) => {
        newArray.push(num += 1)
    })
    return newArray
}

const subtractOne = () => {
    let newArray = []
    numbers.forEach((num) => {
        newArray.push(num -= 1)
    })
    return newArray
}







