export function rangeSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

export function iterationCount(a) {
    let count = 0;
    while (a > 0.1) {
        a /= 2;
        count++;
    }
    return count;
}

export function symbolsReplace(message) {
    if (message.length < 3) {
        return message;
    }

    let chars = message.split('');
    let it = 2;

    do {
        chars[it] = '_';
        it += 3;
    } while (it < chars.length);

    return chars.join('');
}
