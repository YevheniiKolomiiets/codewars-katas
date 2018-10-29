function cutCube(volume,n){
    return Math.cbrt(volume)**3 === volume && Math.cbrt(n)**3 === n && volume/n%1 === 0 && n !== 3;
}