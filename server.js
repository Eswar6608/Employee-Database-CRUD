const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employee");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://eswarana518:Mongodbawscloud999@cluster0.1z5dwle.mongodb.net/EmployeeDB?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Routes
app.use("/employees", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
