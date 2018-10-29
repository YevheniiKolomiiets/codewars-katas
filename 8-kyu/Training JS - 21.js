function fiveLine(s){
    let result = '';
    let line = '';
    for (let i = 0; i < 5; i++) {
        line += s.trim();
        result += i < 4 ? line + '\n' : line;
    }
    return result;
}