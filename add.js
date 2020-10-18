// var addition=(a,b)=>{
// 	window.alert(a+b);
// }
// addition(10,20);

//fetch and promices
 var getJson=(file)=>{
 return new Promise((resolve,reject)=>
 {
 	return fetch(file).then(reponse=>{
 		if(reponse.ok)
 		{
 			resolve(reponse.json());
 		}
 		else
 		{
 			reject(new Error('Error'));
 		}
 	})
 })

 }
 getJson("data.json").then(d=>{
 	console.log(d);
 	basics(d.details);
 	trainer_details(d.trainers);
 })