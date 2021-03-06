const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const auth = require('./routes/auth'); //Register and login authontication
const usersRouter = require('./routes/users'); // update and delete and getAll and find
const eventsRouter = require('./routes/events'); // Events routes
const staffRouter = require('./routes/staff');
const TeacherRouter = require('./routes/teachers');

const studentRouter = require('./routes/student') //student model

const cors = require('cors');
//Enable CORE
app.use(cors());
dotenv.config();

/*
Run Server
*/
app.listen(8090,() => {
    console.log("backend server is working");
})

/*  
connect mongoose server
*/
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then(()=>console.log("DB Connection Successfull!!!!"))
.catch((err)=>console.log(err));
/Accesp JSON/
app.use(express.json());

/*
Routers
*/
app.use("/api/auth",auth);
app.use("/api/users",usersRouter);

app.use("/api/student",studentRouter); //student Roter
app.use("/api/events",eventsRouter); //EventRouter
app.use("/api/staff",staffRouter); //Staff routes
app.use("/api/Teachers",TeacherRouter); //Teachers routes
