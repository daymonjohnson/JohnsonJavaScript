total= 0;
usersnumber= prompt("pick a number");
for(var num=1;num<=usersnumber;num++){
  total= total + num;
}
console.log(total);

//---------------------------------------------//

var play= prompt("do you want to play");
if(play==="yes"){do{ 
  var word= prompt("write a word");
  var again= prompt("do you want to play again");
  console.log(word);
   }while(again!=='no');
}
else{
  console.log("ok fine then");
}

//---------------------------------------------//

var print=prompt("would you like to print your name");
var ex=("");
while(print==="yes"){
  var name= prompt("What is your name?");
  var print=prompt("would you like to print again?");
  console.log("Hello my name is "+name+ex);
  ex=ex+"!";
}
 //--------------------------------------------------//
 
  var time= prompt("what time of day is it?");
 if(time==="morning")
 {
   console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
 }else if(time==="noon"){
   console.log("Since it is noon you should be eating lunch. We suggest a salad.");
 }else{
   console.log("Since it is evening you should be eating dinner. We suggest chicken and rice.");
 }
 