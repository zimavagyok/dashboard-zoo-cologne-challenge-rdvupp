import type { Animal } from '../types';
import { calculateFoodInKgs } from '../composables/helpers';

export const calculateFoodForNextMonth = (animals: Animal[]): Number => {
  let requiredFood = 0;
  //Iterating through the array
  animals.forEach((item: Animal) => {
    //Adding the amount of food to the whole that a specific animal needs
    requiredFood = requiredFood + calculateFoodInKgs(item);
  });

  //Get the current year and the next month so we know how many days are in there
  const date = new Date();
  let currentYear = date.getFullYear();
  let nextMonth = date.getMonth() + 2;

  //If the next month is more than twelve, than the next month is a new year's january
  if (nextMonth == 13) {
    currentYear += 1;
    nextMonth = 1;
  }

  //Return the amount of food multiplied by the amount of days in the next month
  return requiredFood * new Date(currentYear, nextMonth, 0).getDate();
};
