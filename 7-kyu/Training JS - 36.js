function rndCode(){
    let code = '';
    let uppercaseLetters = 'ABCDEFGHIJKLM';
    let symbols = '~!@#$%^&*';

    for (let i = 0; i < 2; i++) {
        code += uppercaseLetters[~~(uppercaseLetters.length*Math.random())];
    }
    code += ~~(10000*Math.random());
    for (let i = 0; i < 2; i++) {
        code += symbols[~~(symbols.length*Math.random())];
    }

    return code;
}