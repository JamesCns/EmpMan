const express = required('Express')
const app = express()
const port = 4000



// ---------API ROUTES

// get list of employee
app.get('/management/employee', function (req,res) => {
    
})

//get employee by id
app.get('/management/employee/:id', function (req,res){
    
})

// delete employee by id
app.delete('/management/employee/:id', (req, res) => {

})

// Save employee
app.post('/management/employee', (req, res) => {

})

// update an employee
app.put('/management/employee/:id', (req, res) => {

})




app.listen(process.env.port || port, function(){
    console.log('Now listening fro requests...')
})