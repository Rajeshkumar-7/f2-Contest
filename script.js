/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.filter(person => person.profession === "developer")
    .map(developer => console.log(developer.name));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(person => {
    if (person.profession === "developer") {
      console.log(person.name);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log("Data added:", arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(person => person.profession !== "admin");
  console.log("Admin removed:", arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArray = [
  ];

  arr = arr.concat(newArray);
  console.log("Concatenated array:", arr);
}


