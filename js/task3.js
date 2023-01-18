function getSqrtBySequentialSelection(a) {
    for (let i = 0; i <= a; i++) {
        if (i * i == a) {
            return i;
        }
    }
}

// it doesn`t work and i don`t know why((((((((((((

function getSqrtByBinarySearch(b) {
    let i = Math.round(b / 2);
    let result = i * i;

    function checkI(i) {
        if (result == b) {
            return i;
        } else if (result > b) {
            return i = Math.round(i / 2);
        } else if (result < b) {
            return i = Math.round(i * 1.5)
        }
    }

    checkI(i);
}

