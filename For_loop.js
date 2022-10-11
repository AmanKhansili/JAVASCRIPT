/*<----    Start End Change
      |    |     |
for(i=0;  i<2;  i++){           Trying to iterate, running a code many many time
    //Do Something
}

while(Something is true){       checking a state
    //Do something
}


}---->*/


var output = [];
function fizzBuzz() {
    for (var count = 1; count < 101; count++) {
        if (count % 3 == 0 && count % 5 == 0) {
            output.push("FizzBuzz");
        }
        else if (count % 3 == 0) {
            output.push("Fizz");
        }
        else if (count % 5 == 0) {
            output.push("Buzz");
        }
        else {
            output.push(count);
        }
    }
    console.log(output)
} 