function three()
{
let a=1;
let b=4;
let c=7;
let d;
console.log(a);
console.log(b);
console.log(c);
for(let i=0;i<20;i++)
{
d=a+b+c;
a=b;
b=c;
c=d;
console.log(d);
}
}
