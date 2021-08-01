import bcrypt from "bcryptjs";

const users = [
  {
    firstName: "Admin",
    lastName: "User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin1234", 10),
    isAdmin: true,
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("john1234", 10),
  },
  {
    firstName: "Harry",
    lastName: "Smith",
    email: "harry@example.com",
    password: bcrypt.hashSync("harry1234", 10),
  },
  {
    firstName: "James",
    lastName: "Lewis",
    email: "james@example.com",
    password: bcrypt.hashSync("james1234", 10),
  },
];

export default users;
