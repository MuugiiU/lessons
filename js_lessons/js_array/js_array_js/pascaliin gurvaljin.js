let n = parseInt(prompt("pascaliin gurvaljin uusgeh toogoo oruulna uu"));
 let sum=[];
 let count=1;
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
        if (j == 0) {
            sum[i][j]=count;
        } else if(i==j) {
            sum[i][j]=count ;
        } else {
            sum[i][j]=sum[i][j-1]+sum[i-1][j];
            
        }
        console.log(sum);
    }
}