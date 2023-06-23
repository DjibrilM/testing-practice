export const stringLength = (string) => {
    if (string < 1 || string > 10) {
        throw new Error("invalid input");
    }
    return string.split("");
};

export const reverseString = (string) => {
    console.log(string)
    return string.split("").reverse().join("");
}


export const capitalize = (string) => {
    const arr = string.split("");
    arr[0] = arr[0].toUpperCase();
    arr.join(""); 

    return  arr.join("");
}
