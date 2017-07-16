function sum()
{
  var sum =0; 
  for(var i=0;i<arguments.length;i++)
  {
     sum = sum+ arguments[i];
  }
   return sum;
}
sum(1,2,3);//returns 6
sum(1,2,3,4,5,6,7,8,9,10);//returns 55
