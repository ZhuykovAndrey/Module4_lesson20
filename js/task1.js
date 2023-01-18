function myFunction(a, b) {
    let sum = 0;
    let sumArray = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum += i;
            sumArray.push(i)
        }
    }
    console.log(`Сумма четных чисел в диапазоне равна: ${sum}
Количество четных чисел в диапазоне равно: ${sumArray.length}`)
}

