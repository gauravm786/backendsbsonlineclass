//mongodb atlas online
//create cluster
//first of all go to browse collection>create database
// database access,network access,now go to connect and connect your application
//database access>add id and password and then go to temporary user and set duration for 1 week and then add user
//network access>add ip address>add current ip address>set duration for 1 week and then confirm
//now go to connect and click on connect your application and copy paste the link in vs code
//to connect mongodb in vscode we need to install mongoose framework and using mongoose.connect(copy paste above link in this and edit id and password with real id and password)
//mongoose.connect.on("connected",connected=>{console.log("connected to the database")})
//mongoose.connect.on("error",error=>{console.log("connection failed")})