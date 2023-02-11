const minNumberOccur = (passedVal = []) => {

  const res = passedVal.reduce((acc, val, i) => {

        if(val < acc[0]) return [val]
        if(val === acc[0]) return  [...acc, val]

        return acc
    }, [passedVal[0]])
    return {
        val: res[0],
        occur: res.length
    }
}

console.log(minNumberOccur([3,23,2,33,2,12,10, 1, 1, 1]), ": ===:minNumberOccur([3,23,2,33,2,,12,10])")


const arr = [1, 2, 3]
const minValue = Math.min(...arr);
const minArr = arr. filter((el) => el === minValue);
console. log(minArr. length);

