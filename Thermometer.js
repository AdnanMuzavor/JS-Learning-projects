const tempload = () =>{
    let temp=document.getElementById('temp');
    temp.innerHTML='&#xf2cb';

    setTimeout(()=>{
        temp.innerHTML="&#xf2ca";
        temp.style.color="orange";
    },500);

    setTimeout(()=>{
        temp.innerHTML="&#xf2ca";
        temp.style.color="orange";
    },1000);

    setTimeout(()=>{
        temp.innerHTML="&#xf2c9";
        temp.style.color="yellow";
    },1500);
    
    setTimeout(()=>{
        temp.innerHTML="&#xf2c8";
        temp.style.color="blue";
    },2000);

    setTimeout(()=>{
        temp.innerHTML="&#xf2c7";
        temp.style.color="red";
    },2500);

    setTimeout(()=>{
        temp.innerHTML="&#xf2c8";
        temp.style.color="blue";
    },3000);

    setTimeout(()=>{
        temp.innerHTML="&#xf2c9";
        temp.style.color="yellow";
    },3500);
   
    setTimeout(()=>{
        temp.innerHTML="&#xf2ca";
        temp.style.color="orange";
    },4000);
 
    setTimeout(()=>{
        temp.innerHTML="&#xf2cb";
        temp.style.color="yellow";
    },4500);
}
tempload();
setInterval(() => {
    tempload();
}, 4500);
