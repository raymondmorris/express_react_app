//////////////////////////
// Import Dependencies
//////////////////////////
const express = require("express")
const cors = require("cors")

///////////////////////
// Import Json
///////////////////////
const projects = require("./projects.json")
const about = require("./about.json")

/////////////////////////
// App 
/////////////////////////
const app = express()

/////////////////////////
// Middleware
/////////////////////////
app.use(cors())

/////////////
// Routes
////////////
// Home Route
app.get("/", (req, res) => {
    res.send("Hello World")
})

// Projects Route
app.get("/projects", (req, res) => {
    res.json(projects)
})

// About Route
app.get("/about", (req, res) => {
    res.json(about)
})



/////////////////////////
// Server Listener
/////////////////////////
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})