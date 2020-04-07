var name_student = document.getElementById("materialContactFormName");
var last_name = document.getElementById("materialContactFormEmail");
var lesson = document.getElementById("lesson");
var emaill = document.getElementsByClassName("form-control")[2];

function da() {
    var xhr = new XMLHttpRequest();
    xhr.open("post", '/registration');
    
    
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    ///////////////// REMOVING BODY ELEMENT /////////////////////
            document.getElementsByClassName('delete')[0].remove();

    //////////////// CREATING BODY ELEMENT /////////////////////
                var body = document.createElement("body");
                var html = document.getElementsByTagName("html")[0];
                html.appendChild(body);

    /////////////// APPENDING THE MASSEG TO BODY //////////////

                var body_element = document.getElementById("style");
                
                var ul = document.createElement("ul");

                body_element.appendChild(ul);

                var h2_i = document.createElement("li");
                var h2_b = document.createElement("li");
                var h2_c = document.createElement("li");
                var h2_d = document.createElement("li");
                var h2_e = document.createElement("li");
                var h2_f = document.createElement("li");

                ul.appendChild(h2_i).style.fontWeight = "bold";
                ul.appendChild(h2_b).style.fontWeight = "bold";
                ul.appendChild(h2_c).style.fontWeight = "bold";
                ul.appendChild(h2_d).style.fontWeight = "bold";
                ul.appendChild(h2_e).style.fontWeight = "bold";
                ul.appendChild(h2_f).style.fontWeight = "bold";

            

                document.getElementsByTagName("strong")[0].innerHTML = 'YOU HAVE REGISTERED SUCCESESSFULLY !';
                document.getElementsByTagName("li")[0].innerHTML = "Student Name : ";
                document.getElementsByTagName("li")[1].innerHTML = "Student ID : ";
                document.getElementsByTagName("li")[2].innerHTML = "Lesson Name : ";
                document.getElementsByTagName("li")[3].innerHTML = "Lesson Time : ";
                document.getElementsByTagName("li")[4].innerHTML = "Teacher Name : ";
                document.getElementsByTagName("li")[5].innerHTML = "E-mail : ";

                

                var strong_1 = document.createElement("span");
                var strong_2 = document.createElement("span");
                var strong_3 = document.createElement("span");
                var strong_4 = document.createElement("span");
                var strong_5 = document.createElement("span");
                var strong_6 = document.createElement("span");



                h2_i.appendChild(strong_1).style.fontWeight = "normal";
                h2_b.appendChild(strong_2).style.fontWeight = "normal";
                h2_c.appendChild(strong_3).style.fontWeight = "normal";
                h2_d.appendChild(strong_4).style.fontWeight = "normal";
                h2_e.appendChild(strong_5).style.fontWeight = "normal";
                h2_f.appendChild(strong_6).style.fontWeight = "normal";

                

                var resq = JSON.parse(this.response);
                document.getElementsByTagName("span")[0].innerHTML = resq.student_name;
                document.getElementsByTagName("span")[1].innerHTML = resq.student_id;
                document.getElementsByTagName("span")[2].innerHTML = resq.lesson_name;
                document.getElementsByTagName("span")[3].innerHTML = resq.lesson_time;
                document.getElementsByTagName("span")[4].innerHTML = resq.teacher_name;
                document.getElementsByTagName("span")[5].innerHTML = resq.student_email;




                document.getElementsByTagName("li")[0].style.fontFamily = "Arial";
                document.getElementsByTagName("li")[1].style.fontFamily = "Arial";
                document.getElementsByTagName("li")[2].style.fontFamily = "Arial";
                document.getElementsByTagName("li")[3].style.fontFamily = "Arial";
                document.getElementsByTagName("li")[4].style.fontFamily = "Arial";
                document.getElementsByTagName("li")[5].style.fontFamily = "Arial";


            










                

        }
    }
    xhr.send(JSON.stringify({name : name_student.value, last_name : last_name.value , lesson : lesson.value , email : emaill.value}));
    }