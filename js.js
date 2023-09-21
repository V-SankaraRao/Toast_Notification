let box=document.querySelector(".msgbox");
var suc='<i class="fa-sharp fa-solid fa-circle-check"></i> Successfully Sent';
let er='<i class="fa-solid fa-circle-xmark"></i> Fix the Error';
let inv='<i class="fa-solid fa-circle-exclamation"></i> Invalid Input';

function toast(m){
    let b=document.createElement('div');
    b.classList.add("tst");
    b.innerHTML=m;
    box.appendChild(b);
    if(m.includes('Error'))
    {
        b.classList.add("error");
    }
    if(m.includes('Invalid')){
        b.classList.add("invalid");
    }
    setTimeout(()=>{
      b.remove();
    },4000);
}