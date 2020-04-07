
CREATE TABLE student (
student_id int auto_increment,
student_name VARCHAR(100),
student_lname VARCHAR(100),
student_email varchar(150),
primary key(student_id,student_name,student_email)
);
INSERT INTO student (student_name,student_lname,student_email) 
			VALUES ("Javad" , "Mousavi", "javad@gmail.com"),
				   ("Zahra" , "Mousavi", "zahra@gmail.com"),
                   ("Sadegh" , "Mousavi", "sadegh@gmail.com"),
                   ("Amir" , "Mousavi", "amir@gmail.com"),
                   ("Sara" , "Mousavi", "sara@gmail.com"),
                   ("AmirAli" , "Mousavi", "amirali@gmail.com");

                  
CREATE TABLE lesson(
lesson_name VARCHAR(100),
lesson_time VARCHAR(100),
PRIMARY KEY(lesson_name,lesson_time)
);
INSERT INTO lesson(lesson_name,lesson_time)
			VALUES("Programing Class" , "2.00 - 3.00"),
				  ("English Class" , "5.30 - 6.30"),
                  ("German Class" , "7.00 - 8.00");
                  select * from lesson;

CREATE TABLE teacher(
teacher_id INTEGER,
teacher_name VARCHAR(100),
teacher_lname VARCHAR(100),
PRIMARY KEY(teacher_name,teacher_id)
);
INSERT INTO teacher(teacher_id,teacher_name,teacher_lname)
			VALUES( 1 , "Amir" , "Mousavi"),
				  ( 2 , "Sadegh" , "Mousavi");




CREATE TABLE time(
time_id INTEGER,
time VARCHAR (50),
PRIMARY KEY(time)
);
INSERT INTO time(time_id,time)
		  VALUES( 1 ,"2.00 - 3.00"),
			    ( 2 ,"5.30 - 6.30"),
                ( 3 ,"7.00 - 8.00");




CREATE TABLE s_l_t_t(
student_name VARCHAR(100),
student_id integer,
teacher_name VARCHAR(100),
teacher_id integer,
lesson_name VARCHAR(100),
lesson_time VARCHAR(100),
student_email varchar(150),
primary key(student_id,student_name,student_email,lesson_name),
FOREIGN KEY (student_id,student_name,student_email) REFERENCES student(student_id,student_name,student_email),
FOREIGN KEY (teacher_name,teacher_id) REFERENCES teacher(teacher_name,teacher_id),
FOREIGN KEY (lesson_name,lesson_time) REFERENCES lesson(lesson_name,lesson_time)
);
INSERT INTO s_l_t_t (lesson_time, student_name ,student_id ,lesson_name ,teacher_name ,teacher_id,student_email)
			  VALUES("2.00 - 3.00", "Javad" , 1 , "Programing Class", "Amir", 1, "javad@gmail.com"),
					("2.00 - 3.00", "Zahra" , 2 , "Programing Class", "Amir", 1, "zahra@gmail.com"),
                    ("2.00 - 3.00", "Sadegh" , 3 , "Programing Class" , "Amir", 1, "sadegh@gmail.com"),
                    ("2.00 - 3.00", "Sara" , 5 , "Programing Class" , "Amir", 1, "sara@gmail.com"),
                    ("2.00 - 3.00", "Amirali" , 6 , "Programing Class" , "Amir", 1, "amirali@gmail.com"),
                    
					("5.30 - 6.30", "Javad" , 1  , "English Class", "Sadegh", 2, "javad@gmail.com"),
					("5.30 - 6.30", "Zahra" , 2 , "English Class", "Sadegh", 2, "zahra@gmail.com"),
                    ("5.30 - 6.30", "Amir" , 4 , "English Class" , "Sadegh", 2, "amir@gmail.com"),
                    ("5.30 - 6.30", "Sara" , 5 , "English Class" , "Sadegh", 2, "sara@gmail.com"),
                    ("5.30 - 6.30", "Amirali" , 6 , "English Class" , "Sadegh", 2, "amirali@gmail.com"),

                    ("7.00 - 8.00", "Javad" , 1  , "German Class", "Amir", 1, "javad@gmail.com"),
					("7.00 - 8.00", "Zahra" , 2 , "German Class", "Amir", 1, "zahra@gmail.com"),
                    ("7.00 - 8.00", "Sadegh" , 3 , "German Class" , "Amir", 1, "sadegh@gmail.com"),
                    ("7.00 - 8.00", "Sara" , 5 , "German Class" , "Amir", 1, "sara@gmail.com"),
                    ("7.00 - 8.00", "Amirali" , 6 , "German Class" , "Amir", 1, "amirali@gmail.com");
                    

                    
use courses;
drop table s_l_t_t;
SELECT * FROM student order by student_id;
SELECT * FROM teacher order by teacher_id;
SELECT * FROM time;
SELECT * FROM lesson order by lesson_time;
SELECT * FROM s_l_t_t;