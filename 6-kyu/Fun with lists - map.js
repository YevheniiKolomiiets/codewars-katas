function map(head, f) {
    return !head ? null : new Node(f(head.data), map(head.next, f));
}