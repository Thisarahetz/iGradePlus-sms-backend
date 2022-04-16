const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const auth = require('./routes/auth'); //Register and login authontication
const usersRouter = require('./routes/users'); // update and delete and getAll and find
<<<<<<< HEAD
const eventsRouter = require('./routes/events'); // Events routes
=======
const TeacherRouter = require('./routes/teachers');
>>>>>>> 7d5a71ad8eb50b620921bfddcfb884801f26a2f5

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

<<<<<<< HEAD
app.use("/api/events",eventsRouter); //EventRouter
=======
app.use("/api/Teachers",TeacherRouter); //Teachers routes
>>>>>>> 7d5a71ad8eb50b620921bfddcfb884801f26a2f5
