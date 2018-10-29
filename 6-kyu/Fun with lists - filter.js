function filter(head, p) {
    return !head ?
        null : p(head.data) ?
            new Node(head.data, filter(head.next, p)) : filter(head.next, p);
}