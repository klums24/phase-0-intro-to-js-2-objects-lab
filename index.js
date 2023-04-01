// Write your solution in this file!

const employee = {name: "Sam", streetAddress: "123 Test Street"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employeeCopy = {...employee};
    employeeCopy[key] = value;
    return employeeCopy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    const employeeCopy = {...employee};
    employeeCopy[key] = value;
    delete employeeCopy.key;
    return employeeCopy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee[key];
    delete employee.name;
    return employee;
}

