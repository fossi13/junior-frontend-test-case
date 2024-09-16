const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const users = [{ username: "admin", password: "password" }];

const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    location: "Los Angeles",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    location: "Chicago",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    location: "Houston",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    location: "Phoenix",
  },
  {
    id: 6,
    name: "David Evans",
    email: "david.evans@example.com",
    location: "Philadelphia",
  },
  {
    id: 7,
    name: "Emily Green",
    email: "emily.green@example.com",
    location: "San Antonio",
  },
  {
    id: 8,
    name: "Frank Harris",
    email: "frank.harris@example.com",
    location: "San Diego",
  },
  {
    id: 9,
    name: "Grace Lee",
    email: "grace.lee@example.com",
    location: "Dallas",
  },
  {
    id: 10,
    name: "Henry Martin",
    email: "henry.martin@example.com",
    location: "San Jose",
  },
];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res
      .status(200)
      .json({ message: "Login successful", token: "fake-jwt-token" });
  } else {
    res.status(401).json({ message: "Invaild username or password" });
  }
});

app.get("/api/users", (req, res) => {
  res.status(200).json(mockUsers);
});

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const user = mockUsers.find((user) => user.id === parseInt(id));

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
