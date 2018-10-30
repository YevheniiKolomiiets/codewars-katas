function dirReduc(arr){
    let stack = [];
    for (let dir of arr) {
        switch (dir) {
            case 'NORTH':
                if ('SOUTH' === stack[stack.length-1]) {
                    stack.pop();
                } else {
                    stack.push(dir);
                }
                break;
            case 'SOUTH':
                if ('NORTH' === stack[stack.length-1]) {
                    stack.pop();
                } else {
                    stack.push(dir);
                }
                break;
            case 'EAST':
                if ('WEST' === stack[stack.length-1]) {
                    stack.pop();
                } else {
                    stack.push(dir);
                }
                break;
            case 'WEST':
                if ('EAST' === stack[stack.length-1]) {
                    stack.pop();
                } else {
                    stack.push(dir);
                }
                break;
        }
    };
    return stack;
}