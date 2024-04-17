let person = {
    name: "Aneesh",
    age: 21,
    isStudent: true,
    profile: "Developer"
  };
  
  let values = Object.values(person);
  console.log(values); 
  
  let keys = Object.keys(person);
  console.log(keys); 

  console.log(person.name)
  console.log(person['age'])


  for (let [key,value] of Object.entries(person)) {
    console.log(key, value);
  }
  for (let key of keys) {
    console.log(person[key]);
  }
  for (let key in person) {
    console.log(key, person[key]);
  }