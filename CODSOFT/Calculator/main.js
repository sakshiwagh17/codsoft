let button=document.querySelectorAll(".box");
let result=document.querySelector(".result");

let string="";

button.forEach((box)=>{
    box.addEventListener("click",(ele)=>{
        if (ele.target.innerHTML=="=") {
            string=eval(string);
            result.value=string;
        }
        else if(ele.target.innerHTML=="AC"){
            string="";
            result.value=string;
        }
        else if(ele.target.innerHTML=="DE"){
            string=string.substring(0,string.length-1)
            result.value=string;
        }
        else{
        string+=ele.target.innerHTML;
        result.value=string;
        }
        
    });
});