//for understanding

//npm init -y installs package.json file
//npm install express installs node_modules folder and package-lock.json file

//require() is used for adding and here we add http library to http variable

// const http=require("http")
// const app = require("./app") 

//to create server(here we create server which will work using http request and createserver() is used to create new server )
// const server=http.createServer()


//now host or say use app in server
// const server=http.createServer(app)


//we can use port no. directly,server.listen(port,--console.log(message)--)
// server.listen(3333,console.log("app is running"))

// The server.listen() method creates a listener on the specified port or path.
// syntax:- server.listen(port, hostname, backlog, callback);
//parameter values
// Parameter	Description
// port     	Optional. Specifies the port we want to listen to
// hostname  	Optional. Specifies the IP address we want to listen to
// backlog  	Optional. Specifies the max length of the queue of pending connections. Default 511
// callback 	Optional. Specifies a function to be executed when the listener has been added


//clean code or practice

const http=require('http')

const app=require("./app")

const server=http.createServer(app)


server.listen(3333,console.log("app is running"))

