let n = parseInt(prompt("pascaliin gurvaljin uusgeh toogoo oruulna uu"));
let sum = [];
let count = 1;

for (let i = 0; i <= n; i++) {
    let sub = [];
    for (let j = 0; j <= n; j++) {
        sub.push(0);
    }
    sum.push(sub);
}

console.table(sum);

for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
        if (j == 0 || i == j) {
            sum[i][j] = count;

        } else {
            sum[i][j] = sum[i - 1][j - 1] + sum[i - 1][j];
        }
       
    }
}

console.table(sum)