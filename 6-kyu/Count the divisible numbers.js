function divisibleCount(x, y, k) {
    if (x % k !== 0) x += k - x % k;
    y -= y % k;
    return (y - x) / k + 1;
}