const btn=document.getElementById("generate");
const btn1=document.getElementById("clipboard");
const uppercase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers=["1","2","3","4","5","6","7","8","9","0"];
const symbols=["!","@","#","$","%","^",".","&","*","?","/","'",";",":"];
// console.log(letter)  

btn.addEventListener("click",()=>{
    const a=document.getElementById("uppercase").checked;
    const b=document.getElementById("lowercase").checked;
    const c=document.getElementById("numbers").checked;
    const d=document.getElementById("symbols").checked;
    const e=document.getElementById("length").value;
    const result=createpassword(a,b,c,d,e);
    document.getElementById("result").innerHTML=result;
});
function createpassword(a,b,c,d,e)
{
    let flag=0;
    let letter=[];
    var p=uppercase[Math.floor(Math.random()*uppercase.length)];
    var q=lowercase[Math.floor(Math.random()*lowercase.length)];
    var r=numbers[Math.floor(Math.random()*numbers.length)];
    var s=symbols[Math.floor(Math.random()*symbols.length)]; 
    if(a==true)
      letter.push(p);
    else
      flag++;
    if(b==true)
     letter.push(q);
    else
     flag++;
   if(c==true)
     letter.push(r);
    else
     flag++;
    if(d==true)
     letter.push(s);
    else
     flag++;
    if(flag==4)
     {
          alert("🤦🏻‍♂️please select at least one condition🤦🏻‍♂️");
          location.href="index.html";
     }
    let password="";
   for(i=0;i<e;i++)
    {  
        var p=uppercase[Math.floor(Math.random()*uppercase.length)];
    var q=lowercase[Math.floor(Math.random()*lowercase.length)];
    var r=numbers[Math.floor(Math.random()*numbers.length)];
    var s=symbols[Math.floor(Math.random()*symbols.length)]; 
        const chooseletter=Math.floor(Math.random()*letter.length);
        password+=letter[chooseletter];
        letter.splice(chooseletter,1);
        if(letter.length==0)
          {
            if(a==true)
            letter.push(p);
          if(b==true)
           letter.push(q);
          if(c==true)
           letter.push(r);
          if(d==true)
           letter.push(s);
          }
    }
    return password;
}
btn1.addEventListener("click",()=>{
    var copyText = document.getElementById("result").innerHTML;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
});