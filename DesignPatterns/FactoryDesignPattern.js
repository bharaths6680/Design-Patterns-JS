/*
    Factory Design Pattern -> https://www.youtube.com/watch?v=kuirGzhGhyw
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/
/* Factory design [attern is nothing but access the ccommon properties and with some additional info based on some unique keys to create a new objects */

/* The factory pattern is a creational design pattern that uses factory methods to create objects — rather than by calling a constructor. */

function Developer(name)
{
  this.name = name
  this.type = "Developer"
}

function Tester(name)
{
  this.name = name
  this.type = "Tester"
}

function EmployeeFactory()
{
  this.create = (name, type) => {
    switch(type)
    {
      case 1:
        return new Developer(name)
      case 2:
        return new Tester(name)
    }
  }
}

function say()
{
  console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("John", 2))
employees.push(employeeFactory.create("Jamie", 1))
employees.push(employeeFactory.create("Taylor", 1))
employees.push(employeeFactory.create("Tim", 2))

employees.forEach( emp => {
  say.call(emp)
})

/* ANother example */

// createuser acts as factory class
const createUser = (role, additionalInfo) => {
  // common properties
  const user = {
    name: additionalInfo.name,
    pwd: additionalInfo.password, // 'pwd' is derived from 'password'
  };

  // get additional info based on the role
  const additionInfoObj = {
    admin: () => ({ role: "Admin", key: additionalInfo.key }),
    customer: () => ({ role: "Customer", address: additionalInfo.address }),
    seller: () => ({
      role: "Seller",
      shopAddress: additionalInfo.shopAddress,
      contact_No: additionalInfo.contact_No,
    }),
  };

  // find the right role and get specific addition info
  let specificInfo = null;
  if (additionInfoObj[role] !== undefined) {
    specificInfo = additionInfoObj[role]();
  }

  if (!specificInfo) {
    return;
  }

  return { ...user, ...specificInfo };
};

// Create an admin user
const admin = createUser("admin", {
  name: "Abhishek",
  password: "Abhi1233",
  key: "#1244534-fadsv34",
});
console.log(admin);
```

