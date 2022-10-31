function evenpira()
{
let i, j, row = 6; 
 let p=1;   

for (i=1; i<row; i++)   
{  
for(j =1; j<=i; j++)	
{
	if(p%2==0){
	document.write(-p*p);
	}
	else
	{
		document.write(" "+p*p);
	}
	p++;
}
document.write("<br>");   
}
}  
 