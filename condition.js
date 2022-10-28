
   function tapu()
   {
  let p= prompt("enter the principle amount:");
   let r=prompt("enter the rate of intrest");
   let t=prompt("enter the time");
   s=(p*r*t)/100;
   amount=p*Math.pow((1+r/100),t);
ci=amount-p;
   alert("the simple intrest is: "+s);
   alert("the compound intrest is: "+ci);

    }
   