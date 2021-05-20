function MergenTwoList (L1 ,L2){
    if ( L1 === null) {
        return L2;
    }
    if ( L2 === null) {
        return L1;
    }
    if (L1.val <= L2.val){
        L1.next = MergenTwoList(L1.next , L2);
        return L1;
    }else {
        L2.next = MergenTwoList(L2.next , L1);
        return L2;
    }
}