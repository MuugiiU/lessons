let activities = [[`Нэр`, `Ажил`, `Идэх`, `Ярих`, `Тоглох`, `Унтах`],
[`Гончигсумлай`, 10, 1, 2, 3, 8],
[`Нараа`, 8, 2, 2, 3, 9],
[`Сараа`, 9, 2, 1, 3, 9]];

let huvi = [
    [`Нэр`, `Ажил`, `Идэх`, `Ярих`, `Тоглох`, `Унтах`],
    [`Гончигсумлай`, 0, 0, 0, 0, 0],
    [`Нараа`, 0, 0, 0, 0, 0],
    [`Сараа`, 0, 0, 0, 0, 0],
];

let row = activities.length;
let col = activities[0].length;
// console.table(activities);
// console.table(huvi);
for (let i = 1; i < row; i++) {
    console.log("Ehnii davtalt");
    for (let j = 1; j < col; j++) {
        console.log("Daraagiin davtalt");
       
        let percent = Math.round((activities[i][j] / 24) * 100);
        huvi[i][j] = percent + "%";
    }
}

console.table(activities);
console.table(huvi);
