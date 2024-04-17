


class Student {
    // Constructor function to initialize object properties
    constructor(name, branch, year) {
      this.name = name;
      this.branch = branch;
      this.year = year;
    }
  
    // Method to get the details of the Student data
    getDetails() {
      return `Name : ${this.name} Branch : ${this.branch} Year : ${this.year}`;
    }
    // changedata(){
    //     this.name="Aneesh";
    //     this.branch="Computer Science";
    //     this.year=2;
    // }
  }
  
  // Create objects of the 'Student' class
  const student1 = new Student('Aneesh', 'Computer Science', 2);
  const student2 = new Student('karan', 'Computer Science', 3);
  
  // Output the details of the Student
  console.log(student1.getDetails()); 
  console.log(student2.getDetails()); 

  student1.year = 3
  console.log(student1.getDetails());
  student2.name = 'Anish'
  console.log(student2.getDetails());

