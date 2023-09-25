const express = require("express");
const cors = require("cors");
const app = express();


const db = require("./app/models");
const Role = db.role;
const DataApi = db.DataApi;

// db.sequelize.sync();

const createData = require("./app/data/data");
createData();

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//    initial();
// });

// function initial() {
//     Role.create({
//       id: 1,
//       name: "user"
//     });
   
//     Role.create({
//       id: 3,
//       name: "admin"
//     });
//   }

let corsOption = {
    origin: "http://localhost:8080",
    headers: {'Access-Control-Allow-Headers': 'x-access-token'}
};

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Wellcome to Server Doctors' schedule for MO TO" })
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
