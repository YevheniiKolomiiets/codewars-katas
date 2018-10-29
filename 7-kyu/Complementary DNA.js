function DNAStrand(dna){
    let result = "";
    for (var i = 0; i < dna.length; i++){
        switch(dna.charAt(i)){
            case "A":
                result += "T";
                break;
            case "T":
                result += "A";
                break;
            case "G":
                result += "C";
                break;
            case "C":
                result += "G";
                break;
        }
    }
    return result;
}