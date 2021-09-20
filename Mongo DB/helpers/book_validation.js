function CheckNull(params){
    return (params==null || params==undefined || params=="");
}

function CheckArray(params){
    return (params==null || params==undefined || params=="" || params==[]);
}

module.exports={
    CheckArray,
    CheckNull
}