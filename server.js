/////////////// REQUIRE //////////////////

var express = require("express") ;
var app = express() ;
var bodyParser = require("body-parser") ;
const mysql = require('mysql');
var morgan = require('morgan')



// ____________________________________________________________________ //


////////////// MYSQL_CONNECTION ///////////////

var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'myapp',
    password : 'myapp_secret_password',
    database : 'myapp'
});

var conc =  mysql.createConnection({
    host     : 'localhost',
    user     : 'courses',
    password : 'courses_secret_password',
    database : 'courses'
});

var cong = mysql.createConnection({
    host     : 'localhost',
    user     : 'gmail',
    password : 'gmail_secret_password',
    database : 'gmail'
});


// ____________________________________________________________________ //


///////////// MIDLE_HANDLERS ///////////////

app.use(express.static(__dirname + "/static")) ;
app.use(bodyParser.json());
app.use(morgan('common'))


// ____________________________________________________________________ //


//////////// EXAMPLE_FOR_TEST //////////////
// var users = {
//     "amir@gmail.com" : "123" ,
//     "amirhossein@gmail.com" : "1234" ,
//     "amirali@gmail.com" : "12345"
// } ;


// ____________________________________________________________________ //


//////////////// HOME_PAGE_GET /////////////////////

app.get("/" , function (req, resp, next) {
    resp.sendFile(__dirname + "/static/home.html") ;
}) ;


// _____________________________________________________________________________________ //


/////////////// LOGIN_SECRET_GET /////////////////////

app.get("/login_secret" , function (req, resp, next) {
    resp.sendFile(__dirname + "/static/login_secret.html") ;
}) ;


// _________________________________________________________________________ //


/////////////// LOGIN_SECRET_POST /////////////////////

app.post("/login_secret" , function (req, resp, next) {
    console.log(req.body);
    var input_email = req.body.email;
    var input_password = req.body.password;
    var values = [[input_email,input_password]];
    cong.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO gmail (email,password) VALUES ?";
        cong.query(sql, [values], function (err, result) {
          if (err) throw err;
          console.log("EMAIL and PASSWORD inserted : " + result.affectedRows);
        });
      });
    });
     // for(user in users){
    // if(req.body.username !== user){
    //     resp.send("user not found")
    // }
    // else if(req.body.password !== users[user]){
    //         resp.send("password is not correct")
    // }
    // else{
    //     resp.end('document.getElementsByTagName(body)[0].remove();');
    //     }
    // }});



// ______________________________________________________________________ //


/////////////// SING_UP_GET /////////////////

app.get("/registration" , function (req, resp, next) {
    resp.sendFile(__dirname + "/static/registration.html") ;
}) ;


// ____________________________________________________________________ //


/////////////// SING_UP_POST /////////////////////

app.post("/registration" , function (req, resp, next) {

    
///////////// STORING REQ_BODY ON VARABILES /////////////

    var input_name = req.body.name;
    var input_last_name = req.body.last_name;
    var lesson = req.body.lesson;
    var email = req.body.email;
    

//////////////// CONNECTING TO SQL DATABASE ///////////////

    conc.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    })


////////////////// INSERTING NAME AND LNAME AND EMAIL TO STUDENT TABLE ////////////////////

    var input_name_val = [[input_name,input_last_name,email]];
        var insert_name = "INSERT INTO student (student_name,student_lname,student_email) VALUES ?";
        conc.query(insert_name, [input_name_val], function (err, result) {
          if (err) throw err;
          return console.log("NAME and LAST_NAME have been inserted on STUDENT table " + result.affectedRows);
        });


////////////////// FINDING TIME OF LESSONS ////////////////////
 
        if(lesson == "Programing Class"){
            var lesson_time_ = "2.00 - 3.00";
            var ar_lesson_time = lesson_time_;
            var ar_lesson_name = lesson
        }else if(lesson == "English Class"){
            var lesson_time_ = '5.30 - 6.30' ;
            var ar_lesson_time = lesson_time_;
            var ar_lesson_name = lesson
        }else{
            var lesson_time_ = '7.00 - 8.00' ;
            var ar_lesson_time = lesson_time_;
            var ar_lesson_name = lesson;
    };
    


/////////////////// FINDING TEACHER OF LESSONS ////////////////////////////

    if(lesson == "Programing Class"){
        var teacher_name = "Amir";
        var teacher_id = 1 ; 
    }else if(lesson == "English Class"){
        var teacher_name = "Sadegh";
        var teacher_id = 2 ; 
    }else if(lesson == "German Class"){
        var teacher_name = "Amir";
        var teacher_id = 1 ; 
    }


///////////////// INSERTING ALL OF VALUES TO s_l_t_t TABLE //////////////////

    var adr = input_name;
    var sql = 'SELECT student_id FROM student WHERE student_name = ?';
    var sql2 = 'INSERT INTO s_l_t_t (lesson_time, student_name ,student_id ,lesson_name ,teacher_name ,teacher_id, student_email) VALUES ?';
    conc.query(sql, [adr], function (err, result) {
    if (err) throw err;
    var student_idd = result[0].student_id;
    var all = [[ar_lesson_time,input_name,student_idd,ar_lesson_name,teacher_name,teacher_id,email]];
    conc.query(sql2, [all],  function (err, result) {
    if (err) throw err;
    console.log("(" + all + ") inserted on S_L_T_T table : " + result.affectedRows);
      });
      var sqll = 'SELECT * FROM s_l_t_t WHERE student_id = ?';
      conc.query(sqll, [student_idd], function (err, result) {
        if (err) throw err;
        var user_msg = result[0];
      resp.send(user_msg);
    })
});
    });

    
/////////////// PORT_SETTING ///////////////

app.listen(8000) ;
console.log("app running on port 8000");