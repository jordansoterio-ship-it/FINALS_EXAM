//SQL
//MySQL
const connection = require('../config/db');
//GET
exports.getAllUsers = (req, res) => {
    connection.query('SELECT * FROM enrollment_bills', (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
    });
};



//POST
exports.createUser=(req,res)=>{
    const {id,name,course,units,tuition}=req.body;
    connection.query('INSERT INTO enrollment_bills (student_id,student_name,course_program,units_enrolled,tuition_total,balance) VALUES (?,?,?,?,?)',[id,name,course,units,tuition],(err,result)=>{
        if(err) throw err;
        res.json({message:'User created successfully',id:result.insertId});
    });
}



//DELETE - Delete a enrollment bill
exports.deleteEnrollmentBill=(req,res)=>{
    const id = req.params.id;
    
    connection.query('DELETE FROM enrollment_bills WHERE id=?',[id],(err,result)=>{
        if (err) throw err;

        if (result.affectedRows>0)
            res.status(200)({message:"Enrollment record deleted successfully"});
        else{
            res.status(404).json({message:"Enrollment error not found"});
        }
        
    })

    
}
