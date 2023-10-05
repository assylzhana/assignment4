//1 
function findManagersHierarchy(employees, employeeId) {
    const managersHierarchy = [];
  
    function findManagers(id) {
      const employee = employees.find(emp => emp.employeeId === id);
      if (employee) {
        managersHierarchy.push(employee.employeeId);
        if (employee.managerId !== employee.employeeId) {
          findManagers(employee.managerId);
        }
      }
    }
  
    findManagers(employeeId);
    return managersHierarchy;
  }

  const employees = [
    { employeeId: 11, name: 'John', managerId: 11 },
    { employeeId: 50, name: 'Todd', managerId: 73 },
    { employeeId: 150, name: 'Alex', managerId: 200 },
    { employeeId: 73, name: 'Sara', managerId: 11 },
    { employeeId: 200, name: 'Alex', managerId: 50 },
    { employeeId: 100, name: 'Alex', managerId: 150 },
  ];
  
  const employeeIdToFind = 100;
  const managersHierarchy = findManagersHierarchy(employees, employeeIdToFind);
  console.log('Managers Hierarchy:'+ managersHierarchy);

//2
const object = {
    name: 'John Cohnor',
    printName() {
      console.log(this.name);
    }
  };
  
  object.printName(); // Output: John Cohnor
  
  const printName = object.printName.bind(object); // Use bind to set the context
  
  printName(); // Output: John Cohnor


//3  
var hero = { 
	_name: 'John Doe', 
	getSecretIdentity: function (){ 
		return this._name; 
	}
};

var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
//this inside getSecretIdentity always refers to the hero object

//4
//1
//undefined
//ReferenceError: y is not defined

//5
console.log(1 < 2 < 3);//true
console.log(3 > 2 > 1);//false

//6
var b = 1;
function outer(){	
	var b = 2 
	function inner(){ 
		b++; 
		var b = 3; 
		console.log(b) 
	} 
	inner();
}
outer(); // answer 3 cause we increment it in inner function