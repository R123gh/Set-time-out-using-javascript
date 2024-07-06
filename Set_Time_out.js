

setTimeout(()=>{
    console.log("Data is found")
},2000)
setInterval(()=>{
    console.log("raghav")
},1000)

function async(){
    
setTimeout(()=>{
    console.log("Data is found")
},1000)


setTimeout(()=>{
    console.log("Data 1 is found")
},2000)

setTimeout(()=>{
    console.log("Data 2 is found")
},3000)
}
async();


function a(){
   setTimeout(()=>{
    console.log("API is loading...");
   },2000)

     let b = setInterval(()=>{
    console.log("Data of Hotal is Fetching... ")
   },3000)

   setTimeout(()=>{
clearInterval(b);
   },9000)

   setTimeout(()=>{
    console.log("API is loading...");
   },10000)

   setTimeout(()=>{
    console.log("Hotal is found");
   },11000)

   setTimeout(()=>{
    console.log("Sucessfully fetched the data from the API");
   },12000)




}

a();




