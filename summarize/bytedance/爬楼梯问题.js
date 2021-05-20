let map = new Map();
function getClimbingWays (n){
    if(n < 1){
        return 0
    }else if(n === 1){
        return 1
    }else if(n === 2){
        return 2
    }
    if(map.has(n)){
        return map.get(n);
    }else{
        let value = getClimbingWays(n - 1) + getClimbingWays(n - 2);
        map.set(n, value);
        return value;
    }
}
console.log(getClimbingWays(10),map);
