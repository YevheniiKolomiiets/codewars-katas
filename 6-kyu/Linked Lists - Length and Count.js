function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head, l = 1) {
    return !head ?
        0 : head.next ?
            length(head.next, l + 1) : l;
}

function count(head, data, result = 0) {
    return !head ?
        result : count(head.next, data, head.data === data ?
            result + 1 : result);
}