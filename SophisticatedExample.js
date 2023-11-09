/* 
   Filename: SophisticatedExample.js
   
   Description: Sophisticated and elaborate code that demonstrates complex functionalities
   
   This code performs the following tasks:
   1. Creates a class called "Person" with properties like name, age, and gender.
   2. Defines methods to set and get these properties.
   3. Implements a custom sorting algorithm for an array of Person objects.
   4. Utilizes the class and sorting algorithm to create a list of people, sort them, and display the sorted list.
   5. Includes additional advanced features like error handling and asynchronous operations.
*/

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  setName(name) {
    if (typeof name === 'string' && name.length > 0) {
      this.name = name;
    } else {
      throw new Error('Invalid name');
    }
  }

  setAge(age) {
    if (typeof age === 'number' && age >= 0) {
      this.age = age;
    } else {
      throw new Error('Invalid age');
    }
  }

  setGender(gender) {
    if (typeof gender === 'string' && (gender === 'male' || gender === 'female')) {
      this.gender = gender;
    } else {
      throw new Error('Invalid gender');
    }
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }
}

function customSort(persons, property) {
  if (typeof property !== 'string') {
    throw new Error('Invalid property');
  }

  return persons.sort((a, b) => {
    if (typeof a[property] === 'undefined' || typeof b[property] === 'undefined') {
      throw new Error('Invalid property');
    }

    if (a[property] < b[property]) {
      return -1;
    } else if (a[property] > b[property]) {
      return 1;
    } else {
      return 0;
    }
  });
}

(async () => {
  try {
    const people = [
      new Person('John', 30, 'male'),
      new Person('Alice', 25, 'female'),
      new Person('Bob', 35, 'male'),
      new Person('Emily', 28, 'female'),
    ];

    // Sorting by age
    console.log('Sorting by age:');
    const sortedByAge = customSort(people, 'age');
    console.log(sortedByAge.map(person => `${person.getName()} (${person.getAge()})`).join(', '));

    console.log('\n');

    // Sorting by name
    console.log('Sorting by name:');
    const sortedByName = customSort(people, 'name');
    console.log(sortedByName.map(person => `${person.getName()} (${person.getAge()})`).join(', '));

  } catch (error) {
    console.error(error);
  }
})();