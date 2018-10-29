function postfixEvaluator(string) {
    if (!string) return 0;
    let result = [];
    string.split(' ').forEach(x => {
        switch (x) {
            case '+':
                result.push(result.pop() + result.pop());
                break;
            case '-':
                result.push(-result.pop() + result.pop());
                break;
            case '*':
                result.push(result.pop() * result.pop());
                break;
            case '/':
                let divisor = result.pop();
                result.push(parseInt(result.pop() / divisor));
                break;
            default:
                result.push(parseInt(x));
        }
    });
    return result.pop();
}