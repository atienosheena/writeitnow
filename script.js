JavaScript (script.js)
JavaScript 
document.getElementsById("orderform").add
EventListener("submit",function(event)
{
event.preventDefault();
var name=
document.getElementById("name").value;
var email=
document.getElementById("email").value;
var assignmentType =document.getElement
ById("assignmentType").value;
var deadline=
document.getById("deadline").value;
var paper requirements=
document.getById("paper requirements ").value;
var Type of spacing =document.getElement
ById("Tye of spacing ").value;
var Academic level =document.getElement
ById("Academic level ").value;
console.log("Name: "+Name );

console.log("email: "+email);
console.log("assignment type : "+assignment type  );
console.log("deadline: "+deadline  );
console.log("paper requirements : "+paper requirements  );
console.log("Type of spacing : "+Type of spacing  );
console.log("Academic level : "+Academic level   );
document.getElementById("myform").addEv
entListener("sumit",(event) 
{
event.preventDefault();
var tag=
document.getElementById("tag").value;
console.log("submitted tag: " + tag);
});
const fileinput=
document.getElementById(‘fileInput’);
const form=
document.getElementById(‘fileuploadForm’);
form.addEventListener(‘submit’,(e)=>{
e.preventDefault();
const file=fileInput.file[0];
file(e.g.,upload to server)
form.reset();
});
document.getElementById("orderform").reset();
});


