function one_two_three() {
    let b1 = one_two();
    let b3 = one_two();
    if (b1 === 1 && b3 === 2) return 1;
    if (b1 === 2 && b3 === 1) return 2;
    if (b1 === 2 && b3 === 2) return 3;
    return one_two_three();
}