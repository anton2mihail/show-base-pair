function pairElement(str) {
    let basePairs = str.split("");
    basePairs.forEach((element, idx, arr) => {
        switch(element){
            case "G":
                arr[idx] = ["G","C"];
                break;
            case "C":
                arr[idx] = ["C", "G"];
                break;
            case "A":
                arr[idx] = ["A", "T"];
                break;
            case "T":
                arr[idx] = ["T", "A"];
                break;
        }

    });
    return basePairs;
}
pairElement("GCG");
