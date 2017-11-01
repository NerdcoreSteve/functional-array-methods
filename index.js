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
