function digitSum(y) {
    let sum = 0;
    let arr = String(y);

    for (let i = 0; i < arr.length; i++) {
        sum += +(arr[i]);
    } return sum
}

