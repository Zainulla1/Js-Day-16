// Check the Armstrong Number by using JS

var number=prompt("please enter the number")
var temp=number;
var lengthOfDigit=number.toString().length
var sum=0;
while(temp>0){
    //371/10-1 modulus
    var digit=temp%10
    console.log(digit)
    sum+=digit**lengthOfDigit;
    console.log("SUM"+sum)
    temp=parseInt(temp/10);
    console.log(temp);
    console.log("--------")
}
if(sum==number){
    console.log(`${number} is an Armstrong number `)
}
else{
    console.log(`${number} is not an Armstrong Number`)
}