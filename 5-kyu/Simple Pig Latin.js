function pigIt(str){
    return str.split(' ')
        .map(word => word.match(/[!@#$%^&*()?,.]/g) ?
            word : word.slice(1) + word.charAt(0) + 'ay')
        .join(' ');
}