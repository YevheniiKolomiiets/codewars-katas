function padIt(str,n){
    let i = 1;
    while (i <= n) {
        str = i % 2 ? '*' + str : str + '*';
        i++;
    }
    return str;
}