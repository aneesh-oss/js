class Student {
    // Constructor function to initialize object properties
    constructor(name, branch, year) {
      this.name = name;
      this.branch = branch;
      this.year = year;
    }
  
    
    getDetails() {
      return `Name : ${this.name} Branch : ${this.branch} Year : ${this.year}`;
    }
    
  }
  
  // Create objects of the 'Student' class
  const student1 = new Student('Aneesh', 'Computer Science', 2);
 
  // Output the details of the Student
  console.log(student1.getDetails()); 
  student1.year = 3
  student1.name = 'Karan';
  
  // Output the details of the Student
  console.log(student1.getDetails());
