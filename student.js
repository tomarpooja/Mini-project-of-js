let student = {
  name: "Pooja",
  age: 22,
  course: "BCA",
  contact: {
    phone: "1234567890",
    email: "pooja@example.com"
  }
};

// 1️⃣ Print name and course
console.log("Student Name:", student.name);
console.log("Course:", student.course);

// 2️⃣ Update age
student.age = 23;

// 3️⃣ Add new property - city
student.city = "Delhi";

// 4️⃣ Print nested email
console.log("Email:", student.contact.email);

// 5️⃣ Final object
console.log("Updated Student Profile:");
console.log(student);

