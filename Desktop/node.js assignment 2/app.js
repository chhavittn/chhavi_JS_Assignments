const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//  Data
let users = [
    { id: 1, Username: "john_doe", Password: "password123", FirstName: "John", LastName: "Doe" },
    { id: 2, Username: "jane_doe", Password: "password123", FirstName: "Jane", LastName: "Doe" },
    { id: 3, Username: "alice_smith", Password: "password123", FirstName: "Alice", LastName: "Smith" },
    { id: 4, Username: "bob_brown", Password: "password123", FirstName: "Bob", LastName: "Brown" },
    { id: 5, Username: "albert_stein", Password: "password123", FirstName: "Albert", LastName: "Stein" }
];

let students = [
    { id: 1, name: "Mike Johnson", branch: "CS" },
    { id: 2, name: "Sarah Connor", branch: "IT" },
    { id: 3, name: "Tony Stark", branch: "ME" },
    { id: 4, name: "Bruce Wayne", branch: "CS" },
    { id: 5, name: "Peter Parker", branch: "EE" }
];

// 1. User API - Search by username
app.get('/api/users', (req, res) => {
    const search = req.query.search;
    if (!search) {
        return res.json([]);
    }
    const filteredUsers = users.filter(user => 
        user.Username.toLowerCase().includes(search.toLowerCase())
    );
    res.json(filteredUsers);
});

// 2. Student API - Return list of all students
app.get('/api/students', (req, res) => {
    res.json(students);
});

// Delete API for Student Action
app.delete('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const initialLength = students.length;
    students = students.filter(student => student.id !== studentId);
    
    if (students.length < initialLength) {
        res.json({ success: true, message: 'Student deleted successfully' });
    } else {
        res.status(404).json({ success: false, message: 'Student not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});