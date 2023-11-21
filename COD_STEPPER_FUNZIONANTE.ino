#include <AccelStepper.h>

// Define stepper motor connections
#define DIR_PIN 3
#define STEP_PIN 2

// Create an instance of the AccelStepper class
AccelStepper stepper(1, STEP_PIN, DIR_PIN); // (1: A4988 driver)

void setup() {
  // Set maximum speed and acceleration
  stepper.setMaxSpeed(2000); // Adjust to your motor's speed
  stepper.setAcceleration(1100); // Adjust to your motor's acceleration
  stepper.setCurrentPosition(0);
}

void loop() {
  // Run the stepper motor forward and backward
  stepper.moveTo(3000); // Move 2000 steps (or as needed)
  stepper.runToPosition(); // Wait until the motor reaches the target position

  delay(1000); // Wait for a second

  stepper.moveTo(-2000); // Move 2000 steps in the reverse direction
  stepper.runToPosition(); // Wait until the motor reaches the target position

  delay(1000); // Wait for a second
}
