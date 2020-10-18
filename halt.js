// XMlHttpRequest(AJAX Call)
function getJson(file,callback)
//without function in above line
//var getJson=(file,callback)=>
{
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function() 
{
 if (xhr.readyState === 4 && xhr.status ===200) 
 {
       callback(xhr.responseText);
 }
}
xhr.send();
}
getJson("data.json",(text)=>
{
 var d=JSON.parse(text);
 console.log(d);
 basics(d.details);
 trainers_details(d.trainers);
})
var main= document.querySelector(".main-div");

var  basics=(s)=>
{
var image=document.createElement("img");
image.src=s.image;
image.alt="ICON image";
main.appendChild(image);

var n=document.createElement("h1")
n.textContent=s.name;
n.classList.add("my-name");
main.appendChild(n);

var n1=document.createElement("h1")
n1.textContent=s.email;
n1.classList.add("my-name");
main.appendChild(n1);

var n2=document.createElement("p")
n2.textContent=s.mobile;
n2.classList.add("my-name");
main.appendChild(n2);

var d1=document.createElement("div");
main.appendChild(d1);
var h2=document.createElement("h1");
h2.textContent="Hobbies of person";
d1.appendChild(h2);
h2.appendChild(document.createElement("hr"))

var ul=document.createElement("ul");
for (var i=0 ;i < s.hobbies.length;i++){
	var li=document.createElement("li")
	li.textContent=s.hobbies[i];
	ul.appendChild(li);
}
d1.appendChild(ul);
}

var trainers_details=(t)=> 
{
var h=document.createElement("h1");
h.textContent="Trainers Details "
main.appendChild(h);
h.appendChild(document.createElement("hr"))

var table=document.createElement("table");
var row="";

for (var i in t)
{
	row += "<tr><td>"+t[i].name+"</td><td>"+t[i].email+"</td></tr>"

}
table.innerHTML=row;
main.appendChild(table);	
}
