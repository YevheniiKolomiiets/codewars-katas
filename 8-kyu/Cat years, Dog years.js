var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let catYears = 0,
        dogYears = 0;

    for (let i = 0; i < humanYears; i++) {
        if (i === 0) catYears = dogYears += 15;
        else if (i === 1) catYears = dogYears += 9;
        else {
            catYears += 4;
            dogYears += 5;
        }
    }

    return [humanYears, catYears, dogYears];
};