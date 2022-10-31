function liner()
{
const a=[1,2,3,4,8,6,7];
let n=6;	let pos=-1;
for(let i=0;i<a.length;i++)
{
	if(a[i]==n)
	{
			pos=a[i];
			break;
	}
}
	if(pos==-1)
	{
			console.log("the value is not found");
	}
	else
	{
		console.log("the value is="+pos);
	}
}	
