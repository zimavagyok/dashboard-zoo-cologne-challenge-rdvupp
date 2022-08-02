import type { Animal } from '../types';

export const calculateAgeInYears = (birthdate: Date): Number => {
  const today = new Date();
  const differenceInMilliseconds = today.getTime() - birthdate.getTime();

  return differenceInMilliseconds != 0
    ? Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365))
    : 1;
};

export const calculateFoodInKgs = (animal: Animal): number => {
  // 1st step, sum of height and weight divided by 250
  let requiredFood = (animal.height + animal.weight) / 250;
  // storing the age of the animal
  let age = calculateAgeInYears(new Date(animal.birthdate));
  // 2nd step, modify the amount of food depending on age
  if (age > 20) {
    requiredFood /= 2;
  } else if (age < 2) {
    requiredFood *= 2;
  }
  // 3rd step, if favourite food is cherry add 28 kgs to the required amount
  if (animal.favouriteFruit == 'cherry') {
    requiredFood += 28;
  }
  // 4th step, if the gender is male then the required amount should be multiplied by 1.2
  if (animal.gender == 'male') {
    requiredFood *= 1.2;
  }

  // 5th step, if the species is fish then the required amount of food is 0 kg, otherwise the calculated amount
  return animal.species == 'fish' ? 0 : requiredFood;
};
