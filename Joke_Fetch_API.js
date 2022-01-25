let jokes=document.querySelector('#joke');
let jokeBtn=document.querySelector('#jokebtn');


//Using promises to get the API
//To do promise we use fetch so..
//If fetch is allowed that means promise is fullfilled
//Else if fetch not allowed that means promise is rejectecd
//wWe use ->'then'<- keyword taht is if..//Promise is fullfilled then it'll go it given statement after then
//If data is fetched successfully, it'll be passed as res to fn and each data fetched will be converted into a json format
//If any error comes it'll be passed to error and printed using console
const generatejokes=()=>{

const setHeader={
    headers:{
        Accept:"application/json"
    }
}

    fetch('https://icanhazdadjoke.com/',setHeader)
    .then( (res)=>res.json() )
    .then( (data)=>{
        jokes.innerHTML=data.joke; //In side API jokes are present in "joke" named kay hence data which means api fetched amd converted to json and data.joke means joke from this data
    })
    .catch((error)=>console.log(error)); 
}

jokeBtn.addEventListener('click',generatejokes);
generatejokes();