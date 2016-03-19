var myString = "Hello World!";
var myInt = 1;
var myName = "Jesse Spencer";
var myAge = 25;
var ryansAge = 18;
var combinedAge = myAge+ryansAge;
var welcomeMessage = "Hello "+myName+" your age is "+myAge+" it is nice to be coding with your brother.";
var anotherMessage = "Your age plus your brothers age: "+combinedAge;
console.log(welcomeMessage);
console.log(anotherMessage);
console.log("Now Starting the for loop");

var runLoop = function(iterations){
	var counter = 0;
	var numberOfIterations = 42;
	for(var i=iterations; i>0; i--){
		// console.log("the index: "+i);
		counter++;
	}
	console.log("Finished the for loop. Counter is equal to: "+counter);

}

var myFunction = function(iterations, mood){
	console.log("Going to start the loop function. With "+iterations+" iterations");
	runLoop(iterations)
	console.log("Finished running "+iterations+" iterations");
	console.log("I am feeling "+mood);
}
var mood = "Happy";
myFunction(100, mood)
var mood = "Happy Very Happy";
myFunction(1000, mood)
var mood = "Happy Very Very Very Happy, But getting a little tired after 10k iterations.";
myFunction(10000, mood)