var express = require('express');
var app = express();

var cors = require('cors');
var mysql = require('mysql');

app.use(cors());
app.use(express.json());

// GET COMENTARIOS
app.get('/comments/:lugar_id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'limaturismo'
    });

    connection.connect();

    var myQueryComments="SELECT name_user, lname_user, coments_user, points_obtained, time_comment FROM comentarios "
                         + "WHERE lugar_id = ? ";
    var myValues = [req.params.lugar_id];
    
    connection.query(myQueryComments, myValues, function(error,results,fields){
        //console.log(error);
        res.send(results);
        connection.end();
    });
});

//GET PREGUNTAS DE TRIVIA
app.get('/questions/:trivia_id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'limaturismo'
    });
    connection.connect();

    var myQueryComments="SELECT id, pregunta FROM preguntas WHERE trivia_id = ?;";
    var myValues = [req.params.trivia_id];

    connection.query(myQueryComments, myValues, function(error,results,fields){
        if (error) throw error;     
        res.send(results);
        connection.end();
    });
});

// POST COMENTARIOS
app.post('/comments', function(req, res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'limaturismo'
    });   
   connection.connect();
   var myQuery =   " INSERT INTO comentarios (lugar_id, name_user,lname_user,coments_user,points_obtained,time_comment)"+
                    "VALUES (?, ? , ? , ? , ? , NOW())"

   var myValues = [req.body.lugar_id, req.body.name_user, req.body.lname_user, req.body.coments_user, req.body.points_obtained, req.body.time_comment];
   connection.query(myQuery, myValues, function(error, results, fields){
       if (error) throw error;       
       res.send(results);
       connection.end();
   });
});
// DELETE COMENTARIOS
app.delete('/comments/:id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'limaturismo'
    });
    connection.connect();

    var myQuery= "DELETE FROM comentarios WHERE id = ?;";
    var myValues=[req.params.id];
    connection.query(myQuery, myValues, function(error, results, fields){
        if (error) throw error;        
        res.send(results[0]);    
        connection.end();
    });
});

//GET LUGARES TURISTICOS
app.get('/places', function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'limaturismo'
    });
    connection.connect();
    var myQueryComments="SELECT id, nombre, descripcion, ranking FROM lugares;";
    connection.query(myQueryComments,function(error,results,fields){
        if (error) throw error; 
        res.send(results);
        connection.end();
    });
});
//GET LUGARES TURISTICOS POR ID
app.get('/places/:id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'limaturismo'
    });
    connection.connect();

    var myQuery= "SELECT id, nombre, descripcion, ranking FROM lugares WHERE id = ? ";
    var myValues=[req.params.id];
    
    connection.query(myQuery, myValues, function(error, results, fields){
        if (error) throw error;        
        res.send(results[0]);    
        connection.end();
    });
});

//GET RESPUESTAS DE TRIVIA
app.get('/answers/:pregunta_id', function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'limaturismo'
    });
    connection.connect();
    var myQueryComments="SELECT lugar_id, trivia_id, pregunta_id, respuesta, correcta FROM respuestas WHERE pregunta_id = ?;";
    var myValues = [req.params.pregunta_id];

    connection.query(myQueryComments, myValues, function(error,results,fields){
        if (error) throw error;     
        res.send(results[0]);
        connection.end();
    });
});

//GET TRIVIA
app.get('/trivias/:lugar_id', function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'limaturismo'
    });
    connection.connect();
    var myQueryComments= "SELECT id, lugar_id FROM trivias " 
                         + "WHERE lugar_id = ? ";

    var myValues = [req.params.lugar_id];  

    connection.query(myQueryComments, myValues, function(error,results,fields){
        if (error) throw error; 
        res.send(results);
        connection.end();
    });
});

app.listen(3000,function(){
    console.log("Port 3000 is listening :D")
})