// set intial count
let count =0;

//select calue and buttons
const value =document.querySelector("#value");
const btns= document.querySelectorAll(".btn");
btns.forEach(function(btn) {
    btn.addEventListener('click',function(e)
    {
        const styles=e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        value.textContent=count;
        }
        else if(styles.contains('increase'))
        {
            count+=1;
        value.textContent=count;
        }
        else{
            count=0;
            value.textContent=count;
        }
        if(count>0)
        {
            value.style.color="yellow";
        }
        else if(count<0){
            value.style.color='red'
        }
    else{
            value.style.color="#222"
        }
    })
});