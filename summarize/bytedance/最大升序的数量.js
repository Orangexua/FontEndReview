// 问题一： 找出连续最大升序的数量
function queryFn1(arr) {
    if(!arr.length) return 0
    let res = 1
    let start = 0
    for (let i = 1, len = arr.length; i < len; i++){
        if (arr[i] < arr[i - 1]) {
            res = Math.max(res,i-start)
            start = i
        }
    }
    return res
}

// 问题二： 找出不连续最大升序的数量
function queryFn2(arr) {
    if(!arr.length) return 0
    let res = 1
    let num = 0
    let lastVal = 0
    for (let i = 0, len = arr.length-1; i < len; i++){
        for (let j = i + 1; j < len; j++){
            if (arr[j] > lastVal) {
                num++
                lastVal = arr[j]
            }
        }
        res = Math.max(res,num)
    }
    return res
}