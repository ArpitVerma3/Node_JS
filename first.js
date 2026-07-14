const fs = require('fs');

console.log("AVavav");

fs.writeFile("output.txt", "Writing File", (err)=>{
    if(err) console.log("Error comes");
    else console.log("File writen successfully");
})