function samllcapply (obj){
    if (typeof obj !== Object){
        return;
    }
    let newObj = obj instanceof Array ? [] : {};
    for(let key in obj){
        if(Object.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === 'Object' ? samllcapply(obj[key]) : obj[key];
        }
    }
    return newObj;
}

function deepclone (obj){
    if(typeof obj !== Object) return;
    let newObj = obj instanceof Array ? [] : {};
    for(var key in obj){
        if(Object.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === 'Object' ? deepclone(Object[key]) : obj[key];
        }
    }
    return newObj;
}
