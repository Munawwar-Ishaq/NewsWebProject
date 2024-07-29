const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { connectDB } = require("./Config");
const Message = require("./Model/message");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.post("/api/v1/message", async (req, res) => {
  var { name, email, phone, message } = req.body;
  // Save the form data to your database
  const data = new Message({
    name,
    email,
    phone,
    message,
  })

  await data.save();
  res.status(200).json({ message: "Form submitted successfully" });

});

connectDB();

const port = process.env.PORT || 3000;

app.get('/' , (req , res) => {
  res.send({message : 'Success'});
})

app.listen(port, (err, res) => {
  console.log("Server is Running at " + port);
});
