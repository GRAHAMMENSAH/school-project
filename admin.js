// admin.js

document.getElementById("theme-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const theme = document.getElementById("theme-select").value;
    document.body.style.backgroundColor = theme === "dark" ? "#333" : "#f9f9f9";
    document.body.style.color = theme === "dark" ? "#fff" : "#000";
});

// Example: Dynamically populate user list
const userList = document.getElementById("user-list");
const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Student" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
];
users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td><button>Edit</button> <button>Delete</button></td>
    `;
    userList.appendChild(row);
});
