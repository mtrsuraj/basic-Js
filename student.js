
   function student()
   {
  let n= prompt("enter the student name:");
  let s= prompt("enter the student s1 score:");
  let s1= prompt("enter the student s2 score:");
  let s2= prompt("enter the student s3 score:");
  let t=parseInt(s)+parseInt(s1)+parseInt(s2);
   avg=t/3;
  alert("total number is:"+t);
  alert("avg number is"+avg);
  if(avg>60)
  {
   alert("the student get first class");
  }
  else if(avg>50)
  {
   alert("the student get second class");
  }
  else if(avg>35){
  alert("the student get third class");}
  else
  {
    alert("the student get fail class");
  }
    }
   