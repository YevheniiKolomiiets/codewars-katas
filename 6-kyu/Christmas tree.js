function christmasTree(height) {
    let result = [];
    let line = '';

    for (let i = 0; i < height * 2 - 1; i++) {
        line += '*';
    }

    for (let i = 0; i < height; i++) {
        result.push(line);
        line = line.replace(line.charAt(i), ' ');
        line = line.slice(0, line.lastIndexOf('*')) + ' ' + line.slice(line.lastIndexOf('*') + 1);
    }

    return result.reverse().join('\n');
}