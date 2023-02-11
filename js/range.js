const range = (start, stop, step = 1) => {
    return Array.from({length: (stop - start) / step}, (_, i) => start + i * step)
}

// console.log(range(1,4), ": ===:range(0,4)")

const range2 = (start, stop) => {
    // const arr =  [...Array(stop)].map((res, i) => i + 1)
     return  [...Array(stop).keys()].map(el => el + start)
}

console.log(range2(5, 50), ": ===:range2(0, 50)")