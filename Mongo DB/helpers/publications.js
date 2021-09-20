function CheckNull(params){
    return (params==null || params==undefined || params=="");
}

function checkEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = re.test(String(email).toLowerCase());
    return result;
}
function checkNumber(number){
    const re = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    var result = re.test(String(number).toLowerCase());
    return result;
}
function CheckArray(params){
    return (params==null || params==undefined || params=="" || params==[]);
}
module.exports={
    CheckNull,
    checkEmail,
    checkNumber,
    CheckArray
}