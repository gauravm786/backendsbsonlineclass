const http = require("http")
const app = require("./app")
const server=http.createServer(app)
server.listen(3333,console.log("app is running"))



//body-parser is used to send data from frontend to backend in json format and first we will recieve data in back-end and then we will store it
//to install body-parser we type npm install body-parser in terminal
//URL Encoding is the process of converting string into valid URL format.

// URL - Uniform Resource Locator
// Web browsers request pages from web servers by using a URL.
// The URL is the address of a web page, like: https://www.w3schools.com.

// URL Encoding (Percent Encoding)
// URL encoding converts characters into a format that can be transmitted over the Internet.
// URLs can only be sent over the Internet using the ASCII character-set.
// Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format.
// URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits.
// URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign or with %20.


// body-parser is an NPM package that parses incoming request bodies in a middleware before your handlers, available under the req.body property.

// app.use(bp.json()) looks at requests where the Content-Type: application/json header is present and transforms the text-based JSON input into JS-accessible variables under req.body. app.use(bp.urlencoded({extended: true}) does the same for URL-encoded requests. the extended: true precises that the req.body object will contain values of any type instead of just strings.


// The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded

