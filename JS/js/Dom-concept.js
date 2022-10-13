let employees = [{ "Id": 1, "Name": "Elwin", "Email": "escally0@opera.com", "gender": "Male" },
{ "Id": 2, "Name": "Grange", "Email": "gblanko1@dedecms.com", "gender": "Male" },
{ "Id": 3, "Name": "Doralyn", "Email": "dclaypole2@harvard.edu", "gender": "Female" },
{ "Id": 4, "Name": "Piotr", "Email": "pdimeo3@tiny.cc", "gender": "Male" },
{ "Id": 5, "Name": "Thea", "Email": "tgrigoryev4@mozilla.org", "gender": "Female" },
{ "Id": 6, "Name": "Pearle", "Email": "pjennaroy5@wordpress.org", "gender": "Female" },
{ "Id": 7, "Name": "Tris", "Email": "tbagguley6@marriott.com", "gender": "Male" },
{ "Id": 8, "Name": "Dona", "Email": "dlayfield7@rambler.ru", "gender": "Female" },
{ "Id": 9, "Name": "Genovera", "Email": "griddich8@ox.ac.uk", "gender": "Female" },
{ "Id": 10, "Name": "Janos", "Email": "jfootitt9@oracle.com", "gender": "Male" }];

function display() {
	let rows = "";

	// for-of loop
	// for (emp of employees) {
	// 	rows = rows + `<tr>
	// 			 <td>${emp.Id}</td>
	// 			 <td>${emp.Name}</td>
	// 			 <td>${emp.Email}</td>
	// 			 <td>${emp.gender.substr(0, 1)}</td>
	//                </tr>`;
	// }
	// for loop
	// for (let i = 0; i < employees.length; i++) {
	// 	rows = rows + `<tr>
	// 	         <td>${employees[i].Id}</td>
	// 			 <td>${employees[i].Name}</td>
	// 			 <td>${employees[i].Email}</td>
	// 			 <td>${employees[i].gender.substring(0, 1)}</td>
	// 	            </tr>`
	// }
	// while loop
	// let i = 0;
	// while (i < employees.length) {
	// 	rows = rows + `<tr>
	//          <td>${employees[i].Id}</td>
	// 		 <td>${employees[i].Name}</td>
	// 	     <td>${employees[i].Email}</td>
	// 	     <td>${employees[i].gender.substring(0, 1)}</td>
	//                 </tr>`
	// 	i++;
	// }
	// do-while loop
	let i = 0;
	do {
		rows = rows + `<tr>
	         <td>${employees[i].Id}</td>
			 <td>${employees[i].Name}</td>
		     <td>${employees[i].Email}</td>
		     <td>${employees[i].gender.substring(0, 1)}</td>
	                </tr>`
		i++;
	} while (i < employees.length)
	document.getElementById("abc").innerHTML = rows;
}