module.exports = function reverse (n) {
    if(n<0){
        n=n*(-1);
    }
    let rez = String(n).split("").reverse().join("");
    return Number(rez);
}
