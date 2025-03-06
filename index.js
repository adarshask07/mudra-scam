const express = require("express");
const app = express();

app.get("/download", (req, res) => {
    const filePath = "file.pdf"; // Your file path
    res.download(filePath); // Sends the file for download
});

app.listen(5000, () => console.log("Server running on port 3000"));
