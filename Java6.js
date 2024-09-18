let n = Number(prompt("nhập một số nguyên dương bất kỳ:"));
let sum = 1;

for (i=1; i<=n; i=i+1){
    sum = sum*i;
    console.log(n + "! =" + sum);
}
