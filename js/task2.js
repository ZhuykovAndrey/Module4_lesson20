function isPrime(num) {
    if (num > 0 && num <=3) {
        return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
        return false;
    } else return true;
}
