#include <AccelStepper.h>

// Definizione dei pin del driver A4988
#define stepPin 2
#define dirPin 3

// Creazione di un oggetto stepper
AccelStepper stepper(1, stepPin, dirPin);

void setup() {
  // Imposta la velocità e l'accelerazione del motore
  stepper.setMaxSpeed(1000);
  stepper.setAcceleration(50);
  
  stepper.moveTo(2000);
}

void loop() {
  // Muovi il motore nella direzione desiderata
  stepper.run();
}