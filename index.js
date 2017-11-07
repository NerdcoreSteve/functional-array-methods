console.log([1, 2, 3].concat([4, 5, 6]))
/*
prints
[1, 2, 3, 4, 5, 6]
*/

console.log(
    [1, 2, 3]
        .concat([4, 5, 6])
        .concat([7, 8, 9])
        .concat([10, 11, 12]))
/*
prints
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
*/

const
    arr = [1, 2, 3, 4, 5],
    doubleArr = arr => {
        var newArr = []
        for(var i = 0; i < arr.length; i++) {
            newArr.push(2 * arr[i])
        }
        return newArr
    }

console.log(doubleArr(arr))
/*
prints [2, 4, 6, 8, 10]
*/

const
    arr2 = [1, 2, 3, 4, 5],
    doubleArr2 = arr => arr.map(x => 2 * x)

console.log(doubleArr2(arr))
/*
prints [2, 4, 6, 8, 10]
*/

console.log([1, 2, 3, 4, 5].map(x => 2 * x))
/*
prints [2, 4, 6, 8, 10]
*/

console.log(
    [1, 2, 3, 4, 5]
        .map(x => 2 * x)
        .map(x => x + 2)
        .map(x => x / 4))
/*
prints [1, 1.5, 2, 2.5, 3]
*/

console.log(
    "pirates of the caribbean"
        .split(' ')
        .map(s => s.split(''))
        .map(([first, ...rest]) => [first.toUpperCase()].concat(rest))
        .map(arr => arr.join(''))
        .join(' '))
/*
prints
Pirates Of The Caribbean
*/
