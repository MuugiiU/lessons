
// team 1 dundaj
let onooa=prompt("эхний оноог оруулна уу");
let onoo1=Number(onooa);
let onoob=prompt("дараах оноог оруулна уу");
let onoo2=Number(onoob);
let onooc=prompt("сүүлийн оноог оруулнө уу");
let onoo3=Number(onooc);
let team1_total=(onoo1+onoo2+onoo3)/3

// team 2 dundaj
let scorea=prompt("эхний оноог оруулна уу");
let score1=Number(scorea);
let scoreb=prompt("дараах оноог оруулна уу");
let score2=Number(scoreb);
let scorec=prompt("сүүлийн оноог оруулнө уу");
let score3=Number(scorec);
let team2_total=(score1+score2+score3)/3;
    if(team1_total>100||team2_total>100) {
        if(team1_total>team2_total) {
            console.log(team1_total,"team1_total яллаа");
        } else {
            console.log(team2_total,"team2_total яллаа");
        } 
    } else if (team1_total==team2_total) {
        console.log("тэнцлээ");
    } else {
        console.log("ялагч байхгүй");
    }