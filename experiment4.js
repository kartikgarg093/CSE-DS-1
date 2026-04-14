
function calculator() {
    let numSubjects = parseInt(document.getElementById("subjects").value);
    let total=0;
    for(let i=1; i<=numSubjects; i++) {
        let marks = parseFloat(prompt("Enter marks of subject "+i));
        total=total+marks;
    }
let average=total/numSubjects;
let grade="";
if(average>=95)
{
    grade="A+";
} 
else
{
    if (average>=90)
    {
        grade="A";
    }
    else
    {
        if (average>=80)
         {
            grade="B";
         }
         else
        {
            grade='C';
        }  
    }

}
let result="";
if (average>=40)
{
    result="Pass";
}
else
{
    result="Fail";
}
let content=document.querySelector("#container");
let resultDiv=document.createElement("div");
resultDiv.innerHTML="<br>"+"Total Marks: "+total+"<br>"+ "Average: "+average.toFixed(2)+
"<br>"+"Grade: "+grade+"<br>"+ "Result: "+result;
content.appendChild(resultDiv);
}