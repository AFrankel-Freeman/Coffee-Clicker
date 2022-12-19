//state

//helper function

//dom selectors

//event listeners

let count = 0
const increaseCoffee =()=>{
    count += 1
   
document.getElementById("coffeeQuantity").innerHTML = count;

}
document.getElementById("mugClick").addEventListener("click",
increaseCoffee);




const dripButton=document.getElementById("buyCoffee");
const dripCounter= document.getElementById("dripQuantity");

dripCounter.innerhtml =0;
increaseDrip.onClick = ()=>{
    dripCounter.innerHTML++;
};



// let dripCount = 0
// const cpc= 1;
// const increaseDrip = ()=> {

//    let count = dripCount += 1;
//     document.getElementById("buyCoffee").innerHTML= count;
    // for (let i=0; i===15; i++){
    //     if (document.getElementById("dripQuantity" === "click") && count >= 15
    //      ); return coffeeCount =  i+1
    // };
    
// };
// document.getElementById ("buyCoffee").addEventListener("click", increaseDrip)