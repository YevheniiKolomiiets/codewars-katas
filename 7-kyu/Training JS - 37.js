function countAnimals(animals,count){
    return count.map(x => animals.split(x).length-1);
}