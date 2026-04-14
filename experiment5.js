Employees=[];
function addemployee(){
    let name=document.getElementById("empname").value;
    let empId=document.getElementById("empid").value;
    let salary=parseFloat(document.getElementById("salary").value);
    let dept=document.getElementById("position").value;
    employee={Name:name,Id:empId,Salary:salary,Department:dept};
    Employees.push(employee);
    alert("Employee Added Successfully!");
    document.getElementById("empname").value="";
    document.getElementById("empid").value="";
    document.getElementById("salary").value="";
    document.getElementById("position").value="";
}
function display(){
    let output=document.querySelector('#output');
    let i="<h1>All Employees</h1>";
    Employees.forEach(emp => {
        i+="Name: " + emp.Name + " | Id: " + emp.Id + " | Salary: ₹" + emp.Salary + 
        " | Department: " + emp.Department + "<br>";
    });
    output.innerHTML=i;
}
function filter(){
    let out=document.querySelector('#output');
    let j="<h1>Employees Salary>5000</h1>";
    Employees.forEach(emp =>{
        if (emp.Salary>5000)
        {
            j+="Name: " + emp.Name + " | Id: " + emp.Id + " | Salary: ₹" + emp.Salary + 
        " | Department: " + emp.Department + "<br>";
        }
 });
 out.innerHTML=j;
}
function totalsalary(){
    let output=document.getElementById('output');
    let b="<h1>Total Salary Payout</h1>"
    let c=0;
    Employees.forEach(emp =>{
       c+=parseFloat(emp["Salary"]);
    });
    output.innerHTML=b+"<br>"+"₹ "+c;
} 

function averagesalary(){
    let output=document.querySelector('#output');
    let b="<h1>Average Salary Payout By Store</h1>";
    let c=0;
    let j=0;
    Employees.forEach(emp =>{
       c+=parseFloat(emp["Salary"]);
       j++;
    });
    let avg=c/j;
    output.innerHTML=b+"<br>"+"₹ "+avg.toFixed(2);
}
function count(){
    let output=document.querySelector('#output');
    let deptnm=prompt("Enter department name");
    let c=0;
    Employees.forEach(emp =>{
        if (emp['Department']==deptnm)
        {
            c++;
        }
    });
    output.innerHTML="<h1>Employees in "+deptnm+": "+c+"</h1>";
}
