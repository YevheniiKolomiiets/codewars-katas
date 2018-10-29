function isOpposite(s1,s2){
    return s1.toLowerCase() === s2.toLowerCase() && s1 ? s1.replace(/[A-Z]/g, '').toUpperCase() === s2.replace(/[a-z]/g, '') : false;
}