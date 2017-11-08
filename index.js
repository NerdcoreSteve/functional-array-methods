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

console.log(
    [1, 2, 3, 4, 5, 6]
        .filter(x => x % 2 === 0))
/*
prints
[ 2, 4, 6 ]
*/

console.log(
    [{name: 'bob'},
     {name: 'anonymous'},
     {name: 'jane'},
     {name: 'anonymous'},
     {name: 'jonjacobjingleheimerschmidt'}]
        .filter(user => user.name !== 'anonymous'))
/*
prints
[ { name: 'bob' },
  { name: 'jane' },
  { name: 'jonjacobjingleheimerschmidt' } ]
*/

console.log(
    [1, 2, 3, 4, 5]
        .reduce(
            (acc, x) => acc + x,
            0))
/*
prints
15
*/

const
    map = (list, f) =>
        list.reduce((acc, x) => acc.concat([f(x)]), [])

console.log(map([1, 2, 3], x => x * 2))
/*
prints
[ 2, 4, 6 ]
*/

const
    filter = (list, f) =>
        list.reduce(
            (acc, x) => f(x) ? acc.concat([x]) : acc,
            [])

console.log(filter([1, 2, 3, 4], x => x % 2 === 0))
/*
prints
[ 2, 4 ]
*/

const
    getResults = () => [
            {
                results: [
                    {
                        name: 'joe',
                        occupation: 'space whale cleaner',
                    }
                ],
            },
            {
                results: [
                    {
                        name: 'jane',
                        occupation: 'interdimensional detective',
                    }
                ],
            },
            {
                results: [
                    {
                        name: 'strongbad',
                        occupation: 'space whale cleaner',
                    }
                ],
            },
            {
                results: [
                ],
            },
            {
                results: [
                    {
                        name: 'wil',
                        occupation: 'starship captain',
                    }
                ],
            },
            {
                results: [
                    {
                        name: 'kathryn',
                        occupation: 'starship captain',
                    }
                ],
            },
        ],
    set = (obj, key, value) => Object.assign({}, obj, {[key]: value})

console.log(
    getResults()
        .map(queryResult => queryResult.results[0])
        .filter(result => result)
        .map(result => result.occupation)
        .reduce(
            (counts, occupation) =>
                counts[occupation]
                    ? set(counts, occupation, counts[occupation] + 1)
                    : set(counts, occupation, 1),
            {}))
/*
prints
{ 'space whale cleaner': 2,
  'interdimensional detective': 1,
  'starship captain': 2 }
*/
