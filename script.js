
let count=0;
const btn=document.querySelectorAll(".btn");
const val=document.querySelector("#value");

btn.forEach(function(cur) {

    cur.addEventListener("click",function(e){
        const style=e.currentTarget.classList;

        if(style.contains("inc")){
            count++;
        }else if(style.contains("dec")){
            count--;
        }else{
            count=0;
        }


        if(count>0){
            val.style.color="green";
        }else if(count<0){
            val.style.color="red";
        }else{
            val.style.color="yellow";
        }

        val.textContent=count;


    });
});
