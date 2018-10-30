function splitter(str){
    return str.replace(/[a-z0-9][A-Z]/g, str => str.split('').join(' '));
}