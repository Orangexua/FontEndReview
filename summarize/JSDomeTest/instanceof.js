function Myinstancof (insA , insB){
    const insAobj = insA.prototype;
    const insBobj = insB.__proto__;
    while(insBobj){
        if(insAobj === insBobj){
            return true;
        }
        insBobj = insBobj.__proto__;
    }
    return false;
}