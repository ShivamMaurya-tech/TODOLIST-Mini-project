let mybtn=document.querySelector(".btn1");
let inputfield=document.querySelector("#inputbox");

//let createdbtn=document.querySelector(".btn2");

let addelement=document.querySelector(".addingelement");
let Deletebtn=document.querySelector(".delbtn");
// let maintodoelement=document.querySelector(".divtodoelement");



//------------------2nd part
const handlebutton=()=>{
    addtodolist();
};




const gettodolistfromlocal=()=>{
   // return JSON.parse(localStorage.getItem("Youtubeplaylist"));
}

const addtodolistlocalstorage=(elementarray=>{
return localStorage.setItem("YoutubeList",JSON.stringify(elementarray));
});


//---------------5th part
  let  elementarray=gettodolistfromlocal()||[];


   const addtododynamiclist=(element)=>{
    // addtodolist(element);
    
    let divelement=document.createElement('div');
    divelement.classList.add('todo-item');
    divelement.innerHTML=`<li>${element}</li>
    <button class="delbtn">Delete</button>`;
    
    addelement.append(divelement);

   }



//------------------3rd part
const addtodolist=()=>{
   

    const todolistvalue=inputfield.value.trim();
    if(!todolistvalue=="" && !elementarray.includes(todolistvalue)){
    addtododynamiclist(todolistvalue);

    // let divelement=document.createElement('div');
    // divelement.classList.add(".divtodoelement");
    // divelement.innerHTML=`<li>${inputfield.value}</li>
    // <button class="delbtn">Delete</button>`;

    elementarray.push(todolistvalue);
    localStorage.setItem("Youtubeplaylist",JSON.stringify(elementarray));
    elementarray=[...new Set(elementarray)];
    console.log(elementarray);



JSON.parse(localStorage.getItem("Youtubeplaylist"));

// addelement.append(divelement);
inputfield.value="";

    }

};






//-----------first part
const showtodolist=()=>{

    console.log(elementarray);
  elementarray.forEach(element => {
        addtododynamiclist(element);
        
  });
}
showtodolist();

mybtn.addEventListener('click',handlebutton);




//delete the data 
addelement.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("delbtn")){

    
    removetodoelement(e);}
});



const removetodoelement=(e)=>{
    const removetodoele=e.target;
    let deletetodoelementcontent=removetodoele.previousElementSibling.innerText;
   
    let parentelement=removetodoele.parentElement;
     console.log(deletetodoelementcontent);
    parentelement.remove();
    

    elementarray=elementarray.filter((currenttodo)=>{

return currenttodo!=deletetodoelementcontent.toLowerCase()&&currenttodo!=deletetodoelementcontent.toUpperCase()&&currenttodo!=deletetodoelementcontent;
    })
console.log(elementarray);
addtodolistlocalstorage(elementarray);

}

