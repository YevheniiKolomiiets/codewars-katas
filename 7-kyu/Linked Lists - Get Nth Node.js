function Node(data) {
    this.data = data;
    this.next = null;
}

function getNth(node, index, n = 0) {
    if (length(node) < index - 1 || !node) throw new Error();
    return !node ?
        null : index === n ?
            node : getNth(node.next, index, n + 1);
}

function length(head, l = 1) {
    return !head ?
        0 : length(head.next) + 1;
}