// Rover Object Goes Here
// ======================
var rover = {
    direction:"N",
    X:0,
    Y:0,
    travelLog: []
}
// ======================
function turnLeft(rover){
    console.log("turnLeft was called!");
    switch (rover.direction) {
        case "N":
        console.log("Rover is facing North");
        rover.direction= "W";
        console.log("Rover is now facing West");
        break;
        case "E":
        console.log("Rover is facing East")
        rover.direction= "N";
        console.log("Rover is now facing North");
        break;
        case "S":
        console.log("Rover is facing South")
        rover.direction= "E";
        console.log("Rover is now facing East");
        break;
        case "W":
        console.log("Rover is facing West");
        rover.direction= "S";
        console.log("Rover is now facing South");
        break;
        default:
        console.log(rover.direction +  "Rover is confused")
        break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
    console.log("Rover is facing North");
    rover.direction= "E";
    console.log("Rover is now facing East");
    break;
    case "E":
    console.log("Rover is facing East")
    rover.direction= "S";
    console.log("Rover is now facing South");
    break;
    case "S":
    console.log("Rover is facing South")
    rover.direction= "W";
    console.log("Rover is now facing West");
    break;
    case "W":
    console.log("Rover is facing West");
    rover.direction= "N";
    console.log("Rover is now facing North");
    break;
    default:
    console.log(rover.direction +  "Rover is confused")
    break;
}
}

function moveForward(rover){
    console.log("moveForward was called!");
    switch (rover.direction) {
        case "N":
        console.log ("Rover is facing North and will attempt moving forward from" +  rover.X, rover.Y);
        rover.Y= rover.Y+1;
        console.log ("Rover is now located at" +  rover.X, rover.Y);
        break;
        case "E":
        console.log("Rover is facing East and will attempt moving forward from" +  rover.X,rover.Y);
        rover.X= rover.X+1;
        console.log("Rover is now located at" +  rover.X,rover.Y);
        break;
        case "S":
        console.log("Rover is facing South and will attempt to move forward from" +  rover.X, rover.Y);
        rover.Y=rover.Y-1;
        console.log ("Rover is now located at" + rover.X, rover.Y);
        break;
        case "W":
        console.log("Rover is facing West and will attempt moving forward from" +  rover.X,rover.Y);
        rover.Y= rover.Y-1;
        console.log("Rover is now located at" + rover.X, rover.Y);
        break;
        default:
        console.log("Rover was not able to move")
        break;
    }
    rover.travelLog.push (rover.X);
    rover.travelLog.push (rover.Y);
}

function shortcutMove(rover, command) {
    console.log ("shortcutMove initiated");
    for (var i=0; i<command.length; i++) {
       if (command[i] === "f") {
           moveForward(rover);
           console.log ("move forward shortcut completed");

       }else{
            if (command[i] === "l") {
                turnLeft(rover);
                console.log ("turn left shortcut completed");

            }else{
                
                    if (command[i] === "r") {
                        turnRight(rover);
                        console.log ("turn right shortcut completed");
            }
       }
       }
    }   
    console.log ("rover has traveled over:");
    for (var i=0; i<rover.travelLog.length; i++) {
        if (i % 2 == 0){
            console.log ("x=" +  rover.travelLog [i]);
        }else{
            console.log ("y=" +  rover.travelLog [i]);
        }

        }
}
