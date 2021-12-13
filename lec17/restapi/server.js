const http=require("http")
const app=require("./app")
const server=http.createServer(app)

server.listen(3333,console.log("app is running"))


//now we will upload image in cloudinary through vscode
//go and signup in cloudinary
//npm install express-fileupload 
