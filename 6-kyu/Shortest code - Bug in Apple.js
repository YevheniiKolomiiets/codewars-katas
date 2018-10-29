function sc(a) {
    for (var i in a)
        for (var j in a[i])
            if (a[i][j] === "B")
                return [+i, +j];
}