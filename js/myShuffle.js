const myShuffle = (arr = []) => {
    return  arr.sort((a, b) => Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1))
}

// console.log(myShuffle(['mike', 'jene', 'archie']))
console.log(myShuffle([{name: 'igor', age: 33}, {name: 'mike', age: 22}, {name:'archie', age: 5}]))



// const teacherSort = (val) => {
//     const data = val.map(val => ({sort: Math.random(), value: val}))
//
//     console.log(data, ": ===:data")
// }

// teacherSort('myname')

