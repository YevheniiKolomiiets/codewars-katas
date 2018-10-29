function countIf(head, p, count = 0) {
    return !head ?
        count : countIf(head.next, p, p(head.data) ?
            count + 1 : count);
}