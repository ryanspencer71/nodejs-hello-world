var string = "Hello World!";
var myInt = 1;
var myName = "Ryan Spencer";
var myAge =18
var welcomeMessage = "Hello "+myName+" your age is "+myAge+" it is nice to be coding with your brother.";
console.log(welcomeMessage);
console.log("Starting for Loop");

var runLoop = function(iterations){

	var counter = 0;
	for(var i=0; i<iterations; i++){
	console.log("the index: "+i);
	}
}
console.log("Finished the for loop.")
var myFunction = function(iterations){
	console.log("I am now starting the loop function");
	runLoop(iterations)
}
myFunction(100)