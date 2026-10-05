# Day 1 — Programming Fundamentals & Problem Solving

## Overview
Day 1 deliverables for the Pug Arch 10-Day Intern Technical Training & Domain Assessment Program.

## Contents
- `exercises/` — 15 programming and data-structure problems.
- `employee-management/` — Employee Management CLI application.

## Technology
- JavaScript
- Node.js
- Built-in Node.js modules only (`fs`, `path`, `readline`)
- JSON file for local employee persistence

## Programming Exercises
1. Reverse a string
2. Palindrome
3. Largest number
4. Second-largest number
5. Remove duplicates
6. Missing number
7. Duplicate number
8. Character frequency
9. First non-repeating character
10. Merge sorted arrays
11. Common elements
12. Stack
13. Queue
14. Maximum subarray sum
15. Sorting without built-in sorting

## Employee Management CLI

### Features
- Add employee
- Update employee
- Delete employee
- Search employee by ID or name
- List all employees
- Find highest salary
- Calculate average salary
- Filter by department
- Local JSON data persistence
- Input validation and error handling

### Employee fields
- ID
- Name
- Department
- Salary

## Prerequisites
Install Node.js (LTS recommended).

Check installation:

```bash
node --version
npm --version
```

No external npm packages are required.

## How to Run the CLI

```bash
cd employee-management
node app.js
```

Select an option from the menu and follow the prompts.

Employee records are saved automatically in `employee-management/employees.json`.

## How to Run the Exercises

From the `day-01` directory:

```bash
node exercises/01-reverse-string.js
node exercises/02-palindrome.js
node exercises/03-largest-number.js
node exercises/04-second-largest.js
node exercises/05-remove-duplicates.js
node exercises/06-missing-number.js
node exercises/07-duplicate-number.js
node exercises/08-character-frequency.js
node exercises/09-first-non-repeating.js
node exercises/10-merge-sorted-arrays.js
node exercises/11-common-elements.js
node exercises/12-stack.js
node exercises/13-queue.js
node exercises/14-maximum-subarray-sum.js
node exercises/15-sorting-without-built-in.js
```

## Validation
The application was designed to validate:
- Required text fields
- Numeric salary values
- Employee IDs
- Empty employee collections
- Invalid menu selections
- Invalid/malformed local JSON data

## Challenges and Solutions
- **Persistent CLI data:** used a local JSON file so records remain available after restarting the program.
- **Unique IDs:** generated the next ID from the current maximum employee ID.
- **Input errors:** validated user input and handled runtime errors with `try/catch`.
- **Search/filter:** used case-insensitive matching for names and departments.

## Future Improvements
- Add unit tests
- Add pagination for large employee lists
- Add stronger validation rules
- Add role-based authentication
- Replace JSON storage with a database
- Add a web interface/API

## Submission
For Day 1, submit the GitHub repository link as instructed by the training team.
