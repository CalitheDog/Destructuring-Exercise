// ES5 Assigning Variables to Object Properties
const obj = {
    numbers : {
        a:1,
        b:2,
    }
}
const {a,b} = obj.numbers;

// ES5 Array Swap
[arr[0], arr[1]] = [arr[1], arr[0]]


// raceResults()
raceResults(['Joe','Jack','Jeff', 'Jacob'])
const raceResults = ([first,second,third, ...rest]) => ({first,second,third, ...rest})