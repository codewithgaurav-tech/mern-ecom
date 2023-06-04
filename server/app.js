
const express = require('express');

const app = express();
const PORT = 3000;


// Middlewares
// app.use(express.json())

// Routes
app.get('/check',(req,res) =>
{
    console.log("hellos");
    res.send("hello")
})

app.use('/api/auth',require('./routes/authRoutes'))

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running,and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
