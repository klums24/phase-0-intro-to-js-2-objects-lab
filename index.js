// Write your solution in this file!

const employee = {name: "Sam", streetAddress: "123 Test Street"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employeeCopy = {...employee};
    employeeCopy[key] = value;
    return employeeCopy;
}
console.log(updateEmployeeWithKeyAndValue(employee, "name", "bob"));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employeeCopy = {...employee};
    delete employeeCopy[key];
    return employeeCopy;
}
console.log(deleteFromEmployeeByKey(employee,"name"));
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

//console.log(destructivelyDeleteFromEmployeeByKey(employee,"name"));