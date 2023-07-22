//3. Write a “person” class to hold all the details.

class PersonDetails {
    constructor(name,email,age,gender,place,qualification) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.gender = gender;
      this.place = place;
      this.qualification = qualification;
    }
    details() {
      console.log(`
        name:${this.name}
        email:${this.email}
        age:${this.age}
        gender:${this.gender}
        place:${this.place}
        qualification:${this.qualification}
        `)
    }
  }
  let person = new PersonDetails("Divya","divyaprabha.it2014@gmail.com","29","female","erode","B.Tech");
  person.details();

//4. write a class to calculate the uber price.

  class uber {
    constructor(distance) {
        this.distance = distance;
    }
    getprice() {
        return this.distance * 10;
    }
  }
  let UberPrice = new uber(10);
  console.log(UberPrice.getprice());
