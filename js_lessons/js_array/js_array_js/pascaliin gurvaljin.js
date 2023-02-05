let n = parseInt(prompt("pascaliin gurvaljin uusgeh toogoo oruulna uu"));
 let triangle=[];
 for (let i=0; i<n; i++){
    let a=[];
    a[0]=1;
    a[i]=1;
    for(let j=1;j<=i-1;j++){
        a[j]=triangle[i-1][j-1]+triangle[i-1][j];
       
    }
    triangle.push(a);
    console.log(a);
 }
