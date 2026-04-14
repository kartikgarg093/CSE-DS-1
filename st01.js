function count(){
    let a=parseInt(document.querySelector('#number').value);
    for(let i=a;i>=0;i--){
        setTimeout(
            function(){
                if (i==0)
               { document.getElementById("dynamic").innerHTML="<h1>time's up!</h1>";}
            
            else
            {
                document.getElementById("dynamic").innerHTML="<h1>"+i+"</h1>";
            }}
         ,(a-i)*1000);


}
}
 

