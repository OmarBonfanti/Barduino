#include <AccelStepper.h>

AccelStepper stepper(1, 3, 2); // Define stepper motor on pins 2 (DIR) and 3 (STEP)\

#define En_Pin 7

void setup() {
  pinMode(En_Pin , OUTPUT);
  digitalWrite(En_Pin,LOW);  

  stepper.setMaxSpeed(2000);  // Set maximum speed (steps per second)
  stepper.setAcceleration(1100);  // Set acceleration (steps per second^2)
  stepper.setCurrentPosition(0);
   stepper.moveTo(2000);  // Adjust this value for the number of steps you want
}

void loop() {
 
  
}
