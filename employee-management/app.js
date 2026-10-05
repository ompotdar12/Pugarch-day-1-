const fs = require("fs");
const path = require("path");
const readline = require("readline");

const DATA_FILE = path.join(__dirname, "employees.json");

function loadEmployees() {
  if (!fs.existsSync(DATA_FILE)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    return Array.isArray(data) ? data : [];
  } catch {
    console.log("Could not read employee data. Starting with an empty list.");
    return [];
  }
}

function saveEmployees(employees) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(employees, null, 2));
}

let employees = loadEmployees();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer.trim())));
}

function printMenu() {
  console.log(`
========================================
       EMPLOYEE MANAGEMENT SYSTEM
========================================
1. Add Employee
2. Update Employee
3. Delete Employee
4. Search Employee
5. List Employees
6. Highest Salary
7. Average Salary
8. Filter by Department
9. Exit
========================================`);
}

function nextId() {
  return employees.length
    ? Math.max(...employees.map(e => e.id)) + 1
    : 1;
}

async function addEmployee() {
  const name = await ask("Name: ");
  const department = await ask("Department: ");
  const salary = Number(await ask("Salary: "));

  if (!name || !department || !Number.isFinite(salary) || salary < 0) {
    console.log("Invalid employee details.");
    return;
  }

  const employee = { id: nextId(), name, department, salary };
  employees.push(employee);
  saveEmployees(employees);
  console.log(`Employee added successfully with ID ${employee.id}.`);
}

async function updateEmployee() {
  const id = Number(await ask("Employee ID to update: "));
  const employee = employees.find(e => e.id === id);

  if (!employee) {
    console.log("Employee not found.");
    return;
  }

  const name = await ask(`Name [${employee.name}]: `);
  const department = await ask(`Department [${employee.department}]: `);
  const salaryInput = await ask(`Salary [${employee.salary}]: `);

  if (name) employee.name = name;
  if (department) employee.department = department;
  if (salaryInput) {
    const salary = Number(salaryInput);
    if (!Number.isFinite(salary) || salary < 0) {
      console.log("Invalid salary. Update cancelled.");
      return;
    }
    employee.salary = salary;
  }

  saveEmployees(employees);
  console.log("Employee updated successfully.");
}

async function deleteEmployee() {
  const id = Number(await ask("Employee ID to delete: "));
  const index = employees.findIndex(e => e.id === id);

  if (index === -1) {
    console.log("Employee not found.");
    return;
  }

  const [removed] = employees.splice(index, 1);
  saveEmployees(employees);
  console.log(`Deleted ${removed.name}.`);
}

async function searchEmployee() {
  const term = (await ask("Search by ID or name: ")).toLowerCase();

  const results = employees.filter(e =>
    String(e.id) === term || e.name.toLowerCase().includes(term)
  );

  displayEmployees(results);
}

function displayEmployees(list) {
  if (list.length === 0) {
    console.log("No employees found.");
    return;
  }

  console.table(list);
}

function listEmployees() {
  displayEmployees(employees);
}

function highestSalary() {
  if (employees.length === 0) {
    console.log("No employees available.");
    return;
  }

  const highest = employees.reduce((best, current) =>
    current.salary > best.salary ? current : best
  );

  console.log(`Highest salary: ${highest.name} - ${highest.salary}`);
}

function averageSalary() {
  if (employees.length === 0) {
    console.log("No employees available.");
    return;
  }

  const average =
    employees.reduce((sum, employee) => sum + employee.salary, 0) / employees.length;

  console.log(`Average salary: ${average.toFixed(2)}`);
}

async function filterByDepartment() {
  const department = (await ask("Department: ")).toLowerCase();

  const results = employees.filter(
    e => e.department.toLowerCase() === department
  );

  displayEmployees(results);
}

async function main() {
  while (true) {
    printMenu();
    const choice = await ask("Enter your choice: ");

    try {
      switch (choice) {
        case "1": await addEmployee(); break;
        case "2": await updateEmployee(); break;
        case "3": await deleteEmployee(); break;
        case "4": await searchEmployee(); break;
        case "5": listEmployees(); break;
        case "6": highestSalary(); break;
        case "7": averageSalary(); break;
        case "8": await filterByDepartment(); break;
        case "9":
          console.log("Thank you. Goodbye!");
          rl.close();
          return;
        default:
          console.log("Invalid choice. Please select 1-9.");
      }
    } catch (error) {
      console.log(`Operation failed: ${error.message}`);
    }
  }
}

main();
