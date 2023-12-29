/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
type Gender = "female" | "male";

let myGender: Gender;

myGender = "female";
myGender = "male";

export {};
